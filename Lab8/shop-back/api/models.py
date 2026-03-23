from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=255)

    def to_json(self):
        return {'name': self.name}

class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField(default=0)
    count = models.IntegerField(default=0)
    description = models.TextField(default="")
    is_activated = models.BooleanField(default=False)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')

    def to_json(self):
        return {'name': self.name, 'price': self.price, 'count': self.count , 'description': self.description, 'is_activated': self.is_activated}


