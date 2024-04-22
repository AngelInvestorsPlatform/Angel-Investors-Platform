from django.contrib import admin
from .models import investor, SyndicateMembership, Investment

# Register your models here.


admin.site.register(investor)
admin.site.register(SyndicateMembership)
admin.site.register(Investment)


