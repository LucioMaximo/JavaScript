# Generated by Django 3.1.1 on 2020-09-04 21:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0004_auto_20200904_2106'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='thumbnail',
            field=models.ImageField(blank=True, default='default.png', upload_to=''),
        ),
    ]