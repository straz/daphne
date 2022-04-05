---
title: news
layout: page2
---

# News

<ul class="news list-unstyled">
  {% for link in site.data.news %}
  <li>
    <a class="title" href="{{ link.url }}">{{ link.title }}</a>
    <div class="tag">
      {{ link.tag }}
      {% if link.link_tag == 'youtube' %}
      <i class="fa fa-youtube-play text-secondary"></i>
      {% endif %}
	  
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
