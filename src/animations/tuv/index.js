import { whitchPost } from '../../plugins/utils';
var which_port = whitchPost();
var _duration;
var _offset;

if(which_port=='phone'){

    _duration = 700;
    _offset = -230;

    var tuv_ani = new TimelineMax()
            .fromTo(".s9_tuv_textbox .subtitle_white",3,{y:30,opacity:0},{y:0,opacity:1})
            .fromTo(".s9_tuv_textbox .title_white",3,{y:100,opacity:0},{y:0,opacity:1},"-=3")
            .fromTo(".s9_tuv_textbox .content_white",3,{y:170,opacity:0},{y:0,opacity:1},"-=3")
            .fromTo([".s9_tuv_tuv_logo",".s9_tuv_tuv_text"],3,{y:50,opacity:0},{y:0,opacity:1},"-=2")
            .fromTo([".s9_tuv_hi_logo",".s9_tuv_hi_text"],3,{y:50,opacity:0},{y:0,opacity:1},"-=3");
    
}else if(which_port=='pad'){
    _duration = 850;
    _offset = -300;

    var tuv_ani = new TimelineMax()
            .fromTo(".s9_tuv_textbox .subtitle_white",3,{y:30,opacity:0},{y:0,opacity:1})
            .fromTo(".s9_tuv_textbox .title_white",3,{y:100,opacity:0},{y:0,opacity:1},"-=3")
            .fromTo(".s9_tuv_textbox .content_white",3,{y:170,opacity:0},{y:0,opacity:1},"-=3")
            .fromTo([".s9_tuv_tuv_logo",".s9_tuv_tuv_text"],3,{y:50,opacity:0},{y:0,opacity:1})
            .fromTo([".s9_tuv_hi_logo",".s9_tuv_hi_text"],3,{y:50,opacity:0},{y:0,opacity:1});
}
else{

    _duration = 800;
    _offset = -100;

    var tuv_ani = new TimelineMax()
            .fromTo(".s9_tuv_textbox .subtitle_white",3,{y:30,opacity:0},{y:0,opacity:1})
            .fromTo(".s9_tuv_textbox .title_white",3,{y:100,opacity:0},{y:0,opacity:1},"-=3")
            .fromTo(".s9_tuv_textbox .content_white",3,{y:170,opacity:0},{y:0,opacity:1},"-=3")
            .fromTo([".s9_tuv_tuv_logo",".s9_tuv_tuv_text"],3,{y:50,opacity:0.5},{y:0,opacity:1})
            .fromTo([".s9_tuv_hi_logo",".s9_tuv_hi_text"],3,{y:50,opacity:0.5},{y:0,opacity:1});

}

export const tuv = new ScrollMagic.Scene({
    triggerElement: ".s9_tuv",
    duration: _duration,
    offset: _offset,
    reverse: true,
})
.setTween(tuv_ani)
// .addIndicators({
//     name: 'look_phone_move'
// })