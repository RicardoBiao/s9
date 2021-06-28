import { whitchPost } from '../../plugins/utils';
var which_port = whitchPost();
var controller = new ScrollMagic.Controller();
var show_ani;
var show1_ani;
var _duration;
var _duration1;
var _offset;
var _offset1;
var _trigger;
var _trigger1;
var _show_lg_height = $(".s9_show").height();
var _show3_lg_height = $(".s9_show3").height();
var _show_md_height = $(".s9_show_md").height();

if(which_port=='phone'){

    var show_ani = new TimelineMax()
    .to(".s9_show1_md",5,{y:-50})
    .fromTo(".s9_show2_md",5,{y:50},{y:0},"-=3");
    _trigger = ".s9_show_md";
    _duration = _show_md_height/2.3;
    _offset = -100;

    var show1_ani = new TimelineMax()
    .fromTo(".s9_show3_md",5,{y:15},{y:-25});
    _trigger1 = ".s9_show_md";
    _duration1 = _show_md_height/2;
    _offset1 = _show_md_height/4;

}else if(which_port=='pad'){

    var show_ani = new TimelineMax()
    .fromTo(".s9_show1",50,{y:30},{y:-30})
    .fromTo(".s9_show2", 50, { y: 0 }, { y: -40 },"-=50");
    _trigger = ".s9_show";
    _duration = _show_lg_height/3;
    _offset = 0;
     
    var show1_ani = new TimelineMax()
    .fromTo(".s9_show3",50,{y:70},{y:-30});
    _trigger1 = ".s9_show";
    _duration1 = _show_lg_height/1.7;
    _offset1 = _show_lg_height/2-_show3_lg_height/1.3;

}else{

    var show_ani = new TimelineMax()
    .fromTo(".s9_show1",50,{y:60},{y:-30})
    .fromTo(".s9_show2", 50, { y: 0 }, { y: -90 },"-=50");
    _trigger = ".s9_show";
    _duration = _show_lg_height/2.5;
    _offset = 0;
     
    var show1_ani = new TimelineMax()
    .fromTo(".s9_show3",50,{y:70},{y:-30});
    _trigger1 = ".s9_show";
    _duration1 = _show_lg_height/1.7;
    _offset1 = _show_lg_height/2-_show3_lg_height/1.3;

}

export const show = new ScrollMagic.Scene({
    triggerElement: _trigger,
    duration: _duration,
    offset: _offset,
    reverse: true,
})
// .addIndicators({
//     name:'show'
// })
.setTween(show_ani);

export const show1 = new ScrollMagic.Scene({
    triggerElement: _trigger1,
    duration: _duration1,
    offset: _offset1,
    reverse: true,
})
// .addIndicators({
//     name:'show1'
// })
.setTween(show1_ani);