from django.db import models
from SyndicateApp.models import Syndicate
from django.conf import settings


class investor(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='investor_profile')
    full_name = models.CharField(max_length=255)
    phone = models.CharField(max_length=15, null=True, blank=True)
    sectors = models.CharField(max_length=255)
    experience = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    income = models.CharField(max_length=255)
    photo = models.ImageField(upload_to='investors_photos/', null=True, blank=True)
    about = models.TextField(default="An angel investor")

    def __str__(self):
        return self.full_name

class SyndicateMembership(models.Model):
    syndicate = models.ForeignKey(Syndicate, on_delete=models.CASCADE, related_name='memberships')
    investor = models.ForeignKey(investor, on_delete=models.CASCADE, related_name='memberships')
    joined = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.investor.full_name} - {self.syndicate.syndicate_name}"

# Assuming you're referencing Deal in a ForeignKey somewhere else in investorApp
class Investment(models.Model):
    deal = models.ForeignKey('DealsApp.Deal', on_delete=models.CASCADE, related_name='investments')
    investor = models.ForeignKey(investor, on_delete=models.CASCADE, related_name='investments')
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    invested_on = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.investor.full_name} invests {self.amount} in {self.deal.startup.startup_name}"
