from django.contrib import admin
from django.urls import path, include
from news.views import *


app_name = 'news'
urlpatterns = [
    path('create/', CreateItemView.as_view()),
]