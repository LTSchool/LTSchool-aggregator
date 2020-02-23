from django.shortcuts import render
from rest_framework import generics
from NewsAggregator.news.serializers import ItemDetailSerializer
# Create your views here.

class CreateItemView(generics.CreateAPIView):
    serializer_class = ItemDetailSerializer