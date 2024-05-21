from rest_framework import serializers
from .models import Startup, InvestmentRound, Offer, ExclusiveStartup
from SyndicateApp.models import Syndicate

class StartupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Startup
        fields = '__all__'



class InvestmentRoundSerializer(serializers.ModelSerializer):
    class Meta:
        model = InvestmentRound
        fields = ['ask', 'valuation']

    def create(self, validated_data):
        # Get the user from the request context
        user = self.context['request'].user

        # Check if the User has Startup data
        startup = getattr(user, 'startup_profile', None)
        if not startup:
            raise serializers.ValidationError("No associated startup found for the user.")
        
         # Check if an active Investment Round already exists and has an Active round
        if InvestmentRound.objects.filter(startup=startup, is_active=True).exists():
            raise serializers.ValidationError("An active investment round already exists.")
        
        # Create a new Investment Round
        return InvestmentRound.objects.create(startup=startup, **validated_data)



class StartupInvestmentRoundSerializer(serializers.ModelSerializer):
    startup_name = serializers.CharField(source='startup.startup_name', read_only=True)
    job_position = serializers.CharField(source='startup.job_position', read_only=True)
    full_name = serializers.CharField(source='startup.full_name', read_only=True)
    sector = serializers.CharField(source='startup.sector', read_only=True)
    stage = serializers.CharField(source='startup.stage', read_only=True)
    phone = serializers.CharField(source='startup.phone', read_only=True)
    email = serializers.EmailField(source='startup.email', read_only=True)


    class Meta:
        model = InvestmentRound
        fields = ['id','startup_name', 'job_position', 'full_name', 'sector', 'stage', 'phone', 'email', 'ask', 'valuation']




class OfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        fields = ['id', 'round', 'lead_investor', 'post', 'action']
        read_only_fields = ['lead_investor', 'action']  # Make lead_investor and accepted read-only

    def create(self, validated_data):
        # Assume lead_investor is set in the view from the request user's linked SyndicateLead
        user = self.context['request'].user
        lead_investor = Syndicate.objects.get(syndicate_lead=user)  # Ensure this link exists and handle exceptions properly
        validated_data['lead_investor'] = lead_investor
        return Offer.objects.create(**validated_data)
    



class OfferReviewSerializer(serializers.ModelSerializer):
    syndicate_name = serializers.CharField(source='lead_investor.syndicate_name', read_only=True)
    lead_name = serializers.SerializerMethodField()
    lead_email = serializers.SerializerMethodField()

    class Meta:
        model = Offer
        fields = ['id','syndicate_name', 'lead_name', 'lead_email', 'post']


    def get_lead_name(self, obj):
        if hasattr(obj.lead_investor.syndicate_lead, 'investor_profile'):
            return obj.lead_investor.syndicate_lead.investor_profile.full_name
        else:
            # Check for any other user profile that might exist
            return obj.lead_investor.syndicate_lead.get_full_name() if hasattr(obj.lead_investor.syndicate_lead, 'get_full_name') else 'Unknown Lead'
 
    def get_lead_email(self, obj):
        # Accessing user's email
        return obj.lead_investor.syndicate_lead.email
    

class OfferUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        fields = ['action', 'rejection_reason']

    def validate_action(self, value):
        if value not in ['pending', 'accepted', 'rejected']:
            raise serializers.ValidationError("Invalid action for the offer.")
        return value

    def update(self, instance, validated_data):
        instance.action = validated_data.get('action', instance.action)
        if instance.action == 'rejected':
            instance.rejection_reason = validated_data.get('rejection_reason', instance.rejection_reason)
        instance.save()
        return instance
    


class LeadOfferReviewSerializer(serializers.ModelSerializer):
    startup_id = serializers.IntegerField(source='round.startup.id')
    startup_name = serializers.CharField(source='round.startup.startup_name')
    full_name = serializers.CharField(source='round.startup.full_name')
    post = serializers.CharField()
    action = serializers.CharField()
    rejection_reason = serializers.CharField(allow_null=True)

    class Meta:
        model = Offer
        fields = ['startup_id', 'startup_name', 'full_name', 'post', 'action', 'rejection_reason']



class ExclusiveStartupSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExclusiveStartup
        fields = '__all__'
        read_only_fields = ['syndicate']



