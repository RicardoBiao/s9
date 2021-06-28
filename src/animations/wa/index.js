import { whitchPost } from '../../plugins/utils';
var which_port = whitchPost();
var controller = new ScrollMagic.Controller();
var wa_height = $(".s9_wa").height();
var _duration;
var _offset;
var _height;

if (which_port == 'pad') {
    _duration = 1000;
    _offset = 0;
    _height = wa_height/3.5;
}else if (which_port == 'superPc') {
    _duration = 1000;
    _offset = wa_height/4;
    _height =550;
}else{
    _duration = 1000;
    _offset =wa_height/2;
    _height = wa_height/2.2;
}

var wa_ani = new TimelineMax()
            .fromTo(".s9_wa_img",2,{y:100},{y:0,opacity:1,transform:'scale(1.1)'})
            .fromTo(".s9_wa_img",2,{y:0},{y:-150,opacity:0});

export const wa = new ScrollMagic.Scene({
    triggerElement: ".s9_wa",
    duration: _duration,
    offset: _offset,
    reverse: true,
})
.setPin(".s9_wa")
.setTween(wa_ani)
.on("progress", function (event) {
    if (event.progress>0) {
       $(".s9_wa").parent().css("height", _height).css("min-height", _height);
      // wa.removePin(true);
    }
})
.addTo(controller);