from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^user$', views.user),
    url(r'^result$', views.result),
    url(r'^again$', views.again)
]