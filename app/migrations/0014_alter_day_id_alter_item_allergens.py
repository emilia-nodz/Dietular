# Generated by Django 5.1.3 on 2024-12-09 18:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0013_alter_item_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='day',
            name='id',
            field=models.BigIntegerField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='item',
            name='allergens',
            field=models.ManyToManyField(blank=True, null=True, related_name='items', to='app.allergen'),
        ),
    ]
