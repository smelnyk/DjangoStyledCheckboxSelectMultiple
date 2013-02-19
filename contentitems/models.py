from django.db import models
from django.utils.translation import ugettext_lazy as _


__all__ = ['Property', ]


class Property(models.Model):
    """ Docstring """
    name = models.CharField(max_length=128, verbose_name=_('Name'))

    def __unicode__(self):
        return u'%s' % self.name

class Object(models.Model):
    """ Docstring """
    properties = models.ManyToManyField(Property, verbose_name=_('Properties'))

    def __unicode__(self):
        return u'Object ID=%s' % self.id
