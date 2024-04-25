from django.db import models
from django.conf import settings



class Startup(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='startup_profile')
    startup_name = models.CharField(max_length=100, null=False)
    sector = models.CharField(max_length=5000, null=False, blank=True)
    city =  models.CharField(max_length=50, null=True, blank=True)
    country = models.CharField(max_length=20, default='SA')
    phone = models.CharField(max_length=20, null=True, blank=True)
    team_size = models.CharField(max_length=2000, null=False, blank=True)
    website = models.URLField(max_length=200, null=True, blank=True)
    stage = models.CharField(max_length=20,  null=False, blank=True, default='Pre-seed')
    email = models.EmailField(max_length=100, null=False)
    photo = models.ImageField(upload_to='startups/', null=True, blank=True)
    about = models.CharField(max_length=5000, null=False, blank=True)
    full_name = models.CharField(max_length=100, null=True, blank=True)
    job_position = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return self.startup_name

class InvestmentRound(models.Model):
    startup = models.ForeignKey(Startup, on_delete=models.CASCADE)
    ask = models.DecimalField(max_digits=10, decimal_places=2)
    valuation = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.startup.startup_name} - {self.ask}"

class Offer(models.Model):
    round = models.ForeignKey(InvestmentRound, on_delete=models.CASCADE)
    lead_investor = models.ForeignKey('SyndicateApp.SyndicateLead', on_delete=models.CASCADE)
    post = models.TextField()
    accepted = models.BooleanField(default=False)

    def __str__(self):
        return f"Offer from {self.lead_investor} to {self.round.startup.startup_name}"
