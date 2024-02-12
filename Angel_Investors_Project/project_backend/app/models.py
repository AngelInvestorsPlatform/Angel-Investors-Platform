from django.db import models

# Create your models here.

""" In this part of the code, we define the data required 
for the “Tables” that will be added to the database
with this same structure """

#Just to test that everything works, you can delete it later
class Investors (models.Model):
    InvestorsId = models.AutoField(primary_key=True)
    InvestorsName = models.CharField(max_length=100)

class Startup (models.Model):
   StartupId = models.AutoField(primary_key=True)
   StartupName = models.CharField (max_length=100)
   StartupImg = models.ImageField(upload_to='', default='default_image.jpg')