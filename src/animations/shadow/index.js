// import { whitchPost } from '../../plugins/utils';
// var which_port = whitchPost();
// var controller = new ScrollMagic.Controller();
// var shadowani;
// var shadowani0;
// var _trigger;
// var _trigger0;
// var _duration;
// var _duration0;
// var _offset;
// var _offset0;

// if(which_port=='phone'){

//     //照片,文字
//     var shadowani = new TimelineMax()
//     .fromTo(".s9_shadow_textbox_md .subtitle",2,{y:30,opacity:0},{y:0,opacity:1})
//     .fromTo(".s9_shadow_textbox_md .title",2,{y:60,opacity:0},{y:0,opacity:1},"-=2")
//     .fromTo(".s9_shadow_textbox_md .content",2,{y:80,opacity:0},{y:0,opacity:1},"-=2")
//     .fromTo(".s9_shadow_photo1_img_md",6,{y:120,transform:'scale(0.8)',opacity:0.5},{y:0,transform:'scale(1)',opacity:1})
//     //.fromTo(".s9_shadow_text1_md",1,{y:50,opacity:0},{y:0,opacity:1})
//     .fromTo(".s9_shadow_photo2_img_md",6,{transform:'scale(0.8)',opacity:0.5},{transform:'scale(1)',opacity:1});
//     //.fromTo(".s9_shadow_text2_md",1,{y:50,opacity:0},{y:0,opacity:1});
//     _trigger = ".s9_shadow_md";
//     _duration = 1300;
//     _offset = 0;

// }else{


//     //文字
//     var shadowani0 = new TimelineMax()
//     .fromTo(".s9_shadow_textbox .subtitle",1,{y:30,opacity:0},{y:0,opacity:1})
//     .fromTo(".s9_shadow_textbox .title",1,{y:60,opacity:0},{y:0,opacity:1},"-=1")
//     .fromTo(".s9_shadow_textbox .content",1,{y:90,opacity:0},{y:0,opacity:1},"-=1")
//     _trigger0 = ".s9_shadow_textbox";
//     _duration0 = 1200;
//     _offset0 = -320;



//     //照片
//     var shadowani = new TimelineMax()
//     .fromTo(".s9_shadow_photo2_img",6,{y:170},{y:0},"-=8")
//     .fromTo(".s9_shadow_text1",6,{y:90},{y:0},"-=8")

//     .fromTo(".s9_shadow_photo1_img",6,{y:170},{y:0},"-=8")
//     _trigger = ".s9_shadow";
//     _duration = 950;
//     _offset = -150;

// }


// export const shadow0 = new ScrollMagic.Scene({
//     triggerElement: _trigger0,
//     duration: _duration0,
//     offset: _offset0,
//     reverse: true,
// })
// .setTween(shadowani0)
// .addTo(controller);

// export const shadow = new ScrollMagic.Scene({
//     triggerElement: _trigger,
//     duration: _duration,
//     offset: _offset,
//     reverse: true,
// })
// .setTween(shadowani)
// .addTo(controller);

import {
    initKeyFrame
  } from '../initKeyFrame';
import { whitchPost } from '../../plugins/utils';
var which_port = whitchPost();
var controller = new ScrollMagic.Controller();
var shadowani;
var shadowani1;
var shadow_text;
var _trigger;
var _trigger1;
var _trigger0;
var _duration;
var _duration0;
var _duration1;
var _offset;
var _offset0;
var _offset1;
var _pin;
var wallpaperFrame;

var _imgHeight = $('#s9_shadow_imgbox1_canvas').height();
console.log(_imgHeight);

// var canvas = document.getElementById("s9_shadow_imgbox1_canvas");
// canvas.height = 470;
// canvas.width = 358;
// var ctx = canvas.getContext("2d");
// var img = new Image();
// img.src = IMAGE_HOST + '/' + `images/shadow_logo/shadow0.jpg`;
// img.onload = function () {
//   ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
// };



if (which_port == 'phone') {

    _pin = ".s9_shadow_md";
    //照片1,文字
    var shadowani = new TimelineMax()
        .fromTo(".s9_shadow_textbox_md .subtitle", 1, { y: 30, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(".s9_shadow_textbox_md .title", 1, { y: 60, opacity: 0 }, { y: 0, opacity: 1 }, "-=1")
        .fromTo(".s9_shadow_textbox_md .content", 1, { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, "-=1");
        // .fromTo(".s9_shadow_photo1_img_md", 2, { transform: 'scale(0.8)', opacity: 0.5 }, { transform: 'scale(1)', opacity: 1 })
        
        // .fromTo(".s9_shadow_photo2_img_md", 2, { transform: 'scale(0.8)', y: 170, opacity: 0.5 }, { transform: 'scale(1)', y: 0, opacity: 1 },);
    _trigger = ".s9_shadow_md";
    _duration = 1000;
    _offset = - $('.s9_shadow_md').height() / 7;

    // //卡屏,照片合成效果
    // var shadowani1 = new TimelineMax()
    // .fromTo(".s9_shadow_photo1_2_img_md",1,{opacity:0},{opacity:1})
    // .fromTo(".s9_shadow_photo1_3_img_md",1,{opacity:0},{opacity:1});
    // //.fromTo(".s9_shadow_text1_md",1,{y:20,opacity:0},{y:0,opacity:1},"-=3");
    // _trigger1 = ".s9_shadow_md";
    // _duration1 = 1500;
    // _offset1 = 1100;

    var shadowani1=new TimelineMax()
    .fromTo(".s9_shadow_photo2_img_md", 2, { transform: 'scale(0.8)', y: 170, opacity: 0.5 }, { transform: 'scale(1)', y: 0, opacity: 1 },);
    // _trigger1 = "s9_shadow_imgbox2_md";
    _offset1 = -250;
    _duration1 = _imgHeight;
} else if (which_port == 'pad') {

    _pin = "";

    //文字
    var shadow_text = new TimelineMax()
        .fromTo(".s9_shadow_textbox .subtitle", 1, { y: 80, opacity: 0 }, { y: -100, opacity: 1 })
        .fromTo(".s9_shadow_textbox .title", 1, { y: 110, opacity: 0 }, { y: -100, opacity: 1 }, "-=1")
        .fromTo(".s9_shadow_textbox .content", 1, { y: 140, opacity: 0 }, { y: -100, opacity: 1 }, "-=1");
    _trigger0 = ".s9_shadow_textbox";
    _duration0 = 950;
    _offset0 = -450;

    //照片
    var shadowani = new TimelineMax()

        .from(".s9_shadow_photo2_img", 6, { y: 90 }, "-=8")
        .from(".s9_shadow_text2", 6, { y: 90 }, "-=8")

        .fromTo(".s9_shadow_photo1_img", 6, { y: 170 }, { y: 0 }, "-=8");
    _trigger = ".s9_shadow";
    _duration = 950;
    _offset = -150;

    var videoset = new TimelineMax()
        .fromTo(".s9_shadow_video", 0, { opacity: 1 }, { opacity: 1 });

    // //照片合成效果,不卡屏
    // var shadowani1 = new TimelineMax()
    // .fromTo(".s9_shadow_photo1_2_img",1,{opacity:0},{opacity:1})
    // .fromTo(".s9_shadow_photo1_3_img",1,{opacity:0},{opacity:1})
    // // .fromTo(".s9_shadow_text1",1,{y:40,opacity:0},{y:0,opacity:1},"-=1");
    // _trigger1 = ".s9_shadow";
    // _duration1 = 0;
    // _offset1 = 700;

} else {

    _pin = "";

    //文字
    var shadow_text = new TimelineMax()
        .fromTo(".s9_shadow_textbox .subtitle", 1, { y: 80, opacity: 0 }, { y: -100, opacity: 1 })
        .fromTo(".s9_shadow_textbox .title", 1, { y: 110, opacity: 0 }, { y: -100, opacity: 1 }, "-=1")
        .fromTo(".s9_shadow_textbox .content", 1, { y: 140, opacity: 0 }, { y: -100, opacity: 1 }, "-=1");
    _trigger0 = ".s9_shadow_textbox";
    _duration0 = 950;
    _offset0 = -450;

    //照片
    var shadowani = new TimelineMax()

        .from(".s9_shadow_photo2_img", 6, { y: 90 }, "-=8")
        .from(".s9_shadow_text2", 6, { y: 90 }, "-=8")

        .fromTo(".s9_shadow_photo1_img", 6, { y: 170 }, { y: 0 }, "-=8");
    _trigger = ".s9_shadow";
    _duration = 950;
    _offset = -150;

    var videoset = new TimelineMax()
        .fromTo(".s9_shadow_video", 0, { opacity: 1 }, { opacity: 1 });

}

if (which_port == "superPc") {
    _offset1 = 250;
} else if (which_port == "pc") {
    _offset1 = 220;
} else if (which_port == "pad") {
    _offset1 = 100;
}else{
    $(".s9_shadow_video").remove();
}

export const shadow = new ScrollMagic.Scene({
    triggerElement: _trigger,
    duration: _duration,
    offset: _offset,
    reverse: true,
})
    // .addIndicators({
    //     name:'shadowani'
    // })
    .setTween(shadowani)
    .addTo(controller);

export const shadow0 = new ScrollMagic.Scene({
    triggerElement: _trigger0,
    duration: _duration0,
    offset: _offset0,
    reverse: true,
})
// .addIndicators({
//     name:'shadowan_text'
// })
    .setTween(shadow_text)
    .addTo(controller);

export const shadow1 = new ScrollMagic.Scene({
    triggerElement: _trigger,
    duration: 0,
    offset: _offset1,
    reverse: true,
})
// .addIndicators({
//     name:'play'
// })
    .on("enter", function (e) {
        if (which_port != 'phone') {
            $('.s9_shadow_video').trigger(
                'play'
            )
        }
    })
export const videoSet = new ScrollMagic.Scene({
    triggerElement: _trigger,
    duration: 0,
    offset: 110,
    reverse: true,
})
    //     .addIndicators()
    //     .on("enter", function (e) {
    //         if (which_port != 'phone' && which_port != 'pad') {
    //             $('.s9_shadow_video').trigger(
    //                 'load()'
    //             )
    //         }
    //     })
    .setTween(videoset);
var shadow_bigger = new TimelineMax()
.fromTo("#s9_shadow_imgbox1_canvas", 2, { transform: 'scale(0.8)', opacity: 0.5 }, { transform: 'scale(1)', opacity: 1 })
export const shadow_big = new ScrollMagic.Scene({
  //触发元素
  triggerElement: "#s9_shadow_imgbox1_canvas",
//   triggerHook: "onLeave",
  offset: -_imgHeight/1.8,
  duration: _imgHeight,
})
//   .addIndicators({
//     name:'shadow_big'
//   })
  .setTween(shadow_bigger)
//   .setPin("#s9_shadow_imgbox1_canvas")





//shadow序列针
var shadow_cv_ani = new TimelineMax()
  .to("", 1, {
    onStart: () => {
        
    }
  },)

// export const shadow_pin = new ScrollMagic.Scene({
//   //触发元素
//   triggerElement: "#s9_shadow_imgbox1_canvas",
// //   triggerHook: "onLeave",
//   offset: _imgHeight/2,
//   duration: _imgHeight/1.5,
// })
//   .addIndicators({
//     name:'shadow_pin'
//   })
//   .setPin("#s9_shadow_imgbox1_canvas")



  export const shadow_cv = new ScrollMagic.Scene({
    //触发元素
    triggerElement: "#s9_shadow_imgbox1_canvas",
  //   triggerHook: "onLeave",
    offset: -_imgHeight/2,
    duration: _imgHeight,
  })
    // .addIndicators({
    //   name:'play'
    // })
    // .setPin("#s9_shadow_imgbox1_canvas")
    .setTween(shadow_cv_ani)
    .on("start",(e)=>{
  
      if(which_port === 'phone'){
         
          if (!wallpaperFrame) {
              // console.log("aaaaaaaa")
          initKeyFrame('#s9_shadow_imgbox1_canvas').then(res =>{
              console.log("s9_shadow_imgbox1_canvas-----res===>", res)

              wallpaperFrame = res.keyFrames;
          });
          } else {
            wallpaperFrame.goto(0)
            wallpaperFrame.play()

          }
      }
    })



export const shadow2 = new ScrollMagic.Scene({
    triggerElement: ".s9_shadow_imgbox2_md",
    duration: _duration1,
    offset: _offset1,
    // reverse: true,
})
    // .addIndicators({
    //     name:'shadowani2'
    // })
    .setTween(shadowani1)
    .addTo(controller);