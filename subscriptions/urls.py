from django.urls import path, include 
from . import views

from . import views

urlpatterns = [
    path('', views.subscriptions, name='subscriptions'),
    path("create-sub", views.create_sub, name="create sub"),
    path("complete", views.complete, name="complete"),
    ]
