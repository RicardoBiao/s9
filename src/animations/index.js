// import { firstWinter, firstWinterSetPin } from "./firstWinter/index";

// 嗨show
import { look_phone_move,look_phone,look_background } from "./look/index"; 
// look
import { show,show1 } from "./show/index"; 
// feel
import { feel,feel1 } from "./feel/index"; 
// color
import { color, color1, color2 } from "./color/index"; 
// camera
import { camera,camera1 } from "./camera/index"; 
// iso cell 超清4400万前置1+ISOCELL 2.0技术
import { isocell,isocell1 } from "./isocell/index"; 
// softlight 极夜柔光自拍
import { softlight,softlight1,softlight2 } from "./softlight/index"; 
// shadow 光光光光是光影
import { shadow, shadow1, videoSet,shadow_cv,shadow2,shadow_big} from "./shadow/index"; 
// wide 前置105°超广角人像
import { wide,wide1 } from "./wide/index"; 
// fashion 潮玩美拍
import { fashion, fashion0, fashion1, fashion2 } from "./fashion/index"; 
// yeah
import { yeah } from "./yeah/index"; 
// bigworld 大千世界，大拍特拍
import { bigworld } from "./bigworld/index"; 
// night 黑光夜视
import { night,night1 } from "./night/index"; 
// vlog 生活微电影，自拍自演
import { vlog,vlog0,vlog1,vlog_stop } from "./vlog/index"; 
// yo 呦,性能很强嘛!
import { yo } from "./yo/index"; 
// 6nm 这颗强芯脏,666
import { sixnm,sixnm1,sixnm2 } from "./sixnm/index"; 
// game 竞技场上，你来带节奏
import { game,game1 } from "./game/index"; 
// memory 超大运内存
import { memory,memory1 } from "./memory/index"; 
// wa 哇,生活好轻松
import { wa } from "./wa/index"; 
// tuv 
import { tuv } from "./tuv/index"; 
// OS 新世界，为你敞开
import { os,os_cv } from "./os/index"; 
// mix
import { mix } from "./mix/index"; 
// wallpaper
import { wallpaper,wallpaper1,wallpaper_video } from "./wallpaper/index"; 


export const animations = {
    look_phone_move,
    look_phone,
    look_background,
    show,
    show1,
    feel,
    feel1,
    color,
    color1,
    color2,
    camera,
    camera1,
    isocell,
    isocell1,
    softlight,
    softlight1,
    softlight2,
    shadow,
    shadow1,
    shadow_cv,
    shadow2,
    shadow_big,
    videoSet,
    wide,
    wide1,
    fashion,
    fashion0,
    fashion1,
    fashion2,
    yeah,
    bigworld,
    night,
    night1,
    vlog,
    vlog0,
    vlog1,
    vlog_stop,
    yo,
    sixnm,
    sixnm1,
    sixnm2,
    game,
    game1,
    memory,
    memory1,
    wa,
    tuv,
    os,
    os_cv,
    mix,
    wallpaper_video,
    wallpaper,
    wallpaper1
};

/* var dr = -10;
var moveWheel1 = true;
    var moveWheel2 = false;
    var wheelClock;
    function stopWheel(){
        if(moveWheel2 == true){
            console.log("滚轮停止了");
            moveWheel2 = false;
            moveWheel1 = true;
            //这里写停止时调用的方法
            TweenMax.to("body", 1, {y:dr});
            dr= dr - 10
        }
    }
    function moveWheel(){
        if(moveWheel1==true){
            console.log("滚动了");
            moveWheel1 = false;
            moveWheel2 = true;
           //这里写开始滚动时调用的方法
            wheelClock = setTimeout(stopWheel,200);
        }
        else {
            clearTimeout(wheelClock);
            wheelClock = setTimeout(stopWheel,150);
        }
    }
document.addEventListener('wheel', moveWheel, false); */


