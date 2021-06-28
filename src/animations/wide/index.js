import { whitchPost } from '../../plugins/utils';
var which_port = whitchPost();
var controller = new ScrollMagic.Controller();
var wideani;
var wideani1;
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
var _wide_height = $(".s9_wide").height();

if (which_port == 'phone') {

    _pin = "";
    //标题文字出现
    var wideani = new TimelineMax()
        .fromTo(".s9_wide_textbox_md .subtitle", 1, { y: 30, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(".s9_wide_textbox_md .title", 1, { y: 60, opacity: 0 }, { y: 0, opacity: 1 }, "-=1")
        .fromTo(".s9_wide_main_md .content", 1, { y: 90, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.5")
    _trigger = ".s9_wide_md";
    _duration = 300;
    _offset = -200;

    //卡屏,照片变广角
    var wide1lani = new TimelineMax()
        .fromTo(".s9_wide_imgbox_md", 3, { transform: 'scale(0.8)', y: 120, opacity: 0.5 }, { transform: 'scale(1)', y: 0, opacity: 1 });
        //.fromTo("s9_wide_main_md .content", 3, { x: 0 }, { x: 0 },);
    _trigger1 = ".s9_wide_md";
    _duration1 = 400;
    _offset1 = 140;

    //自动播放
    var wideauto = new TimelineMax()
        .fromTo(".s9_wide_photo_img2_md", 0.7, { transform: "scale(1.4)", opacity: 1, transformOrigin: "70% 20%" }, { transform: "scale(1)" })
    _trigger2 = ".s9_wide_md";
    _duration2 = 0;
    _offset2 = 400;

} else if (which_port == 'pad') {

    _pin = ".s9_wide";

    //文字出现
    var wideani = new TimelineMax()
        .fromTo(".s9_wide_textbox .subtitle", 6, { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(".s9_wide_textbox .title", 6, { y: 50, opacity: 0 }, { y: 0, opacity: 1 }, "-=5")
        .fromTo(".s9_wide_imgbox", 6, {  transform: 'scale(0.9)', opacity: 0.5 }, {transform: 'scale(1)', opacity:1 },)
    _trigger = ".s9_wide";
    _duration = 600;
    _offset = -$(".s9_wide").height() * 0.5;

    //照片变广角,底部文字出现
    var wide1lani = new TimelineMax()
        .fromTo(".s9_wide_textbox", 1, { y: 0, }, { y: -80 })
        .fromTo(".s9_wide_main .content", 1, { y: 30, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(".s9_wide_main .content", 1, { y: 0, }, { y: 0 })
    _trigger1 = ".s9_wide";
    _duration1 = 600;
    _offset1 = $(".s9_wide").height() * 0.5;

    //自动播放
    var wideauto = new TimelineMax()
        .fromTo(".s9_wide_photo_img2", 1, { transform: "scale(1.4)", opacity: 1, transformOrigin: "70% 20%" }, { transform: "scale(1)" });
    _trigger2 = ".s9_wide";
    _duration2 = 0;
    _offset2 = $(".s9_wide").height() * 0.6;
} else if (which_port == 'superPc') {

    _pin = ".s9_wide";

    //文字出现
    var wideani = new TimelineMax()
        .fromTo(".s9_wide_textbox .subtitle", 6, { y: 80, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(".s9_wide_textbox .title", 6, { y: 80, opacity: 0 }, { y: 0, opacity: 1 }, "-=5")
        .fromTo(".s9_wide_imgbox", 10, {transform: 'scale(0.9)', opacity: 0.5 }, { transform: 'scale(1)', opacity: 1 },)
    _trigger = ".s9_wide";
    _duration = 1200;
    _offset = -$(".s9_wide").height() * 0.4;

    //照片变广角,底部文字出现
    var wide1lani = new TimelineMax()
        .fromTo(".s9_wide_textbox", 3, { y: 0, }, { y: -250 })
        .fromTo(".s9_wide_main .content", 3, { y: 240, opacity: 0 }, { y: 0, opacity: 1 })
    _trigger1 = ".s9_wide";
    _duration1 = 1200;
    _offset1 = $(".s9_wide").height() * 0.40;

    //自动播放
    var wideauto = new TimelineMax()
        .fromTo(".s9_wide_photo_img2", 1, { transform: "scale(1.4)", opacity: 1, transformOrigin: "70% 20%" }, { transform: "scale(1)" });
    _trigger2 = ".s9_wide";
    _duration2 = 0;
    _offset2 = $(".s9_wide").height() * 0.6;
} else {

    _pin = ".s9_wide";

    //文字出现
    var wideani = new TimelineMax()
        .fromTo(".s9_wide_textbox .subtitle", 3, { y: 30, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(".s9_wide_textbox .title", 3, { y: 60, opacity: 0 }, { y: 0, opacity: 1 }, "-=3")
        .fromTo(".s9_wide_imgbox", 15, { transform: 'scale(0.9)', opacity: 0.5 }, { transform: 'scale(1)', opacity: 1 }, "-=3")
        .to(".s9_wide_textbox", 10, { y: -250 })
        .to(".s9_wide_textbox", 10, { y: -250 });
    _trigger = ".s9_wide";
    _duration = 1700;
    _offset = -400;

    //照片变广角,底部文字出现
    var wide1lani = new TimelineMax()
        .fromTo(".s9_wide_main .content", 1, { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, "-=2.5");
    _trigger1 = ".s9_wide";
    _duration1 = 800;
    _offset1 = $(".s9_wide").height() * 0.37;

    //自动播放
    var wideauto = new TimelineMax()
        .fromTo(".s9_wide_photo_img2", 1, { transform: "scale(1.4)", opacity: 1, transformOrigin: "70% 20%" }, { transform: "scale(1)" });
    _trigger2 = ".s9_wide";
    _duration2 = 0;
    _offset2 = 900;
}

export const wide = new ScrollMagic.Scene({
    triggerElement: _trigger,
    duration: _duration,
    offset: _offset,
    reverse: true,
})
// .addIndicators({
//     name: '1'
// })
    .setTween(wideani);

export const wide1 = new ScrollMagic.Scene({
    triggerElement: _trigger1,
    duration: _duration1,
    offset: _offset1,
    reverse: true,
})
// .addIndicators({
//     name: '2'
// })
    .setTween(wide1lani)
    .setPin(_pin)
    .addTo(controller);

export const wide2 = new ScrollMagic.Scene({
    triggerElement: _trigger2,
    duration: _duration2,
    offset: _offset2,
    reverse: true,
})
// .addIndicators({
//     name: '3'
// })
    .setTween(wideauto)
    .addTo(controller);
