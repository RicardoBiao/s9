import { whitchPost } from '../../plugins/utils';
var which_port = whitchPost();
var controller = new ScrollMagic.Controller();
var isocell_ani;
var isocel1l_ani;
var _trigger;
var _trigger1;
var _duration;
var _duration1;
var _offset;
var _offset1;
var _isocell_height = $(".s9_isocell").height();

if (which_port == 'phone') {

    //标题文字出现
    var isocell_ani = new TimelineMax()
        .fromTo(".s9_isocell_textbox_md .subtitle", 3, { y: 60, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(".s9_isocell_textbox_md .title", 3, { y: 60, opacity: 0 }, { y: 0, opacity: 1 }, "-=2.5")
        .fromTo(".s9_isocell_textbox_md .content", 3, { y: 60, opacity: 0 }, { y: 0, opacity: 1 }, "-=2.5");
    _trigger = ".s9_isocell_md";
    _duration = 700;
    _offset = -200;

    //照片放大,底部文字出现
    var isocel1l_ani = new TimelineMax()
        .fromTo(".s9_isocell_photo_img_md", 1, { opacity: 0.5, transform: 'scale(0.8)' }, { x: -100, opacity: 1, transform: 'scale(1)' });
    _trigger1 = ".s9_isocell_md";
    _duration1 = 500;
    _offset1 = 140;

} else if (which_port == "pad") {
    
    //标题文字出现
    var isocell_ani = new TimelineMax()
        .fromTo(".s9_isocell_textbox .subtitle", 25, { y: 60, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(".s9_isocell_textbox .title", 25, { y: 60, opacity: 0 }, { y: 0, opacity: 1 }, "-=20")
        .fromTo(".s9_isocell_photo_img", 25, { y: 30 }, { y: 0, opacity: 1 })

    _trigger = ".s9_isocell";
    _duration = 500;
    _offset = -240;

    //照片放大,底部文字出现
    var isocel1l_ani = new TimelineMax()
        .fromTo(".s9_isocell_textbox", 8, { y: 0}, { y: -120},)
        .fromTo(".s9_isocell_photo_img", 8, { transform: 'scale(1)' }, { transform: 'scale(1.1)' },"-=5")
        .fromTo(".s9_isocell_main .content", 4, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, '-=3')
    _trigger1 = ".s9_isocell";
    _duration1 = 1000;
    _offset1 = $(".s9_isocell").height()*0.53;
} else if (which_port =="superPc") {

    // //标题文字出现
    // var isocell_ani = new TimelineMax()
    //     .fromTo(".s9_isocell_textbox .subtitle", 25, { y: 100, opacity: 0 }, { y: 0, opacity: 1 })
    //     .fromTo(".s9_isocell_textbox .title", 25, { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, "-=20")
    //     .fromTo(".s9_isocell_imgbox", 25, { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, "-=15")

    // _trigger = ".s9_isocell";
    // _duration = 400;
    // _offset = -$(".s9_isocell").height()*0.4;

    // //照片放大,底部文字出现
    // var isocel1l_ani = new TimelineMax()
    //     .fromTo(".s9_isocell_textbox", 8, { y: 0 }, { y: -200 },)
    //     .fromTo(".s9_isocell_photo_img", 8, { transform: 'scale(1)' }, { transform: 'scale(1.1)', opacity: 1 }, "-=5")
    //     .fromTo(".s9_isocell_main .content", 4, { y: 200, opacity: 0 }, { y: 0, opacity: 1 }, '-=3')
    // _trigger1 = ".s9_isocell";
    // _duration1 = 1000;
    // _offset1 = $(".s9_isocell").height() * 0.45;
    //标题文字出现
    var isocell_ani = new TimelineMax()
        .fromTo(".s9_isocell_textbox .subtitle", 25, { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(".s9_isocell_textbox .title", 25, { y: 50, opacity: 0 }, { y: 0, opacity: 1 }, "-=20")

        //.to(".s9_isocell_photo_img",2,{y:-80},"-=2")
        .fromTo(".s9_isocell_photo_img", 25, { y: 70, }, { y: 0, },"-=20")
        .fromTo(".s9_isocell_photo_img", 18, { transform: 'scale(1)' }, { transform: 'scale(1)', opacity: 1 })
        .fromTo(".s9_isocell_textbox .subtitle", 18, { y: 0 }, { y: -45 }, "-=18")
        .fromTo(".s9_isocell_textbox .title", 18, { y: 0 }, { y: -45 }, "-=18")


    _trigger = ".s9_isocell";
    _duration = 1200;
    _offset = -600;

    //照片放大,底部文字出现
    var isocel1l_ani = new TimelineMax()
        .fromTo(".s9_isocell_photo_img", 8, { y: 0, transform: 'scale(1)' }, { y: 0, transform: 'scale(1.1)' })
        .fromTo(".s9_isocell_textbox .subtitle", 8, { y: -45 }, { y: -250 }, "-=8")
        .fromTo(".s9_isocell_textbox .title", 8, { y: -45 }, { y: -250 }, "-=8")
        .fromTo(".s9_isocell_main .content", 2, { y: 60, opacity: 0 }, { y: 0, opacity: 1 }, '-=3')
    _trigger1 = ".s9_isocell";
    _duration1 = 1000;
    // _offset1 = 650;
    _offset1=582.3;
} else {

    //标题文字出现
    var isocell_ani = new TimelineMax()
        .fromTo(".s9_isocell_textbox .subtitle", 25, { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(".s9_isocell_textbox .title", 25, { y: 50, opacity: 0 }, { y: 0, opacity: 1 }, "-=20")

        //.to(".s9_isocell_photo_img",2,{y:-80},"-=2")
        .fromTo(".s9_isocell_photo_img", 8, { y: 70, }, { y: 0, },"-=20")
        .fromTo(".s9_isocell_photo_img", 18, { transform: 'scale(1)' }, { transform: 'scale(1)', opacity: 1 })
        .fromTo(".s9_isocell_textbox .subtitle", 18, { y: 0 }, { y: -45 }, "-=18")
        .fromTo(".s9_isocell_textbox .title", 18, { y: 0 }, { y: -45 }, "-=18")


    _trigger = ".s9_isocell";
    _duration = 800;
    _offset = -240;

    //照片放大,底部文字出现
    var isocel1l_ani = new TimelineMax()
        .fromTo(".s9_isocell_photo_img", 8, { y: 0, transform: 'scale(1)' }, { y: 0, transform: 'scale(1.1)' })
        .fromTo(".s9_isocell_textbox .subtitle", 8, { y: -45 }, { y: -250 }, "-=8")
        .fromTo(".s9_isocell_textbox .title", 8, { y: -45 }, { y: -250 }, "-=8")
        .fromTo(".s9_isocell_main .content", 2, { y: 60, opacity: 0 }, { y: 0, opacity: 1 }, '-=3')
    _trigger1 = ".s9_isocell";
    _duration1 = 1000;
    // _offset1 = 650;
    _offset1=633;
}

export const isocell = new ScrollMagic.Scene({
    triggerElement: _trigger,
    duration: _duration,
    offset: _offset,
    reverse: true,
})
//     .addIndicators({
//     name: '1'
// })
    .setTween(isocell_ani);

export const isocell1 = new ScrollMagic.Scene({
    triggerElement: _trigger1,
    duration: _duration1,
    offset: _offset1,
    reverse: true,
})
// .addIndicators({
//     name: '2'
// })
    .setTween(isocel1l_ani)
    .setPin(".s9_isocell")
    .addTo(controller);