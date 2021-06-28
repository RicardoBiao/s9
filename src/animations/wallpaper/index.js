import { whitchPost } from '../../plugins/utils';
var which_port = whitchPost();
var _duration;
var _offset;
var _wallpaper_height = $(window).height()/100;

if(which_port=='phone'){

    _duration = 400;
    _offset = 370;

    //文字出现,闪灯,提示
    var wallpaper_ani = new TimelineMax()
            .fromTo(".s9_wallpaper_textbox .mid_title_white",2,{y:30,opacity:0},{y:0,opacity:1})
            .fromTo(".s9_wallpaper_textbox .mid_content_white",2,{y:50,opacity:0},{y:0,opacity:1},"-=2")
            .fromTo(".s9_wallpaper_imgbox",2,{y:50,opacity:0.2},{y:-30,opacity:1},"-=2");

    var wallpaper1_ani = new TimelineMax()
            .to(".s9_wallpaper_phone2",1,{x:-86,opacity:1})
            .fromTo(".s9_wallpaper_phone4",1,{x:0,opacity:1},{x:126,opacity:1},"-=1");        

}else{

    _duration = 500;
    _offset = 350;

    //文字出现,闪灯,提示
    var wallpaper_ani = new TimelineMax()
            .fromTo(".s9_wallpaper_textbox .mid_title_white",1,{y:30,opacity:0},{y:0,opacity:1})
            .fromTo(".s9_wallpaper_textbox .mid_content_white",1,{y:60,opacity:0},{y:0,opacity:1},"-=1");

    var wallpaper1_ani = new TimelineMax()
            .fromTo(".s9_wallpaper_phone2",1,{x:208,opacity:0},{x:0,opacity:1})
            .fromTo(".s9_wallpaper_phone4",1,{x:-298,opacity:0},{x:0,opacity:1},"-=1")
            .fromTo(".s9_wallpaper_phone5",1,{x:-515,opacity:0},{x:0,opacity:1},"-=1")
            .fromTo(".s9_wallpaper_phone1",1,{x:404,opacity:0},{x:0,opacity:1},"-=1");

}

if(which_port=="phone"){
    $(".s9_wallpaper_main .s9_vlog_videobox ").remove();
}


export const wallpaper = new ScrollMagic.Scene({
    triggerElement: ".s9_wallpaper",
    duration: _duration,
    offset: -_offset,
    reverse: true,
})
// .addIndicators({
//     name: 'wallpaper'
// })
.setTween(wallpaper_ani);

export const wallpaper1 = new ScrollMagic.Scene({
    triggerElement: ".s9_wallpaper",
    duration: 0,
    offset: 0,
    reverse: true,
})
// .addIndicators({
//     name: 'wallpaper1'
// })
.setTween(wallpaper1_ani);


export const wallpaper_video = new ScrollMagic.Scene({
    triggerElement: ".s9_wallpaper",
    duration: 0,
    offset: 200,
    reverse: true,
})
.on("enter", function (e) {
    if(which_port!="phone"){
        $('.s9_wallpaper_video').trigger(
            'play'
        );
    }
})
// .addIndicators({
//     name: 'wallpaper_video'
// })

// var userAgent=navigator.userAgent;

// var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") < 1 ; //判断是否Safari

// if(isSafari){
//     console.log('is');
//     $(".s9_wallpaper").css({"height":"1224px"});
// }else{
//     console.log('no');
// }

// var ua = navigator.userAgent.toLowerCase();
//     if (ua.indexOf('applewebkit') > -1 && ua.indexOf('mobile') > -1 && ua.indexOf('safari') > -1 &&
//         ua.indexOf('linux') === -1 && ua.indexOf('android') === -1 && ua.indexOf('chrome') === -1 &&
//         ua.indexOf('ios') === -1 && ua.indexOf('browser') === -1) {
//         console.log("true");
//     }else{
//         console.log("false");
//     }
var u=navigator.userAgent;
if(u.indexOf("Safari")==-1){
    console.log("true");
    $(".s9_wallpaper").css({"height":"1224px"});
}else{
    console.log("false");
}