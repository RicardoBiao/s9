import { whitchPost } from '../../plugins/utils';
var which_port = whitchPost();
var _duration;
var _offset;

if(which_port=='phone'){

    _duration = 200;
    _offset = -300;
    //文字出现,闪灯,提示
    var mix_ani = new TimelineMax()
    .fromTo(".s9_mix_textbox .mid_title_white",2,{y:30,opacity:0},{y:0,opacity:1})
    .fromTo(".s9_mix_textbox .mid_content_white",2,{y:70,opacity:0},{y:0,opacity:1},"-=2")
    .from(".s9_mix_phone",2,{y:70,opacity:1},"-=2");

}else{

    _duration = 300;
    _offset = -90;
    //文字出现,闪灯,提示
    var mix_ani = new TimelineMax()
    .fromTo(".s9_mix_textbox .mid_title_white",2,{y:30,opacity:0},{y:0,opacity:1})
    .fromTo(".s9_mix_textbox .mid_content_white",2,{y:55,opacity:0},{y:0,opacity:1},"-=2");
}

export const mix = new ScrollMagic.Scene({
    triggerElement: ".s9_mix",
    duration: _duration,
    offset: _offset,
    reverse: true,
})
.setTween(mix_ani)
// .addIndicators({
//     name: 'mix'
// })