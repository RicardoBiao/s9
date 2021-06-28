import { whitchPost } from '../../plugins/utils';
var which_port = whitchPost();
var controller = new ScrollMagic.Controller();
var _line1;
var duration;
var offset;
var duration1;
var offset1;

if(which_port=='phone'){
    _line1 = "48px";
    $(".s9_camera_textbox .title").html("自拍<br>首先要惊艳自己");
    $(".s9_camera_textbox .content").html("vivo S9前置再再再升级，自拍更有仪式感，自然更具美感。超清AF自动对焦双摄+双极夜柔光灯，美有双全保障，让自拍悦己，合影悦众。");
    $(".s9_camera_tips1 .describe_content").html("4400 万超清主摄+<br>800 万超广角人像镜头");
    duration = 800;
    offset = -220;
    duration1 = 0;
    offset1 = 120;
}else{
    _line1 = "91px";
    duration = 1600;
    offset = -400;
    duration1 = 0;
    offset1 = -50;
}

//文字出现
var cameraani = new TimelineMax()
            .fromTo(".s9_camera_textbox .subtitle",1,{y:30,opacity:0},{y:0,opacity:1})
            .fromTo(".s9_camera_textbox .title",1,{y:60,opacity:0},{y:0,opacity:1},"-=1")
            .fromTo(".s9_camera_textbox .content",1,{y:90,opacity:0},{y:0,opacity:1},"-=1");

export const camera = new ScrollMagic.Scene({
    triggerElement: ".s9_camera",
    duration: duration,
    offset: offset,
    reverse: true,
})
.setTween(cameraani);

//闪灯,提示
var camera1ani = new TimelineMax()
            .fromTo(".s9_camera_light",1,{opacity:0},{opacity:1})//闪灯
            .fromTo(".s9_camera_tips1",1,{opacity:0},{opacity:1},"-=0.5")
            .fromTo(".s9_camera_tips2",1,{opacity:0},{opacity:1},"-=1");

export const camera1 = new ScrollMagic.Scene({
    triggerElement: ".s9_camera_textbox",
    duration: duration1,
    offset: offset1,
    reverse: true,
})
.setTween(camera1ani);

