$(document).ready(init_page);

PHONE_WIDTH = 645;

ICONS = {
  'icon-about': {draw: draw_aboutme, child: '.about-me'},
  'icon-writing': {draw: draw_writing, child: '.menu.writing'},
  'icon-contact': {draw: draw_contact, child: '.menu.contact'},
  'icon-follow': {draw: draw_follow, child: '.menu.follow'}
};

function init_page(){
    //inline_svg();
    // click on the iconbar
    $('.iconbar > li').click(handle_click);
  //$(window).resize(resize_all);
  $(document).click(unclick);
}

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

// cls = key for ICONS
// properties = value for ICONS,
// for example:
// cls = 'icon-writing', properties = {draw: draw_writing, child: '.menu.writing'}
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
  $('.menu.writing').hide();
  $('.menu.contact').hide();
  $('.menu.follow').hide();
}

function draw_aboutme(){
  resize_aboutme();
  $('.about-me').toggle();
  return false;
}

function draw_writing(){
  var pos = $('.icon-writing').offset();
  $('.menu.writing').css('left', pos.left).toggle();
  return false;
}

function draw_follow(){
  var pos = $('.icon-follow').offset();
  $('.menu.follow').css('left', pos.left).toggle();
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


