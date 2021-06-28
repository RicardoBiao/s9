import {
    whitchPost,
    isIE
} from './plugins/utils';
// 什么端口
var which_port = whitchPost();
// 引入场景
import {
    animations
} from "./animations/index";


// 懒加载插件
import "./plugins/echo.simple";
Echo.init({
    offset: $(window).height(),
});
// 引入样式
import "./scss/index.scss";

// 防止第一次刷新导致onrsize触发
var is_resize = false;

function debounce(func, wait) {
    let timeout;
    return function () {
        let context = this;
        let args = arguments;

        if (timeout) clearTimeout(timeout);

        timeout = setTimeout(() => {
            func.apply(context, args)
        }, wait);
    }
}

// 尺寸改变
if (which_port != 'phone') { //移动端解封
    $(window).on('resize', debounce(function () {
        // 第一次刷新禁止
        if (is_resize) {
            history.go(0);
        }
        is_resize = true;

    }, 300))
}



// 预加载图片
import imagesname from '../imagesname.json';
window.onload = function () {

    //取得浏览器的userAgent字符串
    var userAgent = navigator.userAgent;
    //判断是否IE浏览器
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
    if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if (fIEVersion < 10 || !isSupportPlaceholder()) {
            var iframe = document.createElement('iframe');
            iframe.setAttribute('src', "//www.vivo.com/update_browser")
            console.log(iframe.style);
            iframe.style.width = '100%'
            iframe.style.height = '150vh'
            iframe.style.display = "block";
            iframe.scrolling = 'no'
            document.querySelector('.J_replace_content').innerHTML = ''
            document.querySelector('.J_replace_content').appendChild(iframe);
        }
    }

    // 所有图片文件的文件名字
    var all_pic = imagesname
    // console.log(all_pic)
    // console.log('all_pic==>', all_pic)
    // host
    // var host = 'http://localhost:8888/images/';
    var host = '../images/'

    // 筛选每个端需要的图片
    var need_pic = [];
    var port2type = {
        0: '-md',
        1: '-lg',
        2: '-xl',
    };

    var port = null;
    if (which_port == 'phone') {
        port = 0;
    } else if (which_port == 'superPc') {
        port = 2;
    } else {
        port = 1;
    }


    all_pic.forEach(function (ele) {

        if (ele.image_name.indexOf(port2type[port]) > 0) {
            need_pic.push(ele.image_name);
        }

    })

    // 加上完整链接
    need_pic.forEach(function (ele, index) {
        need_pic[index] = host + ele;
    })



    // 全局控制器
    var controller = new ScrollMagic.Controller();

    var mouseDelta = {
        delta: -1,
    };
    // jq鼠标判断滚动方向插件
    $("html").mousewheel(function (event, delta) {
        mouseDelta.delta = delta;
    });


    // 加入控制器
    for (let key in animations) {
        animations[key].addTo(controller);
    }




}