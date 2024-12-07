from django.contrib import admin
from .models import Allergen, Item, Meal

# Admin customization for Allergen
class AllergenAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')  # Fields to display in the admin list view
    search_fields = ('name',)  # Enable search by name
    ordering = ('name',)  # Order by name

# Admin customization for Item
class ItemAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'weight', 'calories', 'carbohydrates', 'proteins', 'fats')  # Fields to display
    search_fields = ('name', 'description')  # Enable search by name and description
    list_filter = ('allergens',)  # Filter by allergens
    ordering = ('name',)  # Order by name

class DayAdmin(admin.ModelAdmin):
    list_display = ('id', 'date')  # Columns to display in the list view
    search_fields = ('date',)  # Enable searching by date
    filter_horizontal = ('items',)  # Use a filter widget for the ManyToManyField 'items'
    ordering = ('date',)

class MealAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'numberOfPortions', 'portionWeight', 'caloriesPerPortion')
    search_fields = ('name', 'description')  # Enable searching by name and description
    filter_horizontal = ('items',)  # Use a filter widget for the ManyToManyField 'items'
    ordering = ('name',)  # Default ordering


# Register the models with the admin site
admin.site.register(Allergen, AllergenAdmin)
admin.site.register(Item, ItemAdmin)
admin.site.register(Meal, MealAdmin)
