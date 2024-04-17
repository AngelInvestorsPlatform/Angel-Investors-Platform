from django.db import models
from StartupApp.models import Startup
from SyndicateApp.models import Syndicate

class Deal(models.Model):
    startup = models.ForeignKey(Startup, on_delete=models.CASCADE, related_name='deals')
    syndicate = models.ForeignKey(Syndicate, related_name='deals', on_delete=models.CASCADE)
    memo = models.TextField()
    pitch_deck = models.FileField(upload_to='pitch_decks/')
    valuation = models.DecimalField(max_digits=15, decimal_places=2)
    allocation = models.DecimalField(max_digits=15, decimal_places=2)
    lead_investment = models.DecimalField(max_digits=15, decimal_places=2)
    total_currency = models.DecimalField(max_digits=15, decimal_places=2)
    minimum_investment = models.DecimalField(max_digits=15, decimal_places=2)
    deadline = models.DateField()

    def __str__(self):
        return f"{self.startup.startup_name} - {self.valuation}"

class DealMember(models.Model):
    deal = models.ForeignKey(Deal, on_delete=models.CASCADE, related_name='members')
    syndicate_member = models.ForeignKey('SyndicateApp.SyndicateMember', on_delete=models.CASCADE)
    invested_amount = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.syndicate_member.investor.user.username} invests {self.invested_amount} in {self.deal.startup.startup_name}"

class DealUpdate(models.Model):
    deal = models.ForeignKey(Deal, on_delete=models.CASCADE, related_name='updates', null=True)
    post = models.TextField()
    lead = models.ForeignKey('SyndicateApp.SyndicateLead', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return f"Update for {self.deal.startup.startup_name} - {self.post}"
