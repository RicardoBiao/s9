import { whitchPost } from '../../plugins/utils';
var which_port = whitchPost();
var controller = new ScrollMagic.Controller();
var night_ani;
var night1_ani;
var _trigger;
var _trigger1;
var _duration;
var _duration1;
var _offset;
var _offset1;
var _pin;
//var _video;

if (which_port == 'phone') {

    _pin = ".s9_night_md";
    //_video = ".s9_vlog_video_md";

    //标题文字出现
    var night_ani = new TimelineMax()
        .fromTo(".s9_night_textbox_md .subtitle_white", 1, { y: 30, opacity: 0 }, { y: -20, opacity: 1 })
        .fromTo(".s9_night_textbox_md .title_white", 1, { y: 60, opacity: 0 }, { y: -20, opacity: 1 }, "-=1")
        .fromTo(".s9_night_main_md .content_white", 1, { y: 90, opacity: 0 }, { y: -20, opacity: 1 }, "-=0.7")
        .fromTo(".s9_night_photo1_img_md", 3, { transform: 'scale(0.8)', y: 150 }, { transform: 'scale(1)' });
    _trigger = ".s9_night_md";
    _duration = 900;
    _offset = -200;

    //卡屏照片变亮
    var night1_ani = new TimelineMax()
        .fromTo(".s9_night_photo2_img_md", 25, { opacity: 0 }, { opacity: 1 })
        .fromTo(".s9_night_textbox_md", 10, { y: 0 }, { y: -160 }, "-=34");
    _trigger1 = ".s9_night_md";
    _duration1 = 1000;
    _offset1 = 548;

} else if (which_port == "pad") {

    _pin = ".s9_night";
    //_video = ".s9_vlog_video";

    //标题文字出现
    var night_ani = new TimelineMax()
        .fromTo(".s9_night_textbox .subtitle_white", 4, { y: 60, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(".s9_night_textbox .title_white", 4, { y: 60, opacity: 0 }, { y: 0, opacity: 1 }, "-=3")
    _trigger = ".s9_night";
    _duration = 400;
    _offset = -$(".s9_night").height() *0.5;

    //卡屏,照片变亮,底部文字出现
    var night1_ani = new TimelineMax()
        .fromTo(".s9_night_imgbox", 3, { transform: 'scale(0.9)' }, { transform: 'scale(1)' })
        .fromTo(".s9_night_textbox ", 3, { y: 0 }, { y: -180 }, "-=3")
        .fromTo(".s9_night_photo2_img", 3, { opacity: 0 }, { opacity: 1 })
        .fromTo(".s9_night_main .content_white", 3, { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, "-=3");
    _trigger1 = ".s9_night";
    _duration1 = 600;
    _offset1 = $(".s9_night").height()*0.48;

} else if (which_port == 'superPc') {

    _pin = ".s9_night";
    //_video = ".s9_vlog_video";

    //标题文字出现
    var night_ani = new TimelineMax()
        .fromTo(".s9_night_textbox .subtitle_white", 4, { y: 30, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(".s9_night_textbox .title_white", 4, { y: 60, opacity: 0 }, { y: 0, opacity: 1 }, "-=4")
    _trigger = ".s9_night";
    _duration = 1600;
    _offset = -400;

    //卡屏,照片变亮,底部文字出现
    var night1_ani = new TimelineMax()
        .fromTo(".s9_night_imgbox", 3, { transform: 'scale(0.9)' }, { transform: 'scale(1)' })
        .fromTo(".s9_night_textbox ", 3, { y: 0 }, { y: -180 }, "-=3")
        .fromTo(".s9_night_photo2_img", 3, { opacity: 0 }, { opacity: 1 })
        .fromTo(".s9_night_main .content_white", 3, { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, "-=3");
    _trigger1 = ".s9_night";
    _duration1 = 600;
    // _offset1 = 600;
    _offset1=640;

} else {
    _pin = ".s9_night";
    //_video = ".s9_vlog_video";

    //标题文字出现
    var night_ani = new TimelineMax()
        .fromTo(".s9_night_textbox .subtitle_white", 4, { y: 30, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(".s9_night_textbox .title_white", 4, { y: 60, opacity: 0 }, { y: 0, opacity: 1 }, "-=4")
    _trigger = ".s9_night";
    _duration = 1600;
    _offset = -450;

    //卡屏,照片变亮,底部文字出现
    var night1_ani = new TimelineMax()
        .fromTo(".s9_night_imgbox", 3, { transform: 'scale(0.9)' }, { transform: 'scale(1)' })
        .fromTo(".s9_night_textbox ", 3, { y: 0 }, { y: -180 }, "-=3")
        .fromTo(".s9_night_photo2_img", 3, { opacity: 0 }, { opacity: 1 })
        .fromTo(".s9_night_main .content_white", 3, { y: 40, opacity: 0 }, { y: 0, opacity: 1 }, "-=3");
    _trigger1 = ".s9_night";
    _duration1 = 600;
    // _offset1 = 540;
    _offset1=567.6;
}

export const night = new ScrollMagic.Scene({
    triggerElement: _trigger,
    duration: _duration,
    offset: _offset,
    reverse: true,
})
// .addIndicators({
//     name: 'night'
// })
    .setTween(night_ani);

export const night1 = new ScrollMagic.Scene({
    triggerElement: _trigger1,
    duration: _duration1,
    offset: _offset1,
    reverse: true,
})
    .setTween(night1_ani)
    .setPin(_pin)
    //.on("enter", function (e) {
    //    $(_video).trigger(
    //        'pause'
    //    );
   // })
    // .addIndicators({
    //     name: 'night1'
    // })
    .addTo(controller);