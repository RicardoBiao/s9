import { whitchPost } from '../../plugins/utils';
var which_port = whitchPost();
var controller = new ScrollMagic.Controller();
var sixnm_ani;
var sixnm1_ani;
var _trigger;
var _trigger1;
var _trigger2;
var _duration;
var _duration1;
var _duration2;
var _offset;
var _offset1;
var _offset2;
var _pin;

if(which_port=='phone'){

    _pin = "";

    //标题,芯片
    var sixnm_ani = new TimelineMax()
    .fromTo(".s9_sixnm_textbox_md .subtitle_white",1,{y:30,opacity:0},{y:0,opacity:1})
    .fromTo(".s9_sixnm_textbox_md .title_white",1,{y:80,opacity:0},{y:0,opacity:1},"-=1")
    .fromTo(".s9_sixnm_main_md .content_white",1,{y:140,opacity:0},{y:0,opacity:1},"-=0.7")
    .fromTo(".s9_sixnm_photo_img1_md",9,{y:220},{y:0},"-=9");
    _trigger = ".s9_sixnm_md";
    _duration = 500;
    _offset = -700;

    //亮灯
    var sixnm1_ani = new TimelineMax()
    .fromTo(".s9_sixnm_photo_img2_md",0.5,{opacity:0},{opacity:1});
    _trigger1 = ".s9_sixnm_md";
    _duration1 = 0;
    _offset1 = 250;

    //60w+性能
    var sixnm2_ani = new TimelineMax()
    .fromTo(".s9_sixnm_icon1",1,{y:30,opacity:0},{y:0,opacity:1})
    .fromTo(".s9_sixnm_icon2",1,{y:30,opacity:0},{y:0,opacity:1},"-=1")
    _trigger2 = ".s9_sixnm_md";
    _duration2 = 100;
    _offset2 = 200;

}else if(which_port=='pad'){
    _pin = "";

    //标题,芯片
    var sixnm_ani = new TimelineMax()
    .fromTo(".s9_sixnm_textbox .subtitle_white",3,{y:20,opacity:0},{y:0,opacity:1})
    .fromTo(".s9_sixnm_textbox .title_white",3,{y:70,opacity:0},{y:0,opacity:1},"-=3");
    _trigger = ".s9_sixnm";
    _duration = 1600;
    _offset = -500;

    //亮灯
    var sixnm1_ani = new TimelineMax()
    .fromTo(".s9_sixnm_photo_img2",1.5,{opacity:0},{opacity:1})
    // .fromTo(".s9_sixnm_main .content_white",0.5,{y:30,opacity:0},{y:0,opacity:1},"-=1.5");
    _trigger1 = ".s9_sixnm";
    _duration1 = 100;
    _offset1 = 280;

    //60w+性能
    var sixnm2_ani = new TimelineMax()
    .fromTo(".s9_sixnm_icon1",1,{y:30,opacity:0},{y:0,opacity:1})
    .fromTo(".s9_sixnm_icon2",1,{y:30,opacity:0},{y:0,opacity:1},"-=1")
    .fromTo(".s9_sixnm_main .content_white",1,{y:60,opacity:0},{y:0,opacity:1},"-=0.7");
    _trigger2 = ".s9_sixnm";
    _duration2 = 200;
    _offset2 = 240;
}
else{

    _pin = "";

    //标题,芯片
    var sixnm_ani = new TimelineMax()
    .fromTo(".s9_sixnm_textbox .subtitle_white",3,{y:20,opacity:0},{y:0,opacity:1})
    .fromTo(".s9_sixnm_textbox .title_white",3,{y:70,opacity:0},{y:0,opacity:1},"-=3");
    _trigger = ".s9_sixnm";
    _duration = 1600;
    _offset = -500;

    //亮灯
    var sixnm1_ani = new TimelineMax()
    .fromTo(".s9_sixnm_photo_img2",1.5,{opacity:0},{opacity:1})
    _trigger1 = ".s9_sixnm";
    _duration1 = 100;
    _offset1 = 380;

    //60w+性能
    var sixnm2_ani = new TimelineMax()
    .fromTo(".s9_sixnm_icon1",1,{y:30,opacity:0},{y:0,opacity:1})
    .fromTo(".s9_sixnm_icon2",1,{y:30,opacity:0},{y:0,opacity:1},"-=1")
    .fromTo(".s9_sixnm_main .content_white",1,{y:70,opacity:0},{y:0,opacity:1},"-=0.85");
    _trigger2 = ".s9_sixnm";
    _duration2 = 200;
    _offset2 = 320;


}

export const sixnm = new ScrollMagic.Scene({
    triggerElement: _trigger,
    duration: _duration,
    offset: _offset,
    reverse: true,
})
.setTween(sixnm_ani)
.addTo(controller);



export const sixnm1 = new ScrollMagic.Scene({
    triggerElement: _trigger1,
    duration: _duration1,
    offset: _offset1,
    reverse: true,
})
// .addIndicators({
//     name:'sixnm_pin'
// })
.setTween(sixnm1_ani)
.setPin(_pin)
.addTo(controller);

export const sixnm2 = new ScrollMagic.Scene({
    triggerElement: _trigger2,
    duration: _duration2,
    offset: _offset2,
    reverse: true,
})
.setTween(sixnm2_ani)
.addTo(controller)
// .addIndicators({
//     name:'sixnm_icon'
// })