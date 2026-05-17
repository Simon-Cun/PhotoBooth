from django.contrib import admin
from .models import Friendship, Like, Comment, SavedCard

admin.site.register(Friendship)
admin.site.register(Like)
admin.site.register(Comment)
admin.site.register(SavedCard)