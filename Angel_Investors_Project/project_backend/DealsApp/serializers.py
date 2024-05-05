from rest_framework import serializers
from django.contrib.contenttypes.models import ContentType
from .models import Deal, DealMember, DealUpdate
from StartupApp.models import Startup ,  ExclusiveStartup
from SyndicateApp.models import Syndicate, SyndicateMember


class DealSerializer(serializers.ModelSerializer):
    startup_id = serializers.IntegerField(write_only=True, required=False)
    exclusive_startup_id = serializers.IntegerField(write_only=True, required=False)

    class Meta:
        model = Deal
        exclude = ['content_type', 'object_id', 'syndicate']  # Automatically set these fields

    def validate(self, data):
        startup_id = data.get('startup_id')
        exclusive_startup_id = data.get('exclusive_startup_id')

        if startup_id and exclusive_startup_id:
            raise serializers.ValidationError("Please provide only one of 'startup_id' or 'exclusive_startup_id'.")

        if not startup_id and not exclusive_startup_id:
            raise serializers.ValidationError("You must provide either 'startup_id' or 'exclusive_startup_id'.")

        syndicate = self.context['syndicate']
        content_type_startup = ContentType.objects.get_for_model(Startup)
        content_type_exclusive = ContentType.objects.get_for_model(ExclusiveStartup)

        if startup_id:
            if Deal.objects.filter(syndicate=syndicate, content_type=content_type_startup, object_id=startup_id).exists():
                raise serializers.ValidationError("This deal has already been added for the specified startup.")
        if exclusive_startup_id:
            if Deal.objects.filter(syndicate=syndicate, content_type=content_type_exclusive, object_id=exclusive_startup_id).exists():
                raise serializers.ValidationError("This deal has already been added for the specified exclusive startup.")

        return data

    def create(self, validated_data):
        startup_id = validated_data.pop('startup_id', None)
        exclusive_startup_id = validated_data.pop('exclusive_startup_id', None)

        if startup_id:
            validated_data['content_type'] = ContentType.objects.get_for_model(Startup)
            validated_data['object_id'] = startup_id
        elif exclusive_startup_id:
            validated_data['content_type'] = ContentType.objects.get_for_model(ExclusiveStartup)
            validated_data['object_id'] = exclusive_startup_id

        validated_data['syndicate'] = self.context['syndicate']
        return super().create(validated_data)
    





class DealMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = DealMember
        fields = '__all__'

class DealUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = DealUpdate
        fields = '__all__'




class DealDetailSerializer(serializers.ModelSerializer):
    startup_name = serializers.SerializerMethodField()
    sector = serializers.SerializerMethodField()
    website = serializers.SerializerMethodField()
    syndicate_name = serializers.CharField(source='syndicate.syndicate_name')
    syndicate_lead_first_name = serializers.CharField(source='syndicate.syndicate_lead.first_name')

    class Meta:
        model = Deal
        fields = [
            'startup_name', 
            'sector', 
            'website', 
            'syndicate_name', 
            'syndicate_lead_first_name', 
            'memo', 
            'valuation', 
            'allocation', 
            'lead_investment', 
            'total_curry', 
            'minimum_investment', 
            'deadline'
        ]

    def get_startup_name(self, obj):
        return obj.startup.startup_name if isinstance(obj.startup, Startup) else obj.startup.startup_name

    def get_sector(self, obj):
        return obj.startup.sector if isinstance(obj.startup, Startup) else obj.startup.sector

    def get_website(self, obj):
        return obj.startup.website if isinstance(obj.startup, Startup) else obj.startup.website



class DealListSerializer(serializers.ModelSerializer):
    startup_name = serializers.SerializerMethodField()
    sector = serializers.SerializerMethodField()
    stage = serializers.SerializerMethodField()

    class Meta:
        model = Deal
        fields = ['id', 'startup_name', 'sector', 'stage', 'allocation', 'deadline']

    def get_startup_name(self, obj):
        if hasattr(obj, 'startup'):
            return obj.startup.startup_name
        elif hasattr(obj, 'exclusive_startup'):
            return obj.exclusive_startup.startup_name
        return None

    def get_sector(self, obj):
        if hasattr(obj, 'startup'):
            return obj.startup.sector
        elif hasattr(obj, 'exclusive_startup'):
            return obj.exclusive_startup.sector
        return None

    def get_stage(self, obj):
        if hasattr(obj, 'startup'):
            return obj.startup.stage
        elif hasattr(obj, 'exclusive_startup'):
            return obj.exclusive_startup.stage
        return None
    

class MemberDealsSerializer(serializers.ModelSerializer):
    startup_name = serializers.SerializerMethodField()
    sector = serializers.SerializerMethodField()
    stage = serializers.SerializerMethodField()
    syndicate_name = serializers.CharField(source='syndicate.syndicate_name')
    syndicate_lead_name = serializers.CharField(source='syndicate.syndicate_lead.first_name')

    class Meta:
        model = Deal
        fields = ['id', 'startup_name', 'sector', 'stage', 'syndicate_name', 'syndicate_lead_name', 'allocation', 'deadline']

    def get_startup_name(self, obj):
        return obj.startup.startup_name if hasattr(obj, 'startup') else obj.exclusive_startup.startup_name

    def get_sector(self, obj):
        return obj.startup.sector if hasattr(obj, 'startup') else obj.exclusive_startup.sector

    def get_stage(self, obj):
        return obj.startup.stage if hasattr(obj, 'startup') else obj.exclusive_startup.stage
 
   

class DealMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = DealMember
        fields = ['deal', 'invested_amount']

    def validate(self, data):
        # Ensure the user is a member of the syndicate associated with the deal
        user = self.context['request'].user
        deal = data.get('deal')

        # Check if user is a member of the syndicate that owns the deal
        if not SyndicateMember.objects.filter(syndicate=deal.syndicate, investor__user=user).exists():
            raise serializers.ValidationError("You are not a member of the syndicate that owns this deal.")

        return data

    def create(self, validated_data):
        # Get the syndicate member instance
        user = self.context['request'].user
        syndicate_member = SyndicateMember.objects.get(syndicate=validated_data['deal'].syndicate, investor__user=user)
        
        # Create the DealMember instance
        return DealMember.objects.create(
            syndicate_member=syndicate_member,
            **validated_data
        )
    


class InvestorDealsSerializer(serializers.ModelSerializer):
    startup_name = serializers.SerializerMethodField()
    syndicate_name = serializers.CharField(source='deal.syndicate.syndicate_name')
    invested_amount = serializers.DecimalField(max_digits=10, decimal_places=2)
    deal_id = serializers.IntegerField(source='deal.id')

    class Meta:
        model = DealMember
        fields = ['startup_name', 'syndicate_name', 'invested_amount', 'deal_id']

    def get_startup_name(self, obj):
        # Check if the deal is linked with a Startup or an ExclusiveStartup
        if hasattr(obj.deal, 'startup'):
            return obj.deal.startup.startup_name
        return obj.deal.exclusive_startup.startup_name


class MemberInvestmentSerializer(serializers.ModelSerializer):
    investor_name = serializers.CharField(source='syndicate_member.investor.full_name')
    invested_amount = serializers.DecimalField(max_digits=10, decimal_places=2)

    class Meta:
        model = DealMember
        fields = ['investor_name', 'invested_amount']