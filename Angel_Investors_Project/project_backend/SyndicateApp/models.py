from django.db import models
from django.conf import settings

class Syndicate(models.Model):
    syndicate_lead = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='led_syndicate')
    syndicate_name = models.CharField(max_length=255)
    sectors = models.CharField(max_length=255)
    status = models.CharField(max_length=100, default='new', null=True, blank=True)  # e.g., new, inactive, active
    about = models.TextField()

    def __str__(self):
        return self.syndicate_name


class SyndicateLead(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    syndicate = models.OneToOneField(Syndicate, on_delete=models.CASCADE, related_name='lead')

    def __str__(self):
        return f"{self.user.username}'s Syndicate"


class SyndicateMember(models.Model):
    syndicate = models.ForeignKey(Syndicate, on_delete=models.CASCADE, related_name='members')
    investor = models.ForeignKey('investorApp.investor', on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.investor.user.username} - {self.syndicate.syndicate_name}"


