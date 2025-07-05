from django.shortcuts import render
from .products import products
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product
from .serializer import ProductSerializer

# Create your views here.


@api_view(['GET'])
def getRoutes(request):
    routes = [
        {'endpoint': '/api/products/', 'method': 'GET', 'description': 'Get all products'},
        {'endpoint': '/api/products/<id>/', 'method': 'GET', 'description': 'Get a single product'},
    ]
    return Response(routes) 

@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)
    
@api_view(['GET'])
def getProduct(request, pk):
   product = Product.objects.get(_id=pk)
   serializer = ProductSerializer(product, many =False)
   return Response(serializer.data)
