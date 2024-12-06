from rest_framework import serializers
from app.models import *

class AllergenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Allergen
        fields = '__all__'

class ItemSerializer(serializers.ModelSerializer):
    allergens = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=Allergen.objects.all(),
        write_only=True
    )
    allergen_details = AllergenSerializer(
        many=True,
        source='allergens',
        read_only=True
    )
    class Meta:
        model = Item
        fields = '__all__'

class DaySerializer(serializers.ModelSerializer):
    class Meta:
        model = Day
        fields = '__all__'

class MealSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meal
        fields = '__all__'

