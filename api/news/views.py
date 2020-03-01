from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from news.serializers import ItemDetailSerializer, ItemListSerializer
from news.models import Item
# Create your views here.

class CreateItemView(generics.CreateAPIView):
    serializer_class = ItemDetailSerializer


class ListItemView(generics.ListAPIView):
    serializer_class = ItemListSerializer
    permission_classes = (IsAuthenticated, )
    queryset = Item.objects.all()

