from dataclasses import fields
from django.db import models
from django.core.validators import MinLengthValidator

# Create your models here.

""" In this part of the code, we define the data required 
for the “Tables” that will be added to the database
with this same structure """

# The Conestants


COUNTRY_CHOICES = [
    ('USA', 'United States'),
    ('UK', 'United Kingdom'),
    ('Canada', 'Canada'),
    ('Saudi Arabia', 'Saudi Arabia'),
    ('Kuwait', 'Kuwait'),
    ('Qatar', 'Qatar'),
    ('Bahrain', 'Bahrain'),
    ('United Arab Emirates', 'United Arab Emirates'),
    ('Egypt', 'Egypt'),
    ('Oman', 'Oman'),
    ('India', 'India'),
    ('Other', 'Other'),
]

# For The Investor
IN_SECTORS_CHOICES = [
    ('Biotech', 'Biotech'),
    ('Adtech', 'Adtech'),
    ('Analytics', 'Analytics'),
    ('Market', 'Market'),
    ('Agriculture & Food Processing', 'Agriculture & Food Processing'),
    ('Information Technology', 'Information Technology'),
    ('ICT', 'ICT'),
    ('Health', 'Health'),
    ('Finance', 'Finance'),
    ('Education', 'Education'),
]

EXPERIENCE_CHOICES = [
    ('Less than 1 year', 'Less than 1 year'),
    ('1-2 years', '1-2 years'),
    ('3-5 years', '3-5 years'),
    ('6-10 years', '6-10 years'),
    ('More than 10 years', 'More than 10 years'),
]

INCOME_CHOICES = [
    ('Less than 100K', 'Less than 100K'),
    ('200K-300K', '200K-300K'),
    ('300K-400K', '300K-400K'),
    ('400K-500K', '400K-500K'),
    ('600K-700K', '600K-700K'),
    ('800K-900K', '800K-900K'),
    ('More than 900K', 'More than 900K'),
]

# For The Startup

ST_SECTORS_CHOICES = [
    ('Technology', 'Technology'),
    ('Healthcare', 'Healthcare'),
    ('Environmental Technology', 'Environmental Technology'),
    ('Streaming Services', 'Streaming Services'),
    ('Ecommerce', 'Ecommerce'),
    ('Delivery Services', 'Delivery Services'),
    ('Educational Technology', 'Educational Technology'),
    ('Marketing', 'Marketing'),
    ('Artificial Intelligence', 'Artificial Intelligence'),
    ('LegalTech', 'LegalTech'),
]

class Investor(models.Model):
    """Represents an investor in the platform."""

    investor_id = models.AutoField(primary_key=True)
    investor_name = models.CharField(max_length=100, default='', null=False)
    investor_phone = models.CharField(max_length=20, null=True, blank=True)
    investor_country = models.CharField(max_length=20, choices=COUNTRY_CHOICES, default='SA', null=True, blank=True)
    investor_sector = models.CharField(max_length=5000, default='Information Technology')
    investor_experience = models.CharField(max_length=50, choices=EXPERIENCE_CHOICES, default='Less than 1 year')
    investor_income = models.CharField(max_length=50, default='Less than 100K')

    def __str__(self):
        return self.investor_name

    class Meta:
        verbose_name = "Investor"
        verbose_name_plural = "Investors"


class Startup(models.Model):
    """Represents a startup seeking funding."""

    startup_id = models.AutoField(primary_key=True)
    startup_name = models.CharField(max_length=100, null=False)
    startup_phone = models.CharField(max_length=20, null=False, blank=True)
    startup_sector = models.CharField(max_length=50, default='Technology', blank=True)
    startup_stage = models.CharField(max_length=20,  null=False, blank=True)
    startup_team = models.CharField(max_length=2000, null=False, blank=True)
    startup_country = models.CharField(max_length=20, choices=COUNTRY_CHOICES, default='SA')
    startup_city = models.CharField(max_length=50, null=True, blank=True)
    startup_web = models.URLField(max_length=200, null=False, blank=True)
    # isExclusive = models.BooleanField(null=False, default=False)
    # syndicateLeadEmail = models.CharField(max_length=50, null=True, blank=True)

    def __str__(self):
        return self.startup_name

    class Meta:
        verbose_name = "Startup"
        verbose_name_plural = "Startups"


# Relationship between models (optional):
# An investor can invest in multiple startups, and a startup can have multiple investors.
# investor = models.ForeignKey(Investor, on_delete=models.CASCADE, related_name='invested_startups')
