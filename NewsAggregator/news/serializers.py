from rest_framework import serializers
from NewsAggregator.news.models import Item

class ItemDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = "__all__"