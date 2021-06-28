import { whitchPost } from '../../plugins/utils';
var which_port = whitchPost();
var controller = new ScrollMagic.Controller();
var fashionani;
var fashionani1;
var fashion_text;
var _trigger;
var _trigger1;
var _trigger2;
var _trigger0;
var _duration;
var _duration0;
var _duration1;
var _duration2;
var _offset;
var _offset0;
var _offset1;
var _offset2;
var _pin;

if (which_port == 'phone') {

    _pin = ".s9_fashion_md";
    //照片1,文字
    var fashion_text = new TimelineMax()
        .fromTo(".s9_fashion_textbox_md .subtitle", 1, { y: 30, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(".s9_fashion_textbox_md .title", 1, { y: 60, opacity: 0 }, { y: 0, opacity: 1 }, "-=1")
        .fromTo(".s9_fashion_textbox_md .content", 1, { y: 80, opacity: 0 }, { y: 0, opacity: 1 }, "-=1")
        .fromTo(".s9_fashion_imgbox2_md", 1.5, { transform: 'scale(0.8)', opacity: 0.5 }, { transform: 'scale(1)', opacity: 1 })
        .fromTo(".s9_fashion_imgbox1_md", 1.8, { transform: 'scale(0.8)', opacity: 0.5 }, { transform: 'scale(1)', opacity: 1 });
    _trigger0 = ".s9_fashion_md";
    _duration0 = 1300;
    _offset0 = -190;

    //照片
    var fashionani = new TimelineMax()
        .from(".s9_fashion_photo2_img", 1, { x: 0 }, "-=8")
    _trigger = ".s9_fashion";
    _duration = 0;
    _offset = 0;

    //照片合成效果,不卡屏
    var fashionani1 = new TimelineMax()
        .fromTo(".s9_fashion_photo1_2_img_md", 1, { opacity: 0 }, { opacity: 1 })
        .fromTo(".s9_fashion_photo1_3_img_md", 1, { opacity: 0 }, { opacity: 1 })
    _trigger1 = ".s9_fashion_md";
    _duration1 = 0;
    _offset1 = $(".s9_fashion_md").height() * 0.7;

    //照片合成效果,不卡屏
    var fashionani2 = new TimelineMax()
        .fromTo(".s9_fashion_photo2_img_md", 1, { transform: 'scale(1)', transformOrigin: "90% 46%" }, { transform: 'scale(3.5)' });
    _trigger2 = ".s9_fashion_md";
    _duration2 = 0;
    _offset2 = $(".s9_fashion_md").height()*0.3;

} else if (which_port == 'pad'){

    _pin = "";

    //文字
    var fashion_text = new TimelineMax()
        .fromTo(".s9_fashion_textbox .subtitle", 1, { y: 80, opacity: 0 }, { y: -100, opacity: 1 })
        .fromTo(".s9_fashion_textbox .title", 1, { y: 110, opacity: 0 }, { y: -100, opacity: 1 }, "-=1")
        .fromTo(".s9_fashion_textbox .content", 1, { y: 140, opacity: 0 }, { y: -100, opacity: 1 }, "-=1");
    _trigger0 = ".s9_fashion_textbox";
    _duration0 = 950;
    _offset0 = -420;

    //照片
    var fashionani = new TimelineMax()

        .from(".s9_fashion_imgbox2", 6, { y: 90 }, "-=8")
        .from(".s9_fashion_text2", 6, { y: 90 }, "-=8")
        .fromTo(".s9_fashion_imgbox1", 6, { y: 170 }, { y: 0 }, "-=8")
    _trigger = ".s9_fashion";
    _duration = 950;
    _offset = -150;

    //照片合成效果,不卡屏
    var fashionani1 = new TimelineMax()
        .fromTo(".s9_fashion_photo1_2_img", 1, { opacity: 0 }, { opacity: 1 })
        .fromTo(".s9_fashion_photo1_3_img", 0.5, { opacity: 0 }, { opacity: 1 })
    // .fromTo(".s9_fashion_text1",1,{y:40,opacity:0},{y:0,opacity:1},"-=1");
    _trigger1 = ".s9_fashion";
    _duration1 = 0;
    _offset1 = 400;

    //照片合成效果,不卡屏
    var fashionani2 = new TimelineMax()
        .fromTo(".s9_fashion_imgbox1", 1, { x: 0 }, { x: 0 })
    _trigger2 = ".s9_fashion";
    _duration2 = 0;
    _offset2 = 300;

    //照片合成效果,不卡屏
    var fashionani2 = new TimelineMax()
        .fromTo(".s9_fashion_photo2_img", 1, { transform: 'scale(1)',transformOrigin:"107% 55%" }, { transform: 'scale(2.5)' });
    _trigger2 = ".s9_fashion";
    _duration2 = 0;
    _offset2 = 170;

} else {

    _pin = "";

    //文字
    var fashion_text = new TimelineMax()
        .fromTo(".s9_fashion_textbox .subtitle", 1, { y: 30, opacity: 0 }, { y: -100, opacity: 1 })
        .fromTo(".s9_fashion_textbox .title", 1, { y: 80, opacity: 0 }, { y: -100, opacity: 1 }, "-=1")
        .fromTo(".s9_fashion_textbox .content", 1, { y: 130, opacity: 0 }, { y: -100, opacity: 1 }, "-=1")
        .fromTo(".s9_fashion_imgbox1", 1, { y: 130 }, { y: 0 }, "-=1")
    _trigger0 = ".s9_fashion_textbox";
    _duration0 = 800;
    _offset0 = -520;

    //照片
    var fashionani = new TimelineMax()

        .from(".s9_fashion_imgbox2", 6, { y: 0 }, "-=8")
        .from(".s9_fashion_text2", 6, { y: 0 }, "-=8")
        // .fromTo(".s9_fashion_imgbox1", 6, { y: 0 }, { y: 0 }, "-=8")
    _trigger = ".s9_fashion";
    _duration = 950;
    _offset = -150;

    //照片合成效果,不卡屏
    var fashionani1 = new TimelineMax()
        .fromTo(".s9_fashion_photo1_2_img", 1, { opacity: 0 }, { opacity: 1 })
        .fromTo(".s9_fashion_photo1_3_img", 0.5, { opacity: 0 }, { opacity: 1 })
    // .fromTo(".s9_fashion_text1",1,{y:40,opacity:0},{y:0,opacity:1},"-=1");
    _trigger1 = ".s9_fashion";
    _duration1 = 0;
    _offset1 = 400;

    //照片合成效果,不卡屏
    var fashionani2 = new TimelineMax()
        .fromTo(".s9_fashion_photo2_img", 1, { transform: 'scale(1)',transformOrigin:"90% 46%" }, { transform: 'scale(3.5)' });
    _trigger2 = ".s9_fashion";
    _duration2 = 0;
    _offset2 = 170;
}

export const fashion = new ScrollMagic.Scene({
    triggerElement: _trigger,
    duration: _duration,
    offset: _offset,
    reverse: true,
})
    .setTween(fashionani)
    .addTo(controller);

export const fashion0 = new ScrollMagic.Scene({
    triggerElement: _trigger0,
    duration: _duration0,
    offset: _offset0,
    reverse: true,
})
    .setTween(fashion_text)
    .addTo(controller);

export const fashion1 = new ScrollMagic.Scene({
    triggerElement: _trigger1,
    duration: _duration1,
    offset: _offset1,
    reverse: true,
})
    .setTween(fashionani1)
    .addTo(controller);

export const fashion2 = new ScrollMagic.Scene({
    triggerElement: _trigger2,
    duration: _duration2,
    offset: _offset2,
    reverse: true,
})
    // .addIndicators()
    .setTween(fashionani2)
    .addTo(controller);