from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('app1', views.ProductView)

urlpatterns = [
    #path('', include(router.urls)),
    path('inscription', include(router.urls))
]
