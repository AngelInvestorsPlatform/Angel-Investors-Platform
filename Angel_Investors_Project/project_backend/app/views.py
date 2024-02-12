from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from django.core.files.storage import default_storage


from app.models import Investors, Startup
from app.serializers import InvestorsSerializer, StartupSerializer

""" In this part used to handle the request from the URL 
(we try to use this same structure) 

It may be a bit confusing because the elements come in JSON format from react
 and we unpack them so that they are added well to the databases ^_^  

GET = to fetch data from the database

POST = to add data to the database

PUT = to update data

DELETE = to delete data """

# Create your views here.


#for investors
@csrf_exempt
def InvestorsApi (request, id=0):
    if request.method=='GET':
        investors = Investors.objects.all()
        investors_serializer = InvestorsSerializer (investors, many=True)
        return JsonResponse (investors_serializer.data, safe=False)
    
    elif request. method=='POST':
        investors_data=JSONParser().parse(request)
        investors_serializer = InvestorsSerializer(data=investors_data)
        if investors_serializer.is_valid():
            investors_serializer.save()
            return JsonResponse ("Added Successfully!!", safe=False)
        return JsonResponse("Failed to Add.", safe=False)
    
    elif request.method=='PUT':
        investors_data = JSONParser ().parse(request)
        investors = Investors.objects.get (InvestorsId=investors_data[ 'InvestorsId'])
        investors_serializer=InvestorsSerializer (investors, data=investors_data)
        if investors_serializer.is_valid():
            investors_serializer.save()
            return JsonResponse ("Updated Successfully!!", safe=False)
        return JsonResponse ("Failed to Update.", safe=False)
    
    elif request.method == 'DELETE':
        investors = Investors.objects.get(InvestorsId=id)  
        investors.delete()
        return JsonResponse("Deleted Successfully!!", safe=False)



#for Startup
@csrf_exempt
def StartupApi(request, id=0):
    if request.method == 'GET':
        startups = Startup.objects.all()
        startups_serializer = StartupSerializer(startups, many=True)
        return JsonResponse(startups_serializer.data, safe=False)
    
    elif request.method == 'POST':
        startup_data = JSONParser().parse(request)
        startup_serializer = StartupSerializer(data=startup_data)
        if startup_serializer.is_valid():
            startup_serializer.save()
            return JsonResponse("Added Successfully!!", safe=False)
        return JsonResponse("Failed to Add.", safe=False)
    
    elif request.method == 'PUT':
        startup_data = JSONParser().parse(request)
        startup = Startup.objects.get(StartupId=startup_data['StartupId'])
        startup_serializer = StartupSerializer(startup, data=startup_data)
        if startup_serializer.is_valid():
            startup_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)
    #adding and updating img still not working
    
    elif request.method == 'DELETE':
        startup = Startup.objects.get(StartupId=id)
        startup.delete()
        return JsonResponse("Deleted Successfully!!", safe=False)
    


"""Here I was trying to add the ability to upload images "not completed yet" feature."""

#To save uploaded images
@csrf_exempt
def SaveFile(request):
    file=request.FILES['uploadedFile']
    file_name = default_storage.save(file.name, file)

    return JsonResponse(file_name, safe=False)