//一个背景放大函数 target：目标位置 fn:动画执行完的会调函数
export const bgScale = function (obj) {
    var target = obj.target;
    var element = $(obj.sel);
    // console.log('element==>',element)
    var one_page = obj.size;
    var duration = obj.time || 50;
    var fn = obj.fn;

    // console.log('000==>',element.css('backgroundPosition'));
    //先拿到x坐标
    var x = parseInt(element.css('backgroundPosition').split(' ')[0]);


    //判断正负
    var flag = target - x < 0 ? true : false;
    // console.log('flag==>', flag)

    var timer = null;
    if (flag) {
        timer = setInterval(function () {
            if (x <= +target) {
                window.clearInterval(timer);
                //这里执行回调函数
                fn && fn();
                return;
            }
            x -= one_page;
            element.css({
                backgroundPositionX: x + 'px'
            }, duration)

        }, duration)
    } else {

        timer = setInterval(function () {
            if (x >= +target) {
                window.clearInterval(timer);
                //这里执行回调函数
                fn && fn();
                return;
            }
            x += one_page;
            element.css({
                backgroundPositionX: x + 'px'
            }, duration)
        }, duration)
    }
}


// 判断当前是什么端
// string pc superPc phone
export const whitchPost = function () {
    var userAgentInfo = navigator.userAgent;
    var mobileAgents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    var mobile_flag = false;
    // 是否超大pc
    var super_pc = false;
    // 是否是平板
    var isPad = false;

    //根据userAgent判断是否是手机
    for (var v = 0; v < mobileAgents.length; v++) {
        if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
            mobile_flag = true;
            break;
        }
    }
    var screen_width = window.innerWidth;
    var screen_height = window.screen.height;

    //根据屏幕分辨率判断是否是手机
    if (screen_width < 768) {
        mobile_flag = true;
    } else {
        mobile_flag = false;
    }

    super_pc = screen_width > 1920;

    if (screen_width > 768 && screen_width<1080) {
        isPad = true;
    }

    if (mobile_flag) {
        return 'phone';
    } else if (super_pc) {
        return 'superPc';
    } else if (isPad) {
        return "pad";
     }else{
        return 'pc';
    }
}


// 判断是不是ie
export const isIE = function () {
    if (!!window.ActiveXObject || "ActiveXObject" in window) {
        return true;
    } else {
        return false;
    }
}



// 点击播放视频
export const playvideo = function (target) {
    //需要点解弹窗的元素
    $(target).click(function () {
        console.log('dianjile',$('#all_show_video_src'))

        //不用动

        $('.all_video_box').addClass('show')
        $('body,html').addClass('add');
        var src = IMAGE_HOST + '/' + $(this).attr('data-src');
        $('#all_show_video_src').attr('src', src);
        setTimeout(() => {
            $('#all_show_video_src').css('display', 'block');
            $('#all_show_video_src')[0].muted = false

            $('#all_show_video_src')[0].play()
        }, 800)
        

    })


    //关闭按钮事件 不用动 
    $(".close").click(() => {
        console.log('dianjile222',$('#all_show_video_src'))

        // $('#all_show_video_src')[0].stop()
        $('#all_show_video_src')[0].muted = true
        $('#all_show_video_src').css('display', 'none')
        $('.all_video_box').removeClass('show')

        $('body,html').removeClass('add')


    })


    





}
