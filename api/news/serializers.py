from rest_framework import serializers
from news.models import Item


class ItemDetailSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Item
        fields = "__all__"


class ItemListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ['caption', 'date', 'source']
