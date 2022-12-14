# Generated by Django 4.1.1 on 2022-09-13 11:40

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('genres', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Game',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('publisher', models.CharField(max_length=100)),
                ('developer', models.CharField(max_length=100)),
                ('year', models.PositiveIntegerField()),
                ('image_url', models.CharField(max_length=100)),
                ('genres', models.ManyToManyField(related_name='games', to='genres.genre')),
            ],
        ),
    ]
