from django.shortcuts import render, get_object_or_404

from forms import ObjectForm
from models import Object

def example(request, template_name="contentitems/form_example.html"):
    obj = get_object_or_404(Object, id=1)

    if request.POST:
        form = ObjectForm(request.POST, instance=obj)

        if form.is_valid():
            form.save(obj)
    else:
        form = ObjectForm(instance=obj)

    return render(request, template_name, {
        'form': form
    })