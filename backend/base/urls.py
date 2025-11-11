from django.urls import path
from . import views

urlpatterns =[
    path('',views.getRoutes,name="routes"),
    path('products/',views.getProducts,name="products"),
    path('products/<str:pk>/',views.getProduct,name="product"),
    path('register/', views.registerUser, name="register"),
    path('login/', views.loginUser, name="login"),
]