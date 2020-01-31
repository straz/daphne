$(document).ready(init_page);

PHONE_WIDTH = 645;

ICONS = {
  'icon-about': {draw: draw_aboutme, child: '.about-me'},
  'icon-writing': {draw: draw_writing, child: '.menu.writing'},
  'icon-contact': {draw: draw_contact, child: '.menu.contact'},
  'icon-follow': {draw: draw_follow, child: '.menu.follow'}
};

function init_page(){
  inline_svg();
  $('.icon').click(handle_click);
  $(window).resize(resize_all);
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


function resize_all(){
  // resize_aboutme();
  svg_loaded(3, 3);
}

function resize_aboutme(){
  var pos = $('.icon-about').offset();
  var top = pos.top + $('.icon-about').height();
  var width = $(document).width() - pos.left - 200;
  $('.about-me').css('left', pos.left - 100).css('top', top).css('width', width);
}

// This is called each time an svg image is loaded asynchronously.
// When i==max, it means all images have been loaded and some cleanup can be performed.
function svg_loaded(i, max){
  var width = $(document).width();
  if (i == max){
    if (width < PHONE_WIDTH){
      $('svg.person g').attr('transform', 'scale(0.75) translate(15, 15)');
    } else {
      $('svg.person g').attr('transform', 'scale(0.75) translate(15, 15)');
    }
  }
}
// This turns the href="file.svg" references into inline svg elements,
// which allows jquery selectors to work on them.

function inline_svg(){
  var target = $('img.svg').length;
  var i = 0;
  var count = function () {
    i += 1;
    return i;
  };
  $('img.svg').each(function(){
		      var $img = jQuery(this);
		      var imgID = $img.attr('id');
		      var imgClass = $img.attr('class');
		      var imgURL = $img.attr('src');

		      $.get(imgURL, function(data) {
			      // Get the SVG tag, ignore the rest
			      var $svg = jQuery(data).find('svg');
			      // Add replaced image's ID to the new SVG
			      if(typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			      }
			      // Add replaced image's classes to the new SVG
			      if(typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass+' replaced-svg');
			      }
			      // Remove any invalid XML tags as per http://validator.w3.org
			      $svg = $svg.removeAttr('xmlns:a');
			      // Replace image with new SVG
			      $img.replaceWith($svg);
			    }, 'xml').done(function () {svg_loaded(count(), target);});
		    });
}
