import "bootstrap";
import $ from 'jquery';
import anime from 'animejs'

function move(elem,elem2) {
    $(elem).fadeToggle(1000);
    let width = 1;
    let limit = $(elem2).html().split(" ")[1]
    let start_var = $(elem2).html().split(" ")[0];
    let id = setInterval(frame, 10 + Math.floor((Math.random() * 10) + 1));
    function frame() {
        if (width >= limit) {
            clearInterval(id);
        } else {
            width++;
            $(elem2).html(start_var + " " + width + '%');
            $(elem).css({width:(width+'%') });
        }
    }
}

function RecursiveBarUpdater(){
  let elements = $(".custom-progress");
  let elements2 = $(".progress-text");
  for(let i = 0; i< elements.length ;i++){
    $(elements[i]).toggle();
    move(elements[i],elements2[i]);
  }

}

$(function(){
  RecursiveBarUpdater();
})



var Messenger = function(el){
  'use strict';
  var m = this;

  m.init = function(){
    m.codeletters = "&#*+%?£@§$ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    m.current_length = 0;
    m.fadeBuffer = false;
    m.message = $(el).html();
    setTimeout(m.animateIn, 1);
  };

  m.generateRandomString = function(length){
    var random_text = '';
    while(random_text.length < length){
      random_text += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
    }

    return random_text;
  };

  m.animateIn = function(){
    if(m.current_length < m.message.length){
      m.current_length = m.current_length + 2;
      if(m.current_length >m.message.length) {
        m.current_length = m.message.length;
      }

      var message = m.generateRandomString(m.current_length);
      $(el).html(message);

      m.animateIn();
    } else {
      setTimeout(m.animateFadeBuffer, 60);
    }
  };

  m.animateFadeBuffer = function(){
    if(m.fadeBuffer === false){
      m.fadeBuffer = [];
      for(var i = 0; i < m.message.length; i++){
        m.fadeBuffer.push({c: (Math.floor(Math.random()*20))+1, l: m.message.charAt(i)});
      }
    }

    var do_cycles = false;
    var message = '';

    for(var i = 0; i < m.fadeBuffer.length; i++){
      var fader = m.fadeBuffer[i];
      if(fader.c > 0){
        do_cycles = true;
        fader.c--;
        message += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
      } else {
        message += fader.l;
      }
    }

    $(el).html(message);

    if(do_cycles === true){
      setTimeout(m.animateFadeBuffer, 90);
    }
  };

  m.init();
}

let msgs = $('p');
msgs.push($('h1'));
msgs.push($('h3'));
msgs.push($('h2'));

for(let i = 0; i < msgs.length; i++){
  let messenger = new Messenger(msgs[i]);
}

$(".selection-bar").toggle();

$(".nav-bar").on("click", function(){
    $(".selection-bar").fadeToggle(500);
    $(".nav-bar").slideUp(200);
});

$(".close-nav-bar").on("click", function(){
    $(".selection-bar").fadeToggle(500);
    $(".nav-bar").slideDown(200);
});


