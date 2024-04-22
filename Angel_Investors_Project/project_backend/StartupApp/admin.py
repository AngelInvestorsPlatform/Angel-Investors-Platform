from django.contrib import admin
from .models import Startup, InvestmentRound, Offer

# Register your models here.


admin.site.register(Startup)
admin.site.register(InvestmentRound)
admin.site.register(Offer)

