# Generated by Django 5.1.3 on 2024-11-26 01:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_day_meal'),
    ]

    operations = [
        migrations.AddField(
            model_name='day',
            name='meals',
            field=models.ManyToManyField(related_name='meals', to='app.meal'),
        ),
    ]
