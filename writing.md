---
title: writing
layout: page2
---

# Writing

<ul class="writing1 list-unstyled">
  {% for link in site.data.writing %}
  <li class="mb-3"><a href="{{ link.url }}" target="writing">{{ link.title }}</a>
      {% if link.subtitle %}
      &middot; <i class="tag">{{ link.subtitle }}</i>
      {% endif %}
  </li>
  {% endfor %}
</ul>
