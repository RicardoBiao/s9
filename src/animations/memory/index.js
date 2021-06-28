import { whitchPost } from '../../plugins/utils';
var which_port = whitchPost();
var controller = new ScrollMagic.Controller();
var memory_ani;
var memory1_ani;
var _trigger;
var _trigger1;
var _duration;
var _duration1;
var _offset;
var _offset1;
var _pin;

if(which_port=='phone'){

    _pin = "";

    //标题文字出现
    var memory_ani = new TimelineMax()
    .fromTo(".s9_memory_textbox_md .subtitle_white",1,{y:30,opacity:0},{y:0,opacity:1})
    .fromTo(".s9_memory_textbox_md .title_white",1,{y:90,opacity:0},{y:0,opacity:1},"-=1")
    .fromTo(".s9_memory_textbox_md .content_white",1,{y:120,opacity:0},{y:0,opacity:1},"-=1")
    .fromTo(".s9_memory_textbox_md .buylink_white",1,{y:150,opacity:0},{y:0,opacity:1},"-=1")
    .fromTo(".s9_memory_photo_img1_md",3,{opacity:0},{opacity:1});
    _trigger = ".s9_memory_md";
    _duration = 800;
    _offset = -195;

    //自动亮灯
    var memory1_ani = new TimelineMax()
    .fromTo(".s9_memory_photo_img2_md",1,{opacity:0},{opacity:1});
    _trigger1 = ".s9_memory_md";
    _duration1 = 0;
    _offset1 = 260;

}else if(which_port=='pad'){
    _pin = "";

    //标题文字出现
    var memory_ani = new TimelineMax()
    .fromTo(".s9_memory_textbox .subtitle_white",4,{y:30,opacity:0},{y:0,opacity:1})
    .fromTo(".s9_memory_textbox .title_white",4,{y:60,opacity:0},{y:0,opacity:1},"-=3.5")
    .fromTo(".s9_memory_textbox .content_white",4,{y:90,opacity:0},{y:0,opacity:1},"-=3")
    .fromTo(".s9_memory_textbox .buylink_white",4,{y:120,opacity:0},{y:0,opacity:1},"-=3")
    .fromTo(".s9_memory_photo_img1",3,{opacity:1},{opacity:1});
    _trigger = ".s9_memory";
    _duration = 500;
    _offset = -400;

    //卡屏,亮灯
    var memory1_ani = new TimelineMax()
    .fromTo(".s9_memory_photo_img2",1,{opacity:0},{opacity:1});
    _trigger1 = ".s9_memory";
    _duration1 = 300;
    _offset1 = 200;
}else{

    _pin = "";

    //标题文字出现
    var memory_ani = new TimelineMax()
    .fromTo(".s9_memory_textbox .subtitle_white",4,{y:50,opacity:0},{y:0,opacity:1})
    .fromTo(".s9_memory_textbox .title_white",4,{y:100,opacity:0},{y:0,opacity:1},"-=4")
    .fromTo(".s9_memory_textbox .content_white",4,{y:150,opacity:0},{y:0,opacity:1},"-=4")
    .fromTo(".s9_memory_textbox .buylink_white",4,{y:200,opacity:0},{y:0,opacity:1},"-=3")
    .fromTo(".s9_memory_photo_img1",4,{opacity:1},{opacity:1},"-4");
    _trigger = ".s9_memory";
    _duration = 1600;
    _offset = -1200;

    //卡屏,亮灯
    var memory1_ani = new TimelineMax()
    .fromTo(".s9_memory_photo_img2",1,{opacity:0},{opacity:1});
    _trigger1 = ".s9_memory";
    _duration1 = 300;
    _offset1 = 300;

}

export const memory = new ScrollMagic.Scene({
    triggerElement: _trigger,
    duration: _duration,
    offset: _offset,
    reverse: true,
})
// .addIndicators({
//     name:'memory_text'
// })
.setTween(memory_ani);
 
export const memory1 = new ScrollMagic.Scene({
    triggerElement: _trigger1,
    duration: _duration1,
    offset: _offset1,
    reverse: true,
})
// .addIndicators({
//     name:'memory_pin'
// })
.setTween(memory1_ani)
.setPin(_pin)
.addTo(controller);