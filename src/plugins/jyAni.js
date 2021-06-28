/*
    兼容ie
    思路:将sticky方法改为fixed方法
*/
;
(function () {
  ("use strict");
  var _global;

  function JyMagic(obj) {
    /*
         sel:'选择器',
         is_sticky:true,
        */
    // this.nodes = document.querySelectorAll(obj.sel);

    // 父节点 ，用于控制整个动画进程
    this.fatherNode = document.querySelector(obj.father_pin);
    // 展示用节点，一般高度100vh
    this.mainNode = document.querySelector(obj.inner_contnet);
    this.is_ie = false;

    // 是否setPin 是否固定
    this.is_sticky = obj.is_sticky ? obj.is_sticky : true;

    // this.bindNodes = []; //需要绑定生成的父级数组
    this.progress = 0; //当前实例的进度
    this.progressEev = []; //进度事件数组
    this.startEev = []; //开始事件
    this.endEve = []; //结束事件
    this.direction = null; //当前滚轮滚动方向 -1下 1上
    this.scrollDetail = null; //当前滚动的具体信息
    this._tween = null; // 传入的tween插件
  }
  // get
  JyMagic.prototype.getProgress = function () {
    return this.progress;
  };

  // set
  JyMagic.prototype.setProgress = function (newValue) {
    var _this = this;
    this.progress = newValue;
    // 触发更新进度事件
    this.progressEev.forEach(function (v) {
      _this.updateProgress(v);
    });
    return this;
  };

  JyMagic.prototype.init = function (obj) {
    if (obj) {
      this.is_fallow = obj.fallow || false;
    }
    // 添加父节点
    this.initSet().jyMousewheel();

    return this;
  };

  // 绑定滚轮事件监听
  JyMagic.prototype.jyMousewheel = function () {
    var _this = this;
    $(document).bind("mousewheel", function (e, direction) {
      _this.scrollDetail = e;
      _this.direction = direction;
    });

    return this;
  };

  // 初始化设置
  JyMagic.prototype.initSet = function (obj) {
    var _this = this;

    if (this.is_fallow) {
      $(this.fatherNode).css({
        marginBottom: "-100vh",
      });
    }

    this.is_ie = this.isIe();
    // 测试用
    // this.is_ie = true;
    // console.log('is_ie==>', this.is_ie);
    if (this.is_ie && this.is_sticky) {
      //ie：sticky 不生效
      // 当开始的时候，设置fixed
      var now_father = $(_this.mainNode).parent();
      // console.log('now_father==>', now_father);
      var height = now_father.height();
      // console.log(
      //   "now_father.hasClass('is_new_father')==>",
      //   now_father.hasClass("is_new_father")
      // );
      if (!now_father.hasClass("is_new_father")) {
        // console.log("aaa");
        $(_this.mainNode).wrap(
          '<div class="is_new_father" style="width:100%;position:relative;height: ' +
            height +
            'px"></div>'
        );
      }
      _this.on("start", function (e) {
        // console.log("e==>", e.direction);
        if (e.direction < 0) {
          // console.log('触发分支1')
          $(_this.mainNode).css({
            position: "fixed",
            top: 0,
            bottom: "auto",
          });
        } else if (e.direction > 0) {
          // console.log('触发分支2')
          $(_this.mainNode).css({
            position: "absolute",
            top: 0,
            bottom: "auto",
          });
        }
      });
      //结束的时候，设置absolute
      _this.on("end", function (e) {
        // console.log('触发分支3')
        // console.log("e==>", e.direction);
        if (e.direction < 0) {
          $(_this.mainNode).css({
            position: "absolute",
            top: "auto",
            bottom: 0,
          });
        } else if (e.direction > 0) {
          // console.log('触发分支4')
          $(_this.mainNode).css({
            position: "fixed",
            top: 0,
            bottom: "auto",
          });
        }
      });
    }
    return this;
  };

  // 绑定滚动事件
  /*
        offset 提前触发偏移量
    */
  JyMagic.prototype.bindScroll = function (offset) {
    // 保留this指向
    var _this = this;
    var is_start = false; //是否开始
    var is_end = false; //是否结束

    function setIsEnd(newValue, oldValue) {
      if (oldValue != newValue) {
        is_end = newValue;
        return true;
      }
      return false;
    }

    function setIsStart(newValue, oldValue) {
      if (oldValue != newValue) {
        is_start = newValue;
        return true;
      }
      return false;
    }
    // 父级绑定事件
    var offset = offset ? Number(offset) : 0; //向上偏移
    var ele_offset_top = $(this.fatherNode).offset().top + offset; //需要减掉距离
    var ele_hight = $(this.fatherNode).height() - offset;
    function scrollEve() {
      // 获取scrolled 为 0-1
      /*
                document.documentElement.scrollTop 页面滚动距离
                ele_offset_top: 生成的元素距离页面顶部距离
                ele_hight：生成的元素高度
            */
      var scrolled =
        (document.documentElement.scrollTop - ele_offset_top) /
        (ele_hight - document.documentElement.clientHeight);
      // 这里是整个事件的过程
      // scrolled = scrolled < 0 ? 0 : (scrolled > 1 ? 1 : scrolled);

      // is_start = scrolled === 0 ? true : false;
      // is_end = scrolled === 1 ? true : false;
      // console.log('scrolled==>', scrolled)
      if (scrolled > -0.0001) {
        var success = setIsStart(true, is_start);
        // console.log('success==>', success)
        if (success) {
          _this.startEev.forEach(function (env) {
            env({
              progress: 0,
              detail: _this.scrollDetail,
              direction: _this.direction || -1,
            });
          });
        }
      } else {
        scrolled = 0;
        var success = setIsStart(false, is_start);
        if (success) {
          _this.setProgress(scrolled);
          _this.startEev.forEach(function (env) {
            env({
              progress: 0,
              detail: _this.scrollDetail,
              direction: _this.direction || 1,
            });
          });
        }
      }

      if (scrolled > 1.0001) {
        scrolled = 1;
        // _this.setProgress(1);
        // is_end = true;
        var success = setIsEnd(true, is_end);
        // console.log("success==>", success);
        // console.log("endEve==>", _this.endEve);
        if (success) {
          _this.setProgress(scrolled);

          _this.endEve.forEach(function (env) {
            env({
              progress: 1,
              detail: _this.scrollDetail,
              direction: _this.direction || -1,
            });
          });
        }
      } else {
        // is_end = false;
        var success = setIsEnd(false, is_end);
        if (success) {
          _this.endEve.forEach(function (env) {
            env({
              progress: 1,
              detail: _this.scrollDetail,
              direction: _this.direction || 1,
            });
          });
        }
      }

      if (is_start && !is_end) {
        // console.log('scrolled==>', scrolled)
        _this.setProgress(scrolled);
      }
    }

    // 先调用一次，防刷新
    scrollEve();

    _this.addListener("scroll", scrollEve);
  };

  JyMagic.prototype.removeTween = function () {
    if (_this._tween) {
      _this._tween.kill();
      _this._tween = null;
    }

    return this;
  };

  JyMagic.prototype.setTween = function (setTween) {
    var _this = this;
    var newTween = setTween;
    setTween.kill();
    if (_this._tween) {
      _this.removeTween();
    }
    _this._tween = newTween;
    // 更新Tween
    _this.updateTween();
    return this;
  };

  JyMagic.prototype.updateTween = function () {
    var _this = this;

    _this.on("start", function (e) {
      // console.log("do==>", e);
      _this._tween.progress(e.progress).pause();
    });

    _this.on("progress", function (e) {
      _this._tween.progress(e.progress).pause();
    });
  };

  /* 钩子函数 */
  JyMagic.prototype.on = function (type, fn) {
    var _this = this;
    /*
            type:类型
            fn:函数
        */
    if (type === "progress") {
      _this.progressEev.push(fn);
    } else if (type === "start") {
      _this.startEev.push(fn);
    } else if (type === "end") {
      _this.endEve.push(fn);
    }

    return this;
  };

  JyMagic.prototype.updateProgress = function (fn) {
    var _this = this;
    // console.log('进度更新', progress);
    if (fn) {
      fn({
        progress: _this.getProgress(),
        datail: _this.scrollDetail,
      });
    }
  };

  // 根据距离触发事件
  /*
        offset：提前触发偏移距离
    */
  JyMagic.prototype.toggleClass = function (offset, className , fn) {
    var _this = this;
    // document.documentElement.scrollTop 页面滚动距离
    // ele_offset_top: 生成的元素距离页面顶部距离
    // ele_hight：生成的元素高度
    // 父级绑定事件
    var ele_offset_top = $(this.fatherNode).offset().top;
    var is_target = false;

    var scroll_eve = function () {
      if (
        document.documentElement.scrollTop >
        ele_offset_top + Number(offset)
      ) {
        if (!is_target) {
          $(_this.mainNode).addClass(className);
          fn ? fn() : '';
          is_target = true;
        }
      } else {
          $(_this.mainNode).removeClass(className);
          is_target = false;
      }
    };
    scroll_eve();

    _this.addListener("scroll", scroll_eve);

    return this;
  };

  //加入关键帧
  /*
    el:必传参数 canvasId,
    total:多少个关键帧,
  */
  JyMagic.prototype.addKeyFrame = function (obj) {
    var el = document.querySelector(obj.el);
    var loadingClass = obj.loadingClass;
    var readyClass = obj.readyClass;
    var _this = this;
    // data绑定的url
    var baseUrl = el.getAttribute("data-sourceurl");
    // data绑定的开始时间
    var start = Number(el.getAttribute("data-start"));
    // data绑定的结束时间
    var end = Number(el.getAttribute("data-end"));
    var width = el.width;
    var height = el.height;
    var loader = new PxLoader();
    var images = [];
    // console.log(baseUrl);
    for (var i = 0; i < obj.total; i++) {
      var url = baseUrl + ("0" + (i + 1)).slice(-2) + ".png";
      images[i] = loader.addImage(url);
    }
    var jumpObj = _this.isInThisSection();

    $(_this.fatherNode).addClass(loadingClass);
    if (jumpObj.is_here){
       $("html,body").animate({ scrollTop: jumpObj.offset}, 200);
    }
    

      loader.addCompletionListener(function () {
        let context = el.getContext("2d");
        //   context.drawImage(images[0], 0, 0, width, height);
        _this.changeKeyFrame(el, context, images, 0, width, height);
        $(_this.fatherNode).removeClass(loadingClass).addClass(readyClass);
        //开始绑定事件
        _this.on("progress", function (e) {
          if (e.progress - start < 0) {
            _this.changeKeyFrame(el, context, images, 0, width, height);
          } else if (e.progress > end) {
            _this.changeKeyFrame(
              el,
              context,
              images,
              obj.total - 1,
              width,
              height
            );
          } else {
            var prog = (e.progress - start) / (end - start);
            var index = Math.ceil(prog * (obj.total - 1));

            _this.changeKeyFrame(el, context, images, index, width, height);
          }
        });
      });
    loader.start();

    return this;
  };

  JyMagic.prototype.changeKeyFrame = function (
    elEle,
    context,
    images,
    index,
    width,
    height
  ) {
    var element_index = elEle.getAttribute("data-index");

    if (Number(element_index) === index && element_index !== null) {
      return;
    }

    elEle.setAttribute("data-index", index);

    context.drawImage(images[index], 0, 0, width, height);

    return this;
  };

  //判断是否在这个元素的区间
  JyMagic.prototype.isInThisSection = function(){
    // 先获取整个页面的滚动高度
    var scrollTop = $(window).scrollTop();
    var fatherNodeOffset = $(this.fatherNode).offset().top;
    var fatherH = $(this.fatherNode).height();

    if((scrollTop >= fatherNodeOffset) && (scrollTop <= (fatherH + fatherNodeOffset))){
      return {
        is_here: true,
        offset: fatherNodeOffset,
      };
    }

    return {
      is_here: false,
      offset: fatherNodeOffset,
    };

  };

  /*================下面是工具方法==============*/
  // 兼容性绑定事件
  JyMagic.prototype.addListener = function (ev, fn) {
    if (document.attachEvent) {
      document.attachEvent("on" + ev, fn);
    } else {
      document.addEventListener(ev, fn, false);
    }
  };

  JyMagic.prototype.isIe = function () {
    if (!!window.ActiveXObject || "ActiveXObject" in window) {
      return true;
    } else {
      return false;
    }
  };

  // 最后将插件对象暴露给全局对象
  _global = (function () {
    return this || (0, eval)("this");
  })();
  if (typeof module !== "undefined" && module.exports) {
    module.exports = JyMagic;
  } else if (typeof define === "function" && define.amd) {
    define(function () {
      return JyMagic;
    });
  } else {
    !("JyMagic" in _global) && (_global.JyMagic = JyMagic);
  }
}());