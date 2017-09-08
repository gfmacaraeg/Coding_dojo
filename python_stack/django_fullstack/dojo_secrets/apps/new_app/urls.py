from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^registration$', views.registration),
    url(r'^login$', views.login),
    url(r'^secrets/(?P<loc>\w+)$', views.secrets),
    url(r'^logout$', views.logout),
    url(r'^newsecret$', views.newsecret),
    url(r'^like/(?P<secid>\d+)/(?P<id2>\w+)$', views.like),
    url(r'^delete/(?P<id>\d+)$', views.delete),
    url(r'^popular$', views.popular),
]