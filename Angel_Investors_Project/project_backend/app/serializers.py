from rest_framework import serializers


from app.models import Investor , Startup 


""" In this part, we use the serializers to allow us to
create and facilitate communication between the
back-end and the front-end """


class InvestorsSerializer(serializers.ModelSerializer):
    class Meta:
        model= Investor
        fields = ('investor_id',
                  'investor_name',
                  'investor_phone',
                  'investor_country',
                  'investor_sector',
                  'investor_experience',
                  'investor_income')
        

class StartupSerializer(serializers.ModelSerializer):
    class Meta:
        model= Startup
        fields = ('startup_id',
                  'startup_name',
                  'startup_phone',
                  'startup_sector',
                  'startup_stage',
                  'startup_team',
                  'startup_country',
                  'startup_city',
                  'startup_web',)
        
                # 'isExclusive', 
                # 'syndicateLeadEmail'

        # 'StartupImg'