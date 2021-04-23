from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name='Routes'),
    path('products/', views.getProducts, name='Products'),
    path('products/<str:productID>/', views.getProduct, name='Product'),
     
]