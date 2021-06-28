import { whitchPost, playvideo } from '../../plugins/utils';
var which_port = whitchPost();
var controller = new ScrollMagic.Controller();
var vlog_ani;
var vlog_ani0;
var vlog1_ani;
var _trigger;
var _trigger0;
var _trigger1;
var _trigger2;
var _duration;
var _duration0;
var _duration1;
var _duration2;
var _offset;
var _offset0;
var _offset1;
var _offset2;
var _pin;
var _video;


// 什么端口
var which_port = whitchPost();

if (which_port == 'phone') {
    playvideo(".s9_vlog_videobox_md")
    playvideo(".s9_vlog_video_play_img")

    _pin = "";
    _video = ".s9_vlog_video_md";

    //标题文字出现
    var vlog_ani = new TimelineMax()
        .fromTo(".s9_vlog_textbox_md .subtitle_white", 1, { y: 30, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(".s9_vlog_textbox_md .title_white", 1, { y: 60, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.9")
        .fromTo(".s9_vlog_main_md .content_white", 1, { y: 70, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.85");
    _trigger = ".s9_vlog_md";
    _duration = 550;
    _offset = -280;

    //视频播放,底部文字出现
    var vlog1_ani = new TimelineMax()
        .fromTo(".s9_vlog_videobox_md", 1, { opacity: 0 }, { opacity: 1 });
    _trigger1 = ".s9_vlog_md";
    _duration1 = 100;
    _offset1 = 60;

    //视频停止播放
    _trigger2 = ".s9_vlog_md";
    _duration2 = 300;
    _offset2 = 400;

} else if (which_port == "pad") {
    _pin = ".s9_vlog";
    _video = ".s9_vlog_video";

    //标题文字出现
    var vlog_ani = new TimelineMax()
        .fromTo(".s9_vlog_textbox .subtitle_white", 3, { y: 60, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(".s9_vlog_textbox .title_white", 3, { y: 60, opacity: 0 }, { y: 0, opacity: 1 }, "-=3")
    _trigger = ".s9_vlog";
    _duration = 800;
    _offset = -$(".s9_vlog").height() * 0.5;

    var vlog_ani0 = new TimelineMax()
        .fromTo(".s9_vlog_textbox ", 1, { y: 0 }, { y: -290 }, "-=1")
    _trigger0 = ".s9_vlog";
    _duration0 = 800;
    _offset0 = 420;

    //视频播放,底部文字出现
    var vlog1_ani = new TimelineMax()

        .fromTo(".s9_vlog_main .content_white", 3, { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.8");
    _trigger1 = ".s9_vlog";
    _duration1 = 900;
    _offset1 = $(".s9_vlog").height() * 0.5;

    //触发视频播放
    _trigger2 = ".s9_vlog_main .content_white";
    _duration2 = 300;
    _offset2 = 100;

} else if (which_port == "superPc") {

    _pin = ".s9_vlog";
    _video = ".s9_vlog_video";

    //标题文字出现
    var vlog_ani = new TimelineMax()
        .fromTo(".s9_vlog_textbox .subtitle_white", 3, { y: 80, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(".s9_vlog_textbox .title_white", 3, { y: 80, opacity: 0 }, { y: 0, opacity: 1 }, "-=3")
    _trigger = ".s9_vlog";
    _duration = 400;
    _offset = -$(".s9_vlog").height() * 0.4;

    var vlog_ani0 = new TimelineMax()
        .fromTo(".s9_vlog_textbox ", 1, { y: 0 }, { y: -290 }, "-=1")
    _trigger0 = ".s9_vlog";
    _duration0 = 800;
    _offset0 = $(".s9_vlog").height() * 0.5;

    //视频播放,底部文字出现
    var vlog1_ani = new TimelineMax()
        .fromTo(".s9_vlog_main .content_white", 3, { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.8");
    _trigger1 = ".s9_vlog";
    _duration1 = 900;
    _offset1 = $(".s9_vlog").height() * 0.575;

    //触发视频播放
    _trigger2 = ".s9_vlog_main .content_white";
    _duration2 = 300;
    _offset2 = 100;

} else {

    _pin = ".s9_vlog";
    _video = ".s9_vlog_video";

    //标题文字出现
    var vlog_ani = new TimelineMax()
        .fromTo(".s9_vlog_textbox .subtitle_white", 3, { y: 40, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(".s9_vlog_textbox .title_white", 3, { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, "-=3")
    _trigger = ".s9_vlog";
    _duration = 800;
    _offset = -400;

    var vlog_ani0 = new TimelineMax()
        .fromTo(".s9_vlog_textbox ", 1, { y: 0 }, { y: -290 }, "-=1")
    _trigger0 = ".s9_vlog";
    _duration0 = 800;
    _offset0 = 420;

    //视频播放,底部文字出现
    var vlog1_ani = new TimelineMax()

        .fromTo(".s9_vlog_main .content_white", 3, { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.8");
    _trigger1 = ".s9_vlog";
    _duration1 = 900;
    // _offset1 = 620;
    _offset1=691.15;

    //触发视频播放
    _trigger2 = ".s9_vlog_main .content_white";
    _duration2 = 300;
    _offset2 = 100;

}

export const vlog = new ScrollMagic.Scene({
    triggerElement: _trigger,
    duration: _duration,
    offset: _offset,
    reverse: true,
})
    .on("enter", function (e) {
        if (which_port != 'phone') {
            $(_video).trigger(
                'play'
            );
        }

    })
    .setTween(vlog_ani);

export const vlog0 = new ScrollMagic.Scene({
    triggerElement: _trigger0,
    duration: _duration0,
    offset: _offset0,
    reverse: true,
})
    .setTween(vlog_ani0);

export const vlog1 = new ScrollMagic.Scene({
    triggerElement: _trigger1,
    duration: _duration1,
    offset: _offset1,
    reverse: true,
})
// .addIndicators({
//     name: 'pin'
// })
    .setTween(vlog1_ani)
    .setPin(_pin)
    .addTo(controller);

export const vlog_stop = new ScrollMagic.Scene({
    triggerElement: _trigger2,
    duration: _duration2,
    offset: _offset2,
    reverse: true,
})
    //.on("leave", function (e) {
    //    $(_video).trigger(
    //        'pause'
    //    );
    //    $(_video).controls = false;
    //})

// var userAgent=navigator.userAgent;

// var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") < 1 ; //判断是否Safari

// if(isSafari){
//     $(".s9_vlog_main").css({"padding-top":"188px"});
// }