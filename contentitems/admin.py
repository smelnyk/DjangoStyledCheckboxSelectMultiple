from django.contrib import admin
from django.utils.translation import ugettext as _

from contentitems.models import Property, Object


__all__ = ['PropertyAdmin', 'ObjectAdmin']


class PropertyAdmin(admin.ModelAdmin):
    """ Docstring """
    list_display = ('name',)
    search_fields = ('name',)

class ObjectAdmin(admin.ModelAdmin):
    """ Docstring """
    list_display = ('id',)


admin.site.register(Property, PropertyAdmin)
admin.site.register(Object, ObjectAdmin)

