import { whitchPost } from '../../plugins/utils';
var which_port = whitchPost();
var controller = new ScrollMagic.Controller();
var feelani;
var feelani1;
var _offset;
var _offset1;

if(which_port=='phone'){

    //文字出现,手从右边出现
    var feelani = new TimelineMax()
    .fromTo(".s9_fell_text_box .subtitle",1,{y:30,opacity:0},{y:0,opacity:1})
    .fromTo(".s9_fell_text_box .title",1,{y:60,opacity:0},{y:0,opacity:1},"-=1")
    .fromTo(".s9_fell_text_box .content",1,{y:90,opacity:0},{y:0,opacity:1},"-=1")
    .fromTo(".s9_fell_text_box .buylink",1,{y:120,opacity:0},{y:0,opacity:1},"-=1");
    //.from(".feel_hand_img",3,{y:120},"-=3");
    _offset = -300;

    var feelani1 = new TimelineMax()
    .to(".feel_hand_img",1.5,{y:-135,backgroundPosition:"-15px 0",ease:Power1.easeInOut,
    onComplete:function(){
        // console.log('动画结束')
    }

})
    
    _offset1 = 240;

}else{

    //文字出现,手从右边出现
    var feelani = new TimelineMax()
    .fromTo(".s9_fell_text_box .subtitle",1,{y:30,opacity:0},{y:0,opacity:1})
    .fromTo(".s9_fell_text_box .title",1,{y:60,opacity:0},{y:0,opacity:1},"-=1")
    .fromTo(".s9_fell_text_box .content",1,{y:90,opacity:0},{y:0,opacity:1},"-=1")
    .fromTo(".s9_fell_text_box .buylink",1,{y:120,opacity:0},{y:0,opacity:1},"-=1");
    _offset = -250;

    var feelani1 = new TimelineMax()
    .to(".feel_hand_img",1,{backgroundPosition:"1px 0",ease:Power1.easeInOut});
    _offset1 = 100;

}

export const feel = new ScrollMagic.Scene({
    triggerElement: ".s9_feel",
    duration: 700,
    offset: _offset,
    reverse: true,
})
.setTween(feelani)
.addTo(controller);;

export const feel1 = new ScrollMagic.Scene({
    triggerElement: ".s9_feel",
    duration: 0,
    offset: _offset1,
    reverse: true,
})
.setTween(feelani1)
.addTo(controller);;