from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from .models import Product, Category
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .serializers import ProductSerializer, CategorySerializer


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


@action(methods=['get'], detail=True)
def products(self, request, pk= None):
    category = self.get_object()
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

def product_list(request):
    products = Product.objects.all()
    data = [p.to_json() for p in products]
    return JsonResponse(data, safe=False)

def product_detail(request, pk):
    product = get_object_or_404(Product, id=id)
    return JsonResponse(product.to_json())

def category_list(request):
    categories = Category.objects.all()
    data = [c.to_json() for c in categories]
    return JsonResponse(data, safe=False)

def category_detail(request, id):
    category = get_object_or_404(Category, id=id)
    return JsonResponse(category.to_json())

def category_products(request, id):
    products = Product.objects.filter(category_id=id)
    data = [p.to_json() for p in products]
    return JsonResponse(data, safe=False)