from django.shortcuts import render
from rest_framework import generics
from news.serializers import ItemDetailSerializer
# Create your views here.

class CreateItemView(generics.CreateAPIView):
    serializer_class = ItemDetailSerializer


