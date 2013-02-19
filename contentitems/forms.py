from django import forms
from contentitems.models import Property, Object

class ObjectForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        """ Docstring """
        super(ObjectForm, self).__init__(*args, **kwargs)
        self.fields["properties"].help_text = ""

    class Meta:
        model = Object