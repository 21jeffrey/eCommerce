from django.contrib.auth import authenticate
from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token
from rest_framework import status
from .user_serializer import UserSerializer, UserRegisterSerializer
from django.contrib.auth import authenticate


@api_view(['POST'])
def registerUser(request):
    serializer = UserRegisterSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        token, created = Token.objects.get_or_create(user=user)
        return Response({'user': UserSerializer(user).data, 'token': token.key}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def loginUser(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(username=username, password=password)    
    if user:
        token, created = Token.objects.get_or_create(user=user)
        return Response({'user': UserSerializer(user).data, 'token': token.key})
    return Response({'detail': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import render
from .products import products
from django.http import JsonResponse
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
