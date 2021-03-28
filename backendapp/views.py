from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .syrializers import robotserializer
from .models import robots
# Create your views here.

@api_view(['GET', 'POST'])
def robotslist(request):
    if request.method=="GET":
        data=robots.objects.all()
        serializer=robotserializer(data,context={'request':request},many=True)
        return Response(serializer.data)
    elif request.method=='POST':
        serializer=robotserializer(data=request.data)
        if serializer.is_valid:
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)  
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)     