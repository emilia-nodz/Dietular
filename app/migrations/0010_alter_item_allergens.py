# Generated by Django 5.1.3 on 2024-11-29 10:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0009_rename_meal_image_meal_mealimage'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='allergens',
            field=models.ManyToManyField(blank=True, null=True, related_name='items', to='app.allergen'),
        ),
    ]