from rest_framework import serializers
from app.models import *

class AllergenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Allergen
        fields = '__all__'

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'

class MealSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meal
        fields = '__all__'

class DaySerializer(serializers.ModelSerializer):
    items = ItemSerializer(many=True, read_only=True)  # Use nested serializer
    meals = MealSerializer(many=True, read_only=True)  # Use nested serializer

    class Meta:
        model = Day
        fields = '__all__'
