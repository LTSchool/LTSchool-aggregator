from django.contrib import admin
from django.urls import path, include
import NewsAggregator.news.views as vw


app_name = 'news'
urlpatterns = [
    path('create/', vw.CreateItemView.as_view()),
]