import { whitchPost, playvideo } from '../../plugins/utils';
var which_port = whitchPost();
var controller = new ScrollMagic.Controller();
var _phone3;
var lookmove_ani;
var lookani;
var _look_height = $(window).height();
var duration;
var duration1;
var duration2;
var offset;
var offset1;
var offset2;
 
if (which_port == 'phone') {
    playvideo(".s9_btn1")

    _phone3 = -62;
    var lookmove_ani = new TimelineMax()
        .fromTo(".s9_look_phone1", 20, { y: 0 }, { y: -80 }, "-=7")
        .fromTo(".s9_look_phone2", 5, { y: 100 }, { y: -60 }, "-=17")
        .fromTo(".s9_look_phone3", 7, { y: 250 }, { y: -30 }, "-=16");
    var lookani = new TimelineMax()
        .to(".s9_look_phone1", 0.1, { opacity: 1 })
        .to(".s9_look_phone2", 0.6, { opacity: 1 })
        .to(".s9_look_phone3", 2, { x: 0 }, "-=0.18")
        .to(".s9_look_phone3", 1.4, { x: _phone3 }, "+=0.33")
        .fromTo([".s9-look-left-text", ".s9-look-right-text"], 1, { opacity: 0, y: 60 }, { opacity: 1, y: 0 });
    
    duration = 1500 ;  //手机1，2上滑消失
    duration1 = 900;
    duration2 = 600;
    offset = -300;
    offset1 = -150;
    offset2 = 0;
}

if (which_port == 'pad') {
    playvideo(".s9_btn1")

    _phone3 = -116;
    var lookmove_ani = new TimelineMax()
        .to(".s9_look_phone1", 16, { y: -190})
        .fromTo([".s9_look_phone2",".s9_look_phone3"], 20, {y:400},{ y: -200 },"-=20");
    //手机1,2消失,手机3居中,文字出现
    var lookani = new TimelineMax()
        .to(".s9_look_phone1", 0.1, { opacity: 1 })
        .to(".s9_look_phone2", 0.6, { opacity: 1 })
        .to(".s9_look_phone3", 1.4, { x: _phone3 }, "-=0.18")
        .fromTo([".s9-look-left-text", ".s9-look-right-text"], 1, { opacity: 0, y: 60 }, { opacity: 1, y: 0 });

    duration = 1900;
    duration1 = 1500;
    duration2 = 1100;
    offset = -500;
    offset1 = -200;
    offset2 = -100;
} 

if (which_port == 'superPc') {
    playvideo(".s9_btn1")

    _phone3 = -166;
    var lookmove_ani = new TimelineMax()
        .fromTo(".s9_look_phone1", 20, { y: 0 }, { y: -166 })
        .fromTo(".s9_look_phone2", 20, { y: 50 }, { y: -200 }, "-=10")
        .fromTo(".s9_look_phone3", 20, { y: 200 }, { y: -200 }, "-=10");
    //手机1,2消失,手机3居中,文字出现
    var lookani = new TimelineMax()
        .to(".s9_look_phone1", 0.1, { opacity: 1 })
        .to(".s9_look_phone2", 0.6, { opacity: 1 })
        .to(".s9_look_phone3", 1.3, { x: 0 }, "-=0.18")
        .to(".s9_look_phone3", 1.4, { x: _phone3 }, "-=0.18")
        .fromTo([".s9-look-left-text", ".s9-look-right-text"], 1, { opacity: 0, y: 60 }, { opacity: 1, y: 0 });

    duration = 1600;
    duration1 = 1400;
    duration2 = 1500;
    offset = 0;
    offset1 = -200;
    offset2 = -100;
}

if (which_port == 'pc'){
    playvideo(".s9_btn1")

    _phone3 = -166;
    var lookmove_ani = new TimelineMax()
        .fromTo(".s9_look_phone1", 20, { y: 0 }, { y: -166})
        .fromTo(".s9_look_phone2", 20, { y: 50 }, { y: -200 }, "-=10")
        .fromTo(".s9_look_phone3", 40, { y: 100 }, { y: -200}, "-=10");
    //手机1,2消失,手机3居中,文字出现
    var lookani = new TimelineMax()
        .to(".s9_look_phone1", 0.1, { opacity: 1 })
        .to(".s9_look_phone2", 0.6, { opacity: 1 })
        .to(".s9_look_phone3", 2, { x: 0 }, "-=0.18")
        .to(".s9_look_phone3", 1.4, { x: _phone3 }, "-=0.18")
        .fromTo([".s9-look-left-text", ".s9-look-right-text"], 1, { opacity: 0, y: 60 }, { opacity: 1, y: 0 });

    duration = 1200;
    duration1 = 1200;
    duration2 = 1100;
    offset =0;
    offset1 = -200;
    offset2 = -100;
    
}

export const look_phone_move = new ScrollMagic.Scene({
    triggerElement: ".s9_look",
    duration: duration,
    offset: offset,
    reverse: true,
})
// .addIndicators({
//     name:'phone'
// })
.setTween(lookmove_ani)
.addTo(controller);

export const look_phone = new ScrollMagic.Scene({
    triggerElement: ".s9_keyframe",
    duration: duration1-400,
    offset: offset1,
    reverse: true,
})
    // .addIndicators({
    //     name:'text'
    // })
    .setTween(lookani);


export const look_background = new ScrollMagic.Scene({
    triggerElement: ".s9_keyframe",
    duration: duration2,
    offset: offset2,

    reverse: true,
})
    // .addIndicators({
    //     name:'pin'
    // })
    .setPin(".s9_look_phone4")
    .addTo(controller);


// //按钮1
// $(".s9_btn1").click(function () {
//     $(".s9-popup-player").show();
//     $(".video-fr").trigger(
//         'play'
//     );
//     $(".mask").click(function () {
//         $(".video-fr").trigger(
//             'pause'
//         );
//         $(".s9-popup-player").hide();
//     });
// });

// //按钮2
// $(".s9_btn2").click(function () {
//     alert("此链接跳转去360");
// });

//视频播放按钮动画

// var lookani = new TimelineMax()
//         .fromTo([".s9_btn1", ".s9_btn2"], 1, { opacity: 0}, { opacity: 1});

// export const look_btn = new ScrollMagic.Scene({
//     triggerElement: ".s9_keyframe",
//     duration: duration1,
//     offset: offset1+300,
// })
// .addIndicators({
//     name:'button'
// })
// .setTween(lookani)
// .addTo(controller);