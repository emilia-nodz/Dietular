# Generated by Django 5.1.3 on 2024-12-09 22:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0014_alter_day_id_alter_item_allergens'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='meal',
            name='mealImage',
        ),
        migrations.AlterField(
            model_name='item',
            name='allergens',
            field=models.ManyToManyField(related_name='items', to='app.allergen'),
        ),
    ]
