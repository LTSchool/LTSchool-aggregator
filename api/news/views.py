from django.shortcuts import render
from rest_framework import generics, request
from rest_framework.permissions import IsAuthenticated

from news.serializers import ItemDetailSerializer, ItemListSerializer, UserRegistrationSerializer
from news.models import Item
# Create your views here.

class CreateItemView(generics.CreateAPIView):
    serializer_class = ItemDetailSerializer
    permission_classes = (IsAuthenticated, )


class ListItemView(generics.ListAPIView):
    serializer_class = ItemListSerializer
    permission_classes = (IsAuthenticated, )
    queryset = Item.objects.all()


class RegisterUser(generics.CreateAPIView):
    serializer_class = UserRegistrationSerializer

