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
    syndicate = models.ForeignKey(Syndicate, on_delete=models.CASCADE, related_name='lead')
    investor = models.ForeignKey('investorApp.investor', null=True, on_delete=models.CASCADE, related_name='syndicate_leadership')

    def __str__(self):
        return f"{self.investor.user.username} - {self.syndicate.syndicate_name}"


class SyndicateMember(models.Model):
    syndicate = models.ForeignKey(Syndicate, on_delete=models.CASCADE, related_name='members')
    investor = models.ForeignKey('investorApp.investor', on_delete=models.CASCADE, related_name='syndicate_memberships')

    def __str__(self):
        return f"{self.investor.user.username} - {self.syndicate.syndicate_name}"


class JoinRequest(models.Model):
    syndicate = models.ForeignKey('Syndicate', related_name='join_requests', on_delete=models.CASCADE)
    investor = models.ForeignKey('investorApp.investor', related_name='join_requests', on_delete=models.CASCADE)
    action = models.CharField(max_length=10, choices=(('pending', 'Pending'), ('accepted', 'Accepted'), ('rejected', 'Rejected')), default='pending')

    def __str__(self):
        return f"{self.investor.user.username} requests to join {self.syndicate.syndicate_name} ({self.status})"