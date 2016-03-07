$(function() {
    var isSwiping = false;
    var audio_count = 0;
    var isAllImgLoaded = false;
    createjs.Sound.addEventListener("fileload", handleFileLoad);
    createjs.Sound.alternateExtensions = ["mp3"];
    createjs.Sound.registerSounds(
        [
        {id:"zhuamen", src:"zhuamen.mp3"},
        {id:"fengxuebingdong", src:"fengxuebingdong.mp3"},
        {id:"kaixiangzi", src:"kaixiangzi.mp3"},
        {id:"zhuandongjiguang", src:"zhuandongjiguang.mp3"},
        {id:"button", src:"button.mp3"},
        {id:"fanye", src:"fanye.mp3"}]
    , "assets/");


    function handleFileLoad(event) {
        // A sound has been preloaded. This will fire TWICE
        console.log("Preloaded:", event.id, event.src);
        audio_count++;
        if(audio_count>=6&&isAllImgLoaded == true){
                $("#loader").hide();  
        }
        // createjs.Sound.play("zhuandongjiguang");
    }

    imagesLoaded($(".content"), function() {
        isAllImgLoaded = true;
        if(audio_count>=6){
            $("#loader").hide();    
        }
    });
    var $content = $('.content');

    $content.on('click','#tip0_bt',function() {
        var $parent = $(this).parent();
        createjs.Sound.play("zhuandongjiguang");
        fadeOut($parent);//.addClass('animated_200 fadeOut');
        $("#tip2_03").addClass("rotate_animate_30");
        setTimeout(function() {
            $("#tip2_02").trigger("click");
            $parent.remove();
        },
        1500)
    });

    $content.on('click','#tip_02',function() {
        fadeIn($("#tip_01"));//.addClass('animated_200 fadeIn');
        fadeIn($("#tip1_cloud"));//.addClass('animated_200 fadeIn');
        flashFadeIn(1);
    })

    function flashFadeIn(index) {
        fadeIn($("#tip1_0" + index));//.addClass('animated_200 fadeIn');
        if (index < 6) {
            setTimeout(function() {
                flashFadeIn(++index);
                 $("#tip1_0" + (index - 1)).addClass('animated_200 fadeOut');
                if (index >= 5) {
                    fadeOut($("#tip_01"));//.addClass('animated_200 fadeOut');
                    fadeOut($("#tip_02"));//.addClass('animated_200 fadeOut');

                    setTimeout(function(){
                        $("#tip_01").remove();
                        $("#tip_02").remove();
                        fadeIn($("#tip_04"));//.addClass('animated_200 fadeIn');
                    },1000);
                    $("#tip3_02").addClass("flash");
                }
            },
            300);
        }
    }

    $content.on('click','#tip_03',function() {
        createjs.Sound.play("fengxuebingdong");
        fadeIn($("#tip3_03"));//.addClass('animated_faster fadeIn');
        setTimeout(function(){
            fadeIn($("#tip3_04"));//.addClass('animated_faster fadeIn');
        },1500);

        setTimeout(function(){
             $("#tip_03").remove();
            // $("#tip3_04").removeClass('fadeIn').addClass('fadeOut');
        },3000);

        // $("#tip3_03").animate({
        //     opacity: "1"
        // },
        // {
        //     duration: 1500,
        //     complete: function() {
        //         $("#tip3_04").animate({
        //             opacity: "1"
        //         },
        //         {
        //             duration: 1000,
        //             complete: function() {
        //                 $("#tip_03").remove();
        //                 $("#tip3_04").animate({
        //                     opacity: "0"
        //                 },
        //                 {
        //                     duration: 1000,
        //                     complete: function() {
        //                         //$("#tip_03").remove();
        //                     }
        //                 })
        //             }
        //         });
        //     }
        // });

    })

    $content.on('click','#tip_04',function() {
        fadeIn($("#tip4_03"));//.addClass('animated_faster fadeIn');
        grap_flash();
        fadeIn($("#tip_05"));//.addClass('animated_faster fadeIn');
        createjs.Sound.play("zhuamen");
    })

    function grap_flash(index) {
        $("#tip4_04").addClass('animated_faster fadeIn');
        $("#tip4_04").animate({left:"+50px",top:"+50px"},{duration:100,complete:function(){}});
        setTimeout(function() {
            fadeOut($("#tip4_04"));//.addClass('animated_faster fadeOut');
            fadeIn($("#tip4_05"));//.addClass('animated_faster fadeIn');
            $("#tip4_05").animate({left:"-25px",top:"+50px"},{duration:100,complete:function(){}});
        },
        500);
        setTimeout(function() {
            fadeOut($("#tip4_05"));//.addClass('animated_faster fadeOut');
            fadeIn($("#tip4_06"));//.addClass('animated_faster fadeIn');
            $("#tip4_06").animate({left:"+25px",top:"+50px"},{duration:100,complete:function(){}});
        },
        1000);
        setTimeout(function() {
            fadeOut($("#tip4_06"));//.addClass('animated_faster fadeOut');
            fadeOut($("#tip_04"));//.addClass('animated_faster fadeOut');
            $("#tip_05").trigger("click");
        },
        1500);

    }

    $content.on('click','#tip_05',function() {
        $("#tip_04").remove();
        fadeIn($("#tip_06"));//.addClass('animated_faster fadeIn');
        $("#tip5_01").animate({
            top: "-200px",
            left: "-50px"
        },
        {
            duration: 1000,
            complete: function() {}
        });
        $("#tip5_02").animate({
            top: "+200px",
            left: "-40px"
        },
        {
            duration: 1000,
            complete: function() {}
        });
        $("#tip5_03").animate({
            top: "+200px",
            left: "+50px"
        },
        {
            duration: 1000,
            complete: function() {}
        });
        $("#tip5_04").animate({
            top: "+200px",
            left: "+50px"
        },
        {
            duration: 1000,
            complete: function() {}
        });
        //$("#tip_05").fadeOut();
        setTimeout(function() {
            $("#tip_05").remove();
        },
        1000)
    })

    $content.on('click','#tip_06',function() {
        createjs.Sound.play("kaixiangzi");
        fadeOut($(this));//.addClass('animated_faster fadeOut');
        fadeIn($("#tip_07"));//.addClass('animated_faster fadeIn');
        setTimeout(function() {
            $("#tip_06").remove();
             
        },
        1000);
    })

var mySwiper_11 = new Swiper ('#swiper-11', {
    // Optional parameters
    direction: 'vertical',
    loop: false,
    onSlideNextEnd:function(swiper){
        //console.log(swiper.activeIndex);
    }
  }) 

var mySwiper_07 = new Swiper ('#swiper-07', {
    // Optional parameters
    direction: 'vertical',
    loop: false,
    onSlideNextEnd:function(swiper){
        console.log(swiper.activeIndex);
        if(swiper.activeIndex==1){
            onMoreBt(1);
        }else if(swiper.activeIndex==2){
           onMoreBt(0);
        }
    },
    onSlidePrevEnd:function(swiper){
        onMoreBt(0);
    }
  }) 



function onMoreBt(isVisible){
    if(isVisible){
        fadeIn($("#more_bt"));//.removeClass('fadeOut').addClass('animated_faster fadeIn');
        fadeIn($("#go_bt"));//.removeClass('fadeOut').addClass('animated_faster fadeIn');
    }else{
          fadeOut($("#more_bt"));//.removeClass('fadeIn').addClass('fadeOut');
         fadeOut($("#go_bt"));//.removeClass('fadeIn').addClass('fadeOut');
    }
}
    // $("#tip7_02").swipe({
    //     swipe: function(event, direction, distance, duration, fingerCount) {

    //         if (direction == "up") {
    //             createjs.Sound.play("fanye");
    //             if (isSwiping) {
    //                 return false;
    //             }
    //             isSwiping = true;

    //             console.log("You swiped " + direction);
    //             $("#more_bt").addClass('animated_faster fadeIn');
    //             $("#go_bt").addClass('animated_faster fadeIn');
    //             $("#tip7_02").css({
    //                 "opacity": "0",
    //                 "z-index": "0"
    //             });
    //             $("#tip7_03").css({
    //                 "opacity": "1",
    //                 "z-index": "1"
    //             });
    //             $("#tip7_03").addClass("animated_faster fadeInUp");
    //             $('#tip7_03').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    //             function() {
    //                 isSwiping = false;
    //                 $('#tip7_03').removeClass("animated_faster fadeInUp");
    //             })

    //         }
    //     }
    // });

    // $("#tip7_03").swipe({
    //     swipe: function(event, direction, distance, duration, fingerCount) {

    //         // if (direction == "up") {

    //         //     if (isSwiping) {
    //         //         return false;
    //         //     }
    //         //     isSwiping = true;

    //         //     console.log("You swiped " + direction);
    //         //     $("#more_bt").fadeOut();
    //         //     $("#go_bt").fadeIn();
    //         //     $("#tip7_03").css({
    //         //         "opacity": "0",
    //         //         "z-index": "0"
    //         //     });
    //         //     $("#tip7_04").css({
    //         //         "opacity": "1",
    //         //         "z-index": "1"
    //         //     });
    //         //     $("#tip7_04").addClass("animated_faster fadeInUp");
    //         //     $('#tip7_04').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    //         //     function() {
    //         //         isSwiping = false;
    //         //         $('#tip7_04').removeClass("animated_faster fadeInUp");
    //         //     })
    //         // }
    //         if (direction == "down") {
    //             createjs.Sound.play("fanye");
    //             if (isSwiping) {
    //                 return false;
    //             }
    //             isSwiping = true;
    //             console.log("You swiped " + direction);
    //             $("#more_bt").addClass('animated_faster fadeOut');
    //             $("#go_bt").addClass('animated_faster fadeOut');
    //             $("#tip7_03").css({
    //                 "opacity": "0",
    //                 "z-index": "0"
    //             }); 
    //             $("#tip7_02").css({
    //                 "opacity": "1",
    //                 "z-index": "1"
    //             });
    //             $("#tip7_02").addClass("animated_faster fadeInDown");
    //             $('#tip7_02').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    //             function() {
    //                 isSwiping = false;
    //                 $('#tip7_02').removeClass("animated_faster fadeInDown");
    //             })
    //         }
    //     }
    // });

    // $("#tip7_04").swipe({
    //     swipe: function(event, direction, distance, duration, fingerCount) {

    //         if (direction == "down") {

    //             if (isSwiping) {
    //                 return false;
    //             }
    //             isSwiping = true;

    //             console.log("You swiped " + direction);
    //             $("#more_bt").fadeIn();
    //             $("#go_bt").fadeOut();
    //             $("#tip7_04").css({
    //                 "opacity": "0",
    //                 "z-index": "0"
    //             });
    //              $("#tip7_03").css({
    //                 "opacity": "1",
    //                 "z-index": "1"
    //             });
    //              $("#tip7_03").addClass("animated_faster fadeInDown");
    //             $('#tip7_03').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    //             function() {
    //                 isSwiping = false;
    //                 $('#tip7_03').removeClass("animated_faster fadeInDown");
    //             })
    //         }
    //     }
    // });

    $content.on('click','#go_bt',function() {
        createjs.Sound.play("button");
        fadeOut($("#tip_07"));//.addClass('animated_faster fadeOut');
        fadeIn($("#tip_08"));//.addClass('animated_faster fadeIn');
        setTimeout(function() {
            $("#tip_07").remove();
        },
        1000)
    })

    $content.on('click','#more_bt',function() {
        createjs.Sound.play("button");
        window.location.href = "http://Z.JD.COM";
    })

    $content.on('click','#tip8_03',function() {
        createjs.Sound.play("button");
        var tel = $("#text_input").val(); //获取手机号
        var telReg = !!tel.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);
        //如果手机号码不能通过验证
        if(telReg == false){
            alert("电话号码格式错误！");
            console.log("电话号码格式错误！")
            return false;
        }
        fadeOut($("#tip_08"));//.addClass('animated_faster fadeOut');

        //下面需要用替换成json获取结果
        var r = Math.random() * 10;
        if (r < 6) {
            fadeIn($("#tip_09"));//.addClass('animated_faster fadeIn');
            //$("#tip9_01").fadeIn();
            //$("#tip9_02").fadeIn();
            fadeOut($("#tip9_03"));//.addClass('animated_faster fadeOut');
            fadeOut($("#tip9_04"));//.addClass('animated_faster fadeOut');
        } else {
             fadeIn($("#tip_10"));//.addClass('animated_faster fadeIn');
            //$("#tip10_01").fadeIn();
            //$("#tip10_02").fadeIn();
            fadeOut($("#tip10_03"));//.addClass('animated_faster fadeOut');
            fadeOut($("#tip10_04"));//.addClass('animated_faster fadeOut');
        }

    });
     $content.on('click','#tip8_04',function() {
         createjs.Sound.play("button");
        fadeOut($("#tip_08"));
        $("#tip_11").addClass('animated_faster fadeIn').removeClass('fadeOut none');
        setTimeout(function(){
            $("#tip_08").addClass('none');
        },200);
    })

    $content.on('click','#tip9_02',function() {
        createjs.Sound.play("button");
        fadeOut($("#tip_11"));//.addClass('animated_faster fadeOut');
        //$("#tip9_01").fadeOut();
        //$("#tip9_02").fadeOut();
        fadeIn($("#tip9_03"));
        fadeIn($("#tip9_04"));
    });
     $content.on('click','#tip10_02',function() {
        createjs.Sound.play("button");
        fadeOut($("#tip_11"));
        //$("#tip10_01").fadeOut();
        //$("#tip10_02").fadeOut();
        fadeIn($("#tip10_03"));
        fadeIn($("#tip10_04"));
    })

    $content.on('click','#tip9_04',function() {
        createjs.Sound.play("button");
        fadeOut($("#tip_09"));
        fadeIn($("#tip_08"));
    });
     $content.on('click','#tip10_04',function() {
        createjs.Sound.play("button");
        fadeOut($("#tip_10"));
        fadeIn($("#tip_08"));
    })

    // $("#tip11_03").swipe({
    //     swipe: function(event, direction, distance, duration, fingerCount) {

    //         if (direction == "up") {
    //              createjs.Sound.play("fanye");
    //             if (isSwiping) {
    //                 return false;
    //             }
    //             isSwiping = true;
    //             console.log("You swiped " + direction);

    //             $("#tip11_03").css({
    //                 "opacity": "0",
    //                 "z-index": "5"
    //             });
    //              $("#tip11_04").css({
    //                 "opacity": "1",
    //                 "z-index": "6"
    //             });
    //              $("#tip11_04").addClass("animated_faster fadeInUp");
    //             $('#tip11_04').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    //             function() {
    //                 isSwiping = false;
    //                 $('#tip11_04').removeClass("animated_faster fadeInUp");
    //             })

    //         }
    //     }
    // });

    // $("#tip11_04").swipe({
    //     swipe: function(event, direction, distance, duration, fingerCount) {

    //         if (direction == "down") {
    //              createjs.Sound.play("fanye");
    //             if (isSwiping) {
    //                 return false;
    //             }
    //             isSwiping = true;
    //             console.log("You swiped " + direction);

    //             $("#tip11_04").css({
    //                 "opacity": "0",
    //                 "z-index": "5"
    //             });
    //              $("#tip11_03").css({
    //                 "opacity": "1",
    //                 "z-index": "6"
    //             });
    //              $("#tip11_03").addClass("animated_faster fadeInDown");
    //             $('#tip11_03').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    //             function() {
    //                 isSwiping = false;
    //                 $('#tip11_03').removeClass("animated_faster fadeInDown");
    //             })

    //         }
    //     }
    // });

    $content.on('click','#tip11_05',function() {
         createjs.Sound.play("button");
        fadeOut($("#tip_11"));
        setTimeout(function(){
            $("#tip_11").addClass('none');
        },200);
        $("#tip_08").addClass('animated_faster fadeIn').removeClass('fadeOut none');
    })

    function fadeIn($target){
        $target.removeClass('animated_faster fadeOut').addClass('animated_faster fadeIn');
    }
    function fadeOut($target){
        $target.removeClass('animated_faster fadeIn').addClass('animated_faster fadeOut');
    }

      var data = {appId:'',timestamp:'',nonceStr:'',signature:''};
      $.get('http://game.sinreweb.com/Game/JsConfig/getSignPackage',{url:location.href},function(res){        
            if(res.err==0){
              data.appId=res.appId;
              data.timestamp=res.timestamp;
              data.nonceStr=res.nonceStr;
              data.signature=res.signature;

                wx.config({
                  debug: false,
                  appId: data.appId,
                  timestamp: data.timestamp,
                  nonceStr: data.nonceStr,
                  signature: data.signature,
                  jsApiList: [
                    // 所有要调用的 API 都要加到这个列表中
                      'checkJsApi',
                      'onMenuShareTimeline',
                      'onMenuShareAppMessage',
                      'onMenuShareQQ',
                      'onMenuShareWeibo',
                      'hideMenuItems',
                      'showMenuItems',
                      'hideAllNonBaseMenuItem',
                      'showAllNonBaseMenuItem',
                      'translateVoice',
                      'startRecord',
                      'stopRecord',
                      'onRecordEnd',
                      'playVoice',
                      'pauseVoice',
                      'stopVoice',
                      'uploadVoice',
                      'downloadVoice',
                      'chooseImage',
                      'previewImage',
                      'uploadImage',
                      'downloadImage',
                      'getNetworkType',
                      'openLocation',
                      'getLocation',
                      'hideOptionMenu',
                      'showOptionMenu',
                      'closeWindow',
                      'scanQRCode',
                      'chooseWXPay',
                      'openProductSpecificView',
                      'addCard',
                      'chooseCard',
                      'openCard'
                  ]
                });

            }
      },'jsonp');



    wx.ready(function () {
        
        var shareData = {
          title: "距离X宝箱只有一步之遥！还不行动？！",
          desc: "赴筹者送大礼 尝鲜等你拿",
          link: "http://fuchouzhe.games.sinreweb.com/yuanyang/",
          imgUrl: "http://static.sinreweb.com/icon/yuanyang.jpg",
          trigger: function (res) 
          { 
            
            this.title = "距离X宝箱只有一步之遥！还不行动？！";
            this.desc = "赴筹者送大礼 尝鲜等你拿";
            this.link = "http://fuchouzhe.games.sinreweb.com/yuanyang/";
            this.imgUrl = "http://static.sinreweb.com/icon/yuanyang.jpg";
      }
        };
         var shareData1 = {
          title: "《远洋京东送大礼 X宝箱有惊喜》",
          desc: "赴筹者送大礼 尝鲜等你拿",
          link: "http://fuchouzhe.games.sinreweb.com/yuanyang/",
          imgUrl: "http://static.sinreweb.com/icon/yuanyang.jpg",
          trigger: function (res) 
          { 
            
            this.title = "《远洋京东送大礼 X宝箱有惊喜》";
            this.desc = "赴筹者送大礼 尝鲜等你拿";
            this.link = "http://fuchouzhe.games.sinreweb.com/yuanyang/";
            this.imgUrl = "http://static.sinreweb.com/icon/yuanyang.jpg";
          }
        };
        wx.onMenuShareTimeline(shareData1);
        wx.onMenuShareAppMessage(shareData);
        wx.onMenuShareQQ(shareData);
        wx.onMenuShareWeibo(shareData);
            
      });
});