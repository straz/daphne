---
title: contact
layout: page2
---
# Contact

<ul class="contacts1 list-unstyled">
  {% for link in site.data.contact %}
  <li class="list-item mt-3"><a href="{{ link.url}}"><i class="{{ link.class }}"></i><span>{{ link.name }}</span></a></li>
  {% endfor %}
</ul>
