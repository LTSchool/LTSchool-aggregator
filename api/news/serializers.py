from rest_framework import serializers
from news.models import Item, User


class ItemDetailSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Item
        fields = "__all__"


class ItemListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ['caption', 'date', 'source']


class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email']
        )
        user.set_password(validated_data['password'])
        user.save()

        return user


    class Meta:
        model = User
        fields = ['email', 'username', 'password']