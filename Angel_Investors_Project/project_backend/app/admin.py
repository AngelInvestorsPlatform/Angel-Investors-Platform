from django.contrib import admin

from .models import Investor, Startup

"""
This file is used to control the parameters that
appear in the Administration page from Django

It can be accessed via the URL '/admin'
"""



# Register your models here.

admin.site.register(Investor)
admin.site.register(Startup)