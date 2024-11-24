from django.contrib import admin
from .models import Allergen, Item

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

# Register the models with the admin site
admin.site.register(Allergen, AllergenAdmin)
admin.site.register(Item, ItemAdmin)
