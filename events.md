---
title: events
layout: page2
---

# Events

<ul class="events list-unstyled">
  {% for link in site.data.events %}
  <li>
    <a class="title" href="{{ link.url }}">{{ link.title }}</a>
    <div class="tag">
      {{ link.tag }}
      {% if link.date %}
       <span class="date">
        {% if link.date_tag %}{{ link.date_tag }}{% endif %}
        {{ link.date | date: "%b %-d, %Y" }}
       </span>
      {% endif %}
    </div>
  </li>
  {% endfor %}
</ul>
