from rest_framework import permissions
from .models import SyndicateMember, Syndicate


class IsSyndicateLeadOrMember(permissions.BasePermission):
    """
    Permission to only allow the syndicate lead or members of the syndicate to view the deal.
    """

    def has_object_permission(self, request, view, obj):
        # Ensure the user is the syndicate lead
        if obj.syndicate.syndicate_lead == request.user:
            return True

        # Ensure checking against user instance, not email or other string
        return SyndicateMember.objects.filter(syndicate=obj.syndicate, investor__user=request.user).exists()