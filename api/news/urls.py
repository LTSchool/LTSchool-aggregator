from django.contrib import admin
from django.urls import path, include
from news.views import *


app_name = 'news'
urlpatterns = [
    path('create/', CreateItemView.as_view()),
    path('all/', ListItemView.as_view()),
    path('id/<int:pk>/', RetrieveUpdateDestroyItemView.as_view(), name='Item')
]
