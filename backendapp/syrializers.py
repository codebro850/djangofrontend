from rest_framework import serializers
from .models import robots

class robotserializer(serializers.ModelSerializer):
    class Meta:
        model=robots
        fields=('name','username','email')
