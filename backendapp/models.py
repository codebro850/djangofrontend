from django.db import models

# Create your models here.
class robots(models.Model):
    name=models.CharField(max_length=50,default="")
    username=models.CharField(max_length=100,default="")
    email=models.CharField(max_length=200,default="")
    def __str__(self):
        return self.name