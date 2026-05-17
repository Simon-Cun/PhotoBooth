from django.db import models
from users.models import User


class PhotoCard(models.Model):
    STYLE_CHOICES = [
        ('blush', 'Blush'),
        ('sunshine', 'Sunshine'),
        ('night', 'Night'),
        ('pearl', 'Pearl'),
    ]

    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='photo_cards')
    style = models.CharField(max_length=20, choices=STYLE_CHOICES, default='blush')
    headline = models.CharField(max_length=100, blank=True)
    message = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.owner.username} - {self.headline}"


class PhotoCardImage(models.Model):
    photo_card = models.ForeignKey(PhotoCard, on_delete=models.CASCADE, related_name='images')
    image_url = models.URLField()
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.photo_card} - image {self.order}"