import { whitchPost } from '../../plugins/utils';
var which_port = whitchPost();
var controller = new ScrollMagic.Controller();
var yo_height = $(".s9_yo").height();
var _duration;
var _offset;
var _height;

if (which_port == 'pad') {
    _duration = 1000;
    _offset = 0;
    _height = yo_height/3;
}else if (which_port == 'superPc') {
    _duration = 1000;
    _offset = yo_height/4;
    _height =550;
}else{
    _duration = 1000;
    _offset =yo_height/2;
    _height = yo_height/2.2;
}

var yo_ani = new TimelineMax()
            .fromTo(".s9_yo_img",2,{y:100},{y:0,opacity:1,transform:'scale(1.1)'})
            .fromTo(".s9_yo_img",2,{y:0},{y:-150,opacity:0});

export const yo = new ScrollMagic.Scene({
    triggerElement: ".s9_yo",
    duration: _duration,
    offset: _offset,
    reverse: true,
})
.setPin(".s9_yo")
.setTween(yo_ani)
.on("progress", function (event) {
    if (event.progress>0) {
       $(".s9_yo").parent().css("height", _height).css("min-height", _height);
       //wa.removePin(true);
    }
})
.addTo(controller);