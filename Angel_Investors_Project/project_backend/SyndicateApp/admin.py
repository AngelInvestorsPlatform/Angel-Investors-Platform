from django.contrib import admin
from .models import Syndicate, SyndicateLead, SyndicateMember


# Register your models here.


admin.site.register(Syndicate)
admin.site.register(SyndicateLead)
admin.site.register(SyndicateMember)

