import { whitchPost } from '../../plugins/utils';
import {
  initKeyFrame
} from '../initKeyFrame';
var which_port = whitchPost();
var _duration;
var _offset;
var _duration1;
var _offset1;


var canvas = document.getElementById("s9_os_imgbox_canvas");
canvas.height = 800;
canvas.width = 800;
var ctx = canvas.getContext("2d");
var img = new Image();
img.src = IMAGE_HOST + '/' + `images/os_logo/logo0.png`;
img.onload = function () {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};

if (which_port == 'phone') {
  _duration = 600;
  _offset = 600+window.screen.height*0.4;
  _duration1 = 600;
  _offset1 =-(window.screen.height-600)/2+20;
  canvas.width = 600;
  canvas.height = 600;
  //文字出现,闪灯,提示
  var os_ani = new TimelineMax()
    .fromTo(".s9_os_textbox .subtitle_white", 1, { y: 30, opacity: 0 }, { y: 0, opacity: 1 })
    .fromTo(".s9_os_textbox .title_white", 1, { y: 90, opacity: 0 }, { y: 0, opacity: 1 }, "-=1")
    .fromTo(".s9_os_textbox .content_white", 1, { y: 150, opacity: 0 }, { y: 0, opacity: 1 }, "-=1")
    .fromTo(".s9_os_textbox .buylink_white",1,{y:180,opacity:0},{y:0,opacity:1},"-=1");

} else if (which_port == 'superPc') {
  _duration = 1400;
  _offset = 1450;
  _duration1 = 900;
  _offset1 = -(window.innerHeight-1000)/2+128;
  canvas.width = 1000;
  canvas.height = 1000;
  //文字出现,闪灯,提示
  var os_ani = new TimelineMax()
    .fromTo(".s9_os_textbox .subtitle_white", 1, { y: 100, opacity: 0 }, { y: 0, opacity: 1 })
    .fromTo(".s9_os_textbox .title_white", 1, { y: 160, opacity: 0 }, { y: 0, opacity: 1 }, "-=1")
    .fromTo(".s9_os_textbox .content_white", 1, { y: 220, opacity: 0 }, { y: 0, opacity: 1 }, "-=1")
    .fromTo(".s9_os_textbox .buylink_white",1,{y:280,opacity:0},{y:0,opacity:1},"-=1");

} else if (which_port == 'pad') {
  _duration = 400;
  _offset = 1400;
  _duration1 = 800;
  _offset1 = 0;
  canvas.width = 800;
  canvas.height = 800;
  //文字出现,闪灯,提示
  var os_ani = new TimelineMax()
    .fromTo(".s9_os_textbox .subtitle_white", 1, { y: 30, opacity: 0 }, { y: 0, opacity: 1 })
    .fromTo(".s9_os_textbox .title_white", 1, { y: 90, opacity: 0 }, { y: 0, opacity: 1 }, "-=1")
    .fromTo(".s9_os_textbox .content_white", 1, { y: 150, opacity: 0 }, { y: 0, opacity: 1 }, "-=1")
    .fromTo(".s9_os_textbox .buylink_white",1,{y:210,opacity:0},{y:0,opacity:1},"-=1");

}
else {
  _duration = 1600;
  _offset = 1100;
  _duration1 = 800;
  _offset1 = 0;
  canvas.width = 800;
  canvas.height = 800;
  //文字出现,闪灯,提示
  var os_ani = new TimelineMax()
    .fromTo(".s9_os_textbox .subtitle_white", 1, { y: 40, opacity: 0 }, { y: 0, opacity: 1 })
    .fromTo(".s9_os_textbox .title_white", 1, { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, "-=1")
    .fromTo(".s9_os_textbox .content_white", 1, { y: 160, opacity: 0 }, { y: 0, opacity: 1 }, "-=1")
    .fromTo(".s9_os_textbox .buylink_white",1,{y:220,opacity:0},{y:0,opacity:1},"-=1");

}

export const os = new ScrollMagic.Scene({
  triggerElement: ".s9_os",
  duration: _duration,
  offset: _offset,
  reverse: true,
})
  // .addIndicators({
  //   name: 'os_text'
  // })
  .setTween(os_ani);

var os_cv_ani = new TimelineMax()
  .to("", 1, {})

export const os_cv = new ScrollMagic.Scene({
  //触发元素
  triggerElement: ".s9_os",
  triggerHook: "onLeave",
  offset: _offset1,
  duration: _duration1,
})
//   .addIndicators({
//     name:'os_xulie'
//   })
  .setPin(".s9_os")
  .setTween(os_cv_ani)
  .on("progress", (e) => {
    // ctx.clearRect(0,0,1000,500);
    var img = new Image();
    //指定图片的URL
    img.src = IMAGE_HOST + '/' + `images/os_logo/logo${Math.floor(e.progress * 174)}.png`;
    // img.src = `../../../media/iphone_se/iphone-se.${Math.floor(e.progress * 85)}.png`;
    //浏览器加载图片完毕后再绘制图片
    img.onload = function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

  })





