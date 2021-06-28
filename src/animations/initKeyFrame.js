// 画序列帧
import CanvasKeyFrames from 'CanvasKeyFrames';
export const initKeyFrame = function (canvasId,cb) {
    return new Promise((resolve , reject)=>{
        var $canvas = $(canvasId);
        // console.log('$canvas==>',$canvas);
        var width = $canvas.attr('data-width') || 375;
        var height = $canvas.attr('data-height') || 667;
        var baseUrl = IMAGE_HOST + '/' + $canvas.attr('data-baseUrl');
        var type = $canvas.attr('data-type') || '.jpg';
        var loop = $canvas.attr('data-loop') || 10;
        var fps = $canvas.attr('data-fps') || 24;
        // canvas总数
        var allNum = Number($canvas.attr('data-total'));
        var auto = $canvas.attr('data-auto');
        var keyFrames;
        // 等待图片加载完毕
        // console.log('$canvas的父节点',$canvas.parent());
        $canvas.parent().attr('data-status','loading');
        $canvas.attr('data-status','loading');
        // 先画第一张
        var count = 0;
    
        // 将poster画上去
        // var poster = $canvas.attr('data-poster');
        // var tempImgArr = [];
        // var tempCanvas;
        // var img = new Image();
        // img.src = poster;
        // tempImgArr.push(img);
        // img.onload = function(){
        //     tempCanvas = new CanvasKeyFrames(document.querySelector(canvasId), 'array', tempImgArr, {
        //         fps,
        //         width,
        //         height,
        //     });
        //     tempCanvas.pause();
        // }
        var imgArr = [];
        for (var i = 0; i < allNum; i++) {
            (function (i) {
                var img = new Image();
                img.onload = function () {
                    img.onload = null;
                    count++;
                    // 有可能图片加载有快有满慢，所以用角标存
                    imgArr[i] = img;
                    if (count == allNum) {
                        // initKeyFrames(imgArr);
                        // tempCanvas.destroy();
                        $canvas.parent().attr('data-status','end');
                        $canvas.attr('data-status','end');
                        keyFrames = new CanvasKeyFrames(document.querySelector(canvasId), 'array', imgArr, {
                            fps,
                            width,
                            height,
                            loop
                        });
                        if(auto){
                            keyFrames.play();
                        }else{
                            if(cb){

                                keyFrames.from(0,1,cb);

                            }else{

                                keyFrames.from(0,1);

                            }
                        }
                        //  keyFrames;
                        resolve({
                            keyFrames
                        })
                    }
                }
                img.onerror = function () {}
                img.src = baseUrl + i  + type;
            })(i);
    
        }
    })
}