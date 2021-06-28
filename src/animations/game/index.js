import { whitchPost } from '../../plugins/utils';
var which_port = whitchPost();
var controller = new ScrollMagic.Controller();
var game_ani;
var game1_ani;
var _trigger;
var _trigger1;
var _duration;
var _duration1;
var _offset;
var _offset1;
var _pin;

if(which_port=='phone'){

    _pin = ".s9_game_md";

    //标题文字出现
    var game_ani = new TimelineMax()
    .fromTo(".s9_game_textbox_md .subtitle_white",1,{y:30,opacity:0},{y:0,opacity:1})
    .fromTo(".s9_game_textbox_md .title_white",1,{y:60,opacity:0},{y:0,opacity:1},"-=1")
    .fromTo(".s9_game_main_md .content_white",1,{y:120,opacity:0},{y:0,opacity:1},"-=1")
    .from(".s9_game_photo_img_md",3,{y:120},"-=3");    
    _trigger = ".s9_game_md";
    _duration = 900;
    _offset = -840;

    //卡屏,图片变亮,底部文字出现
    var game1_ani = new TimelineMax()
    .fromTo(".s9_game_photo_img_md",3,{opacity:1},{opacity:1}); 
    _trigger1 = ".s9_game_md";
    _duration1 = 10;
    _offset1 = 580;

}else if(which_port=='pad'){
    _pin = "";

    //标题文字出现
    var game_ani = new TimelineMax()
    .fromTo(".s9_game_textbox .subtitle_white",3,{y:70,opacity:0},{y:0,opacity:1})
    .fromTo(".s9_game_main .title_white", 3, { y: 120, opacity: 0 }, { y: 0, opacity: 1 },"-=3")
    .fromTo(".s9_game_imgbox", 3, { y: 70, opacity: 1 }, { y: 0, opacity: 1 },"-=3"); 

    _trigger = ".s9_game";
    _duration = 150;
    _offset = -320;

    //图片变亮,底部文字出现
    var game1_ani = new TimelineMax()
    .fromTo(".s9_game_main .content_white",3,{y:30,opacity:0},{y:0,opacity:1}); 
    _trigger1 = ".s9_game";
    _duration1 = 200;
    _offset1 = 200;
}
else{

    _pin = "";

    //标题文字出现
    var game_ani = new TimelineMax()
    .fromTo(".s9_game_textbox .subtitle_white",3,{y:70,opacity:0},{y:0,opacity:1})
    .fromTo(".s9_game_main .title_white", 3, { y: 120, opacity: 0 }, { y: 0, opacity: 1 },"-=3")
    .fromTo(".s9_game_imgbox", 3, { y: 70, opacity: 1 }, { y: 0, opacity: 1 },"-=3"); 

    _trigger = ".s9_game";
    _duration = 800;
    _offset = -300;

    //图片变亮,底部文字出现
    var game1_ani = new TimelineMax()
    .fromTo(".s9_game_main .content_white",3,{y:30,opacity:0},{y:0,opacity:1}); 
    _trigger1 = ".s9_game";
    _duration1 = 200;
    _offset1 = 600;

}

export const game = new ScrollMagic.Scene({
    triggerElement: _trigger,
    duration: _duration,
    offset: _offset,
    reverse: true,
})
// .addIndicators({
//     name:'title-top'
// })
.setTween(game_ani);

export const game1 = new ScrollMagic.Scene({
    triggerElement: _trigger1,
    duration: _duration1,
    offset: _offset1,
    reverse: true,
})
// .addIndicators({
//     name:'title-middle'
// })
.setTween(game1_ani)
.addTo(controller);

// var userAgent=navigator.userAgent;

// var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") < 1 ; //判断是否Safari

// if(isSafari){
//     $(".s9_game_main").css({"padding-top":"222px"});
// }