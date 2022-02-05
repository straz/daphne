---
title: events
layout: page2
---

# Events

<ul class="events1 list-unstyled mt-5">
  {% for link in site.data.events %}
  <li class="mb-3">
    <i class="tag">{{ link.tag }}</i><br/>
    <a href="{{ link.url }}" target="event">{{ link.title }}</a>
  </li>
  {% endfor %}
</ul>
