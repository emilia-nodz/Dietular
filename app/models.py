from django.db import models

# alergen
class Allergen(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, unique=True)

    class Meta:
        verbose_name = "Allergen"  # Singular form for display in admin panel
        verbose_name_plural = "Allergens"  # Plural form for display in admin panel
        ordering = ['name']  # Default ordering by name in ascending order

    def __str__(self):
        return self.name

# produkt
class Item(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    description = models.TextField()
    weight = models.IntegerField()
    calories = models.IntegerField()
    carbohydrates = models.IntegerField()
    proteins = models.IntegerField()
    fats = models.IntegerField()
    # pozwala aby jeden produkt miał kilka alergenów, a jeden alergen był przypisany kilku produktom
    allergens = models.ManyToManyField(Allergen, related_name='items')

    class Meta:
        verbose_name = "Item"  # Singular form for display in admin panel
        verbose_name_plural = "Items"  # Plural form for display in admin panel
        ordering = ['name']  # Default ordering by name in ascending order

    def __str__(self):
        return self.name