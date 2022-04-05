// $(document).ready(init_page);

ICONS = {
  'icon-about': {draw: draw_aboutme, child: '.about-me'},
  'icon-writing': {draw: draw_writing, child: 'ul.writing'},
  'icon-follow': {draw: draw_follow, child: 'ul.news'}
};


function handle_click(e){
  var classes = $(this).attr('class').split(' ');
  for (var cls in classes){
    var properties = ICONS[classes[cls]];
    if (typeof properties != 'undefined'){
      handle_click_icon(classes[cls], properties);
    }
  }
  return false;
}

function handle_click_icon(cls, properties){
  var child = $(properties.child);
  if (child.css('display') != 'none'){
    unclick();
  } else {
    unclick();
    properties.draw.call();
  }
}

function unclick(){
  $('.about-me').hide();
  $('ul.writing').hide();
  $('ul.news').hide();
}

function draw_aboutme(){
  $('.about-me').toggle();
  return false;
}

function draw_writing(){
  $('ul.writing').toggle();
  return false;
}

function draw_follow(){
  $('ul.news').toggle();
  return false;
}

function draw_contact(){
  var width = $(document).width();
  var pos = $('.icon-contact').offset();
  if (width < PHONE_WIDTH){
    $('.menu.contact').css('left','auto').css('right', 10).toggle();
  } else {
    $('.menu.contact').css('left', pos.left).css('right', 'auto').toggle();
  }
  return false;
}

