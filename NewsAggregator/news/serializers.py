from rest_framework import serializers
from news.models import Item

class ItemDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = "__all__"


class ItemListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = "__all__"