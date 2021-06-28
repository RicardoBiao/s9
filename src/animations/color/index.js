import { whitchPost } from '../../plugins/utils';

var which_port = whitchPost();
var controller = new ScrollMagic.Controller({addIndicators: true});
var _duration;
var _offset;
var _duration1;
var _offset1;
var _duration2;
var _offset2;
var _offset3;
var _setPin;
var color_height = $(window).height();

function offset_test(v) {
    $("body").append('<div style="width:100vw;height:1px;background-color:#000;position: absolute;top:'+v+'px;z-index:999"></div>');
}

if (which_port == 'phone') {

    $('.s9_color1_content').html("缎面AG工艺打造，轻转时微透光泽<br>如同晨曦透暖光")
    $('.s9_color2_content').html("深海微晶AG工艺打造，手感更舒适<br>尽显夜色高级质感")
    $('.s9_color3_content').html("全息光透AG工艺结合十色渐变<br>打造绚烂的朝夕景象")

    _duration = 2500;
    _offset = $(".s9_color_s").offset().top-$(".s9_color").offset().top+ $(".s9_color_s").height()/2;//-$(".topNavBox").height();
    _setPin = ".s9_color";
    
    //offset_test($(".s9_color_s").offset().top+ $(".s9_color_s").height()/2-$(".topNavBox").height());//显示触发线

    //三种颜色手机切换
    var colorani = new TimelineMax()
        .to(".s9_color_img1", 0, { opacity: 1 })
        .fromTo([".s9_color1_title", ".s9_color1_content"], 1, { opacity: 0 }, { opacity: 1 })
        .to([".s9_color1_title", ".s9_color1_content"], 0.5, { opacity: 0 }, "+=1")
        .fromTo([".s9_color2_title", ".s9_color2_content"], 1, { opacity: 0 }, { opacity: 1, y: 0 })
        .to(".s9_color_img2", 0.3, { opacity: 1 }, "-=1")
        .to([".s9_color2_title", ".s9_color2_content"], 0.5, { opacity: 0 }, "+=1")
        .fromTo([".s9_color3_title", ".s9_color3_content"], 1, { opacity: 0 }, { opacity: 1 })
        .to(".s9_color_img3", 0.3, { opacity: 1 }, "-=1")
        .to([".s9_color3_title", ".s9_color3_content"], 0.5, { opacity: 0 })
        .to(".s9_color_img4", 0, { opacity: 1 })
        .to(".s9_color_img5", 0, { opacity: 1 })
        .to([".s9_color_img1", ".s9_color_img2", ".s9_color_img3"], 0, { opacity: 0 })
        .to(".s9_color_img4", 1, { x: 45 })
        .to([".s9_color_s_main", ".s9_color_s_box"], 1.5, { opacity: 1 })
        .fromTo([".s9_color_left_text", ".s9_color_right_text"], 1, { opacity: 0, y: 60 }, { opacity: 1, y: 0 }, '-=1.5');

} else if(which_port ==  'superPc') {
    _duration = 3500;
    _offset = color_height / 2 + color_height * 0.05;
    _setPin = ".s9_color";

    //三种颜色手机切换
    var colorani = new TimelineMax()
        .to(".s9_color_img1", 0, { opacity: 1 })
        .fromTo([".s9_color1_title", ".s9_color1_content"], 1, { opacity: 0, y: 20 }, { opacity: 1, y: 0 })
        .to([".s9_color1_title", ".s9_color1_content"], 0.5, { opacity: 0, y: -20 })
        .fromTo([".s9_color2_title", ".s9_color2_content"], 1, { opacity: 0, y: 20 }, { opacity: 1, y: 0 })
        .to(".s9_color_img2", 0.2, { opacity: 1 }, "-=1")
        .to([".s9_color2_title", ".s9_color2_content"], 0.5, { opacity: 0, y: -20 })
        .fromTo([".s9_color3_title", ".s9_color3_content"], 1, { opacity: 0, y: 20 }, { opacity: 1, y: 0 })
        .to(".s9_color_img3", 0.2, { opacity: 1 }, "-=1")
        .to([".s9_color3_title", ".s9_color3_content"], 0.5, { opacity: 0, y: -50 })
        .to(".s9_color_img4", 0, { opacity: 1 })
        .to(".s9_color_img5", 0, { opacity: 1 })
        .to([".s9_color_img1", ".s9_color_img2", ".s9_color_img3"], 0.5, { opacity: 0 })
        .to(".s9_color_img4",1,{x:-250})
        .to([".s9_color_s_main", ".s9_color_s_box"], 1.5, { opacity: 1 })
        .fromTo([".s9_color_left_text", ".s9_color_right_text"], 1, { opacity: 0, y: 60 }, { opacity: 1, y: 0 }, '-=1.5');

    var colorPhone1 = new TimelineMax()
        // .fromTo(".s9_color_img2", 0.4, { opacity: 0 }, { opacity: 1 }, "-=1");
    _offset1 = color_height / 2 + color_height * 0.05 + 700;
    _duration1 = 0;

    var colorPhone2 = new TimelineMax()
        // .fromTo(".s9_color_img3", 0.4, { opacity: 0 }, { opacity: 1 }, "-=1");
    _offset2 = color_height / 2 + color_height * 0.05 + 1400;
    _duration2 = 0;

}else if(which_port ==  'pad') {

    var _color_height = $('.s9_color').height();
    $('.s9_color').attr('height',color_height-60+'px');

    _duration = 3500;
    _offset = (_color_height-60) / 2;
    _setPin = ".s9_color";

    //三种颜色手机切换
    var colorani = new TimelineMax()
        .to(".s9_color_img1", 0, { opacity: 1 })
        .fromTo([".s9_color1_title", ".s9_color1_content"], 1, { opacity: 0, y: 20 }, { opacity: 1, y: 0 })
        .to([".s9_color1_title", ".s9_color1_content"], 0.5, { opacity: 0, y: -20 })
        .fromTo([".s9_color2_title", ".s9_color2_content"], 1, { opacity: 0, y: 20 }, { opacity: 1, y: 0 })
        .to(".s9_color_img2", 0.2, { opacity: 1 }, "-=1")
        .to([".s9_color2_title", ".s9_color2_content"], 0.5, { opacity: 0, y: -20 })
        .fromTo([".s9_color3_title", ".s9_color3_content"], 1, { opacity: 0, y: 20 }, { opacity: 1, y: 0 })
        .to(".s9_color_img3", 0.2, { opacity: 1 }, "-=1")
        .to([".s9_color3_title", ".s9_color3_content"], 0.5, { opacity: 0, y: -50 })
        .to(".s9_color_img4", 0, { opacity: 1 })
        .to(".s9_color_img5", 0, { opacity: 1 })
        .to([".s9_color_img1", ".s9_color_img2", ".s9_color_img3"], 0, { opacity: 0 })
        .to(".s9_color_img4", 1, { x: 50 })
        .to([".s9_color_s_main", ".s9_color_s_box"], 1.5, { opacity: 1 })
        .fromTo([".s9_color_left_text", ".s9_color_right_text"], 1, { opacity: 0, y: 60 }, { opacity: 1, y: 0 }, '-=1.5');

    var colorPhone1 = new TimelineMax()
        // .to(".s9_color_img2", 0.4, { opacity: 1 }, "-=1");
    _offset1 = color_height / 2 + color_height * 0.05 + 700;
    _duration1 = 0;

    var colorPhone2 = new TimelineMax()
        // .to(".s9_color_img3", 0.4, { opacity: 1 }, "-=1")
    _offset2 = color_height / 2 + color_height * 0.05 + 1400;
    _duration2 = 0;

    var colorPhone3 = new TimelineMax()
    //     .to([".s9_color_img1", ".s9_color_img2", ".s9_color_img3"], 0, { opacity: 0 },)
    // _offset3 = color_height / 2 + color_height * 0.05 + 2100;

} else {

    _duration = 3500;
    _offset = color_height / 2 + color_height * 0.05;
    _setPin = ".s9_color";

    //三种颜色手机切换
    var colorani = new TimelineMax()
        .to(".s9_color_img1", 0, { opacity: 1 })
        .fromTo([".s9_color1_title", ".s9_color1_content"], 1, { opacity: 0, y: 20 }, { opacity: 1, y: 0 })
        .to([".s9_color1_title", ".s9_color1_content"], 0.5, { opacity: 0, y: -20 })
        .fromTo([".s9_color2_title", ".s9_color2_content"], 1, { opacity: 0, y: 20 }, { opacity: 1, y: 0 })
        .to(".s9_color_img2", 0.2, { opacity: 1 }, "-=1")
        .to([".s9_color2_title", ".s9_color2_content"], 0.5, { opacity: 0, y: -20 })
        .fromTo([".s9_color3_title", ".s9_color3_content"], 1, { opacity: 0, y: 20 }, { opacity: 1, y: 0 })
        .to(".s9_color_img3", 0.2, { opacity: 1 }, "-=1")
        .to([".s9_color3_title", ".s9_color3_content"], 0.5, { opacity: 0, y: -50 })
        .to(".s9_color_img4", 0, { opacity: 1 })
        .to(".s9_color_img5", 0, { opacity: 1 })
        .to([".s9_color_img1", ".s9_color_img2", ".s9_color_img3"], 0, { opacity: 0 })
        .to(".s9_color_img4", 1, { x: 50 })
        .to([".s9_color_s_main", ".s9_color_s_box"], 1.5, { opacity: 1 })
        .fromTo([".s9_color_left_text", ".s9_color_right_text"], 1, { opacity: 0, y: 60 }, { opacity: 1, y: 0 }, '-=1.5');

    var colorPhone1 = new TimelineMax()
        // .to(".s9_color_img2", 0.4, { opacity: 1 }, "-=1");
    _offset1 = color_height / 2 + color_height * 0.05 + 700;
    _duration1 = 0;

    var colorPhone2 = new TimelineMax()
        // .to(".s9_color_img3", 0.4, { opacity: 1 }, "-=1")
    _offset2 = color_height / 2 + color_height * 0.05 + 1400;
    _duration2 = 0;

    var colorPhone3 = new TimelineMax()
    //     .to([".s9_color_img1", ".s9_color_img2", ".s9_color_img3"], 0, { opacity: 0 },)
    // _offset3 = color_height / 2 + color_height * 0.05 + 2100;

}



export const color = new ScrollMagic.Scene({
    triggerElement: ".s9_color",
    duration: _duration,
    offset: _offset,
    reverse: true,
})
    //.addIndicators()
    .setTween(colorani)
    .setPin(_setPin)
    .addTo(controller); 

export const color1 = new ScrollMagic.Scene({
    triggerElement: ".s9_color",
    duration: _duration1,
    offset: _offset1,
    reverse: true,
})
    .setTween(colorPhone1)
    .addTo(controller); 

export const color2 = new ScrollMagic.Scene({
    triggerElement: ".s9_color",
    duration: _duration2,
    offset: _offset2,
    reverse: true,
})
    // .addIndicators()
    .setTween(colorPhone2)
    .addTo(controller); 

export const color3 = new ScrollMagic.Scene({
    triggerElement: ".s9_color",
    duration: 0,
    offset: _offset3,
    reverse: true,
})
    // .addIndicators()
    .setTween(colorPhone3)
    .addTo(controller); 