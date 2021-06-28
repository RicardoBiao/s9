import { whitchPost } from '../../plugins/utils';
var which_port = whitchPost();
var controller = new ScrollMagic.Controller();
var color_height = $(window).height();
var _duration;
var _offset;
var _duration1;
var _offset1;

if(which_port=='phone'){
    _duration = 500;
    _offset = -170;
    _duration1 = 0;
    _offset1 = 270;
    var bigworldani = new TimelineMax()
            .fromTo(".s9_bigworld_textbox .subtitle_white2",1,{y:30,opacity:0},{y:0,opacity:1})
            .fromTo(".s9_bigworld_textbox .subtitle_white",1,{y:30,opacity:0},{y:0,opacity:1})
            .fromTo(".s9_bigworld_textbox .title_white",1,{y:60,opacity:0},{y:0,opacity:1},"-=2")
            .fromTo(".s9_bigworld_textbox .content_white",1,{y:90,opacity:0},{y:0,opacity:1},"-=2")
            .fromTo(".s9_bigworld_textbox .buylink_white",1,{y:140,opacity:0},{y:0,opacity:1},"-=2");
}else if(which_port=='pad'){
    _duration = 1800;
    _offset = -1400;
    _duration1 = 0;
    _offset1 = -150;
    var bigworldani = new TimelineMax()
            .fromTo(".s9_bigworld_textbox .subtitle_white2",1,{y:30,opacity:0},{y:0,opacity:1})
            .fromTo(".s9_bigworld_textbox .subtitle_white",1,{y:30,opacity:0},{y:0,opacity:1})
            .fromTo(".s9_bigworld_textbox .title_white",1,{y:100,opacity:0},{y:0,opacity:1},"-=1")
            .fromTo(".s9_bigworld_textbox .content_white",1,{y:170,opacity:0},{y:0,opacity:1},"-=1")
            .fromTo(".s9_bigworld_textbox .buylink_white",1,{y:240,opacity:0},{y:0,opacity:1},"-=1")

}else if(which_port=='superPc'){
    _duration = 900;
    _offset = -800;
    _duration1 = 0;
    _offset1 = 300;
    var bigworldani = new TimelineMax()
            .fromTo(".s9_bigworld_textbox .subtitle_white",1,{y:40,opacity:0},{y:0,opacity:1})
            .fromTo(".s9_bigworld_textbox .title_white",1,{y:140,opacity:0},{y:0,opacity:1},"-=1")
            .fromTo(".s9_bigworld_textbox .content_white",1,{y:240,opacity:0},{y:0,opacity:1},"-=1")
            .fromTo(".s9_bigworld_textbox .buylink_white",1,{y:340,opacity:0},{y:0,opacity:1},"-=1")
}
else{
    _duration = 900;
    _offset = -800;
    _duration1 = 0;
    _offset1 = 350;
    var bigworldani = new TimelineMax()
            .fromTo(".s9_bigworld_textbox .subtitle_white2",1,{y:30,opacity:0},{y:0,opacity:1})
            .fromTo(".s9_bigworld_textbox .subtitle_white",1,{y:30,opacity:0},{y:0,opacity:1})
            .fromTo(".s9_bigworld_textbox .title_white",1,{y:100,opacity:0},{y:0,opacity:1},"-=1")
            .fromTo(".s9_bigworld_textbox .content_white",1,{y:170,opacity:0},{y:0,opacity:1},"-=1")
            .fromTo(".s9_bigworld_textbox .buylink_white",1,{y:270,opacity:0},{y:0,opacity:1},"-=1");
}
//文字出现,闪灯,提示

var bigworldani1 = new TimelineMax()
            .fromTo(".s9_bigworld_tips1", 0.5, { opacity: 0 }, { opacity: 1 })
            .fromTo(".s9_bigworld_line1", 0.5, { opacity: 0 }, { opacity: 1 }, "-=0.5")
            .fromTo(".s9_bigworld_tips2", 0.5, { opacity: 0 }, { opacity: 1 }, "-=0.5")
            .fromTo(".s9_bigworld_line2", 0.5, { opacity: 0 }, { opacity: 1 }, "-=0.5")
            .fromTo(".s9_bigworld_tips3", 0.5, { opacity: 0 }, { opacity: 1 }, "-=0.5")
            .fromTo(".s9_bigworld_line3", 0.5, { opacity: 0 }, { opacity: 1 }, "-=0.5");

export const bigworld = new ScrollMagic.Scene({
    triggerElement: ".s9_bigworld",
    duration: _duration,
    offset: _offset,
    reverse: true,
})
// .addIndicators({
//     name: 'text'
//   })
.setTween(bigworldani)

export const bigworld1 = new ScrollMagic.Scene({
    triggerElement: ".s9_bigworld",
    duration: _duration1,
    offset: _offset1,
    reverse: true,
})
.setTween(bigworldani1)
.addTo(controller)
// .addIndicators({
//     name: '图'
// })