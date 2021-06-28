import { whitchPost } from '../../plugins/utils';
var which_port = whitchPost();
var controller = new ScrollMagic.Controller();
var softlightani;
var softlightani2;
var softlightani3;
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

    _pin = ".s9_softlight_md";

    //照片1,文字
    var softlightani = new TimelineMax()    
    .fromTo(".s9_softlight_textbox_md .subtitle",3,{y:30,opacity:0},{y:0,opacity:1})
    .fromTo(".s9_softlight_textbox_md .title",3,{y:60,opacity:0},{y:0,opacity:1},"-=2.5")
    .fromTo(".s9_softlight_textbox_md .content",3,{y:80,opacity:0},{y:0,opacity:1},"-=2.5")
    .fromTo(".s9_softlight_textbox_md .buylink",3,{y:100,opacity:0},{y:0,opacity:1},"-=2.5")
    .fromTo(".s9_softlight_imgbox_md",3,{opacity:0.5,transform:'scale(0.8)'},{opacity:1,transform:'scale(1)'});
    _trigger = ".s9_softlight_md";
    _duration = 700;
    _offset = -200;

    //卡屏,渐变照片2
    var softlightani2 = new TimelineMax()
    .fromTo(".s9_softlight_photo2_img_md",1,{opacity:0},{opacity:1});
    _trigger1 = ".s9_softlight_md";
    _duration1 = 500;
    _offset1 = 550;

}else if(which_port=='pad'){
    _pin = ".s9_softlight";

    //照片1,文字
    var softlightani = new TimelineMax()    
    .fromTo(".s9_softlight_textbox .subtitle",3,{y:30,opacity:0},{y:0,opacity:1})
    .fromTo(".s9_softlight_textbox .title",3,{y:60,opacity:0},{y:0,opacity:1},"-=3")
    .fromTo(".s9_softlight_textbox .content",3,{y:90,opacity:0},{y:0,opacity:1},"-=3")
    .fromTo(".s9_softlight_textbox .buylink",3,{y:120,opacity:0},{y:0,opacity:1},"-=3");

    _trigger = ".s9_softlight";
    _duration = 1000;
    _offset = -400;

    //卡屏
    var softlightani2 = new TimelineMax()
    .fromTo(".s9_softlight_imgbox",3,{y:0},{y:0})
    _trigger1 = ".s9_softlight";
    _duration1 = 1100;
    _offset1 = 300;

    // 渐变照片
    var softlightani3 = new TimelineMax()
    .fromTo(".s9_softlight_photo2_img", 1, { opacity: 0 }, { opacity: 1 });
    _trigger2 = ".s9_softlight";
    _duration2 = 0;
    _offset2 = 750;
}else{

    _pin = ".s9_softlight";

    //照片1,文字
    var softlightani = new TimelineMax()    
    .fromTo(".s9_softlight_textbox .subtitle",3,{y:30,opacity:0},{y:0,opacity:1})
    .fromTo(".s9_softlight_textbox .title",3,{y:60,opacity:0},{y:0,opacity:1},"-=3")
    .fromTo(".s9_softlight_textbox .content",3,{y:90,opacity:0},{y:0,opacity:1},"-=3")
    .fromTo(".s9_softlight_textbox .buylink",3,{y:120,opacity:0},{y:0,opacity:1},"-=3");

    _trigger = ".s9_softlight";
    _duration = 1000;
    _offset = -400;

    //卡屏
    var softlightani2 = new TimelineMax()
    .fromTo(".s9_softlight_imgbox",3,{y:0},{y:0})
    _trigger1 = ".s9_softlight";
    _duration1 = 1100;
    _offset1 = 400;

    // 渐变照片
    var softlightani3 = new TimelineMax()
    .fromTo(".s9_softlight_photo2_img", 1, { opacity: 0 }, { opacity: 1 });
    _trigger2 = ".s9_softlight";
    _duration2 = 0;
    _offset2 = 750;
}

export const softlight = new ScrollMagic.Scene({
    triggerElement: _trigger,
    duration: _duration,
    offset: _offset,
    reverse: true,
})
// .addIndicators({
//     name:'soft1'
// })
.setTween(softlightani)
.addTo(controller);

export const softlight1 = new ScrollMagic.Scene({
    triggerElement: _trigger1,
    duration: _duration1,
    offset: _offset1,
    reverse: true,
})
// .addIndicators({
//     name:'soft-pin'
// })
.setPin(_pin)
// .setTween(softlightani2)
.addTo(controller);

export const softlight2 = new ScrollMagic.Scene({
    triggerElement: _trigger1,
    duration: 0,
    offset: _offset1,
    reverse: true,
})
// .addIndicators({
//     name:'soft-play'
// })
// .setPin(_pin)
.setTween(softlightani2)
.addTo(controller);

export const softlight3 = new ScrollMagic.Scene({
    triggerElement: _trigger2,
    duration: _duration2,
    offset: _offset2,
    reverse: true,
})
.setTween(softlightani3)
.addTo(controller);
