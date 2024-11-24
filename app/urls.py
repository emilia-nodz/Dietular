
from app.views import ItemViewSet, AllergenViewSet
from rest_framework.routers import DefaultRouter
from app import views

router = DefaultRouter()

router.register(r'allergen', AllergenViewSet, basename='allergen')
router.register(r'item', ItemViewSet, basename='item')

urlpatterns = router.urls

