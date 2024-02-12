from rest_framework import serializers


from app.models import Investors , Startup 


""" In this part, we use the serializers to allow us to
create and facilitate communication between the
back-end and the front-end """


class InvestorsSerializer(serializers.ModelSerializer):
    class Meta:
        model= Investors
        fields = ('InvestorsId',
                  'InvestorsName')
        

class StartupSerializer(serializers.ModelSerializer):
    class Meta:
        model= Startup
        fields = ('StartupId',
                  'StartupName',
                  'StartupImg')