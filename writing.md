---
title: writing
layout: page2
---

# Writing

<ul class="writing list-unstyled">
  {% for link in site.data.writing %}
  <li class="mb-3"><a href="{{ link.url }}" target="writing">{{ link.title }}</a>
      {% if link.subtitle %}
      &middot; <i class="tag">{{ link.subtitle }}</i>
      {% endif %}
	  {% if link.links %}
	    <ul class="link list-unstyled">
        {% for llink in link.links %}
        <li><a href="{{llink.url}}"><i>{{llink.title}}</i></a>
           {% if llink.date %}
           <span class="date">{{ llink.date | date: "%b %-d, %Y" }}</span>
		   {% endif %}
		</li>
        {% endfor %}
		</ul>
	  {% endif %}
  </li>
  {% endfor %}
</ul>
