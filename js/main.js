$(function() {
    var isSwiping = false;
    createjs.Sound.addEventListener("fileload", handleFileLoad);
            createjs.Sound.alternateExtensions = ["mp3"];
            createjs.Sound.registerSounds(
                [{id:"music1", src:"fengxuebingdong.mp3"},
                {id:"music2", src:"kaixiangzi.mp3"},
                {id:"music2", src:"zhuamen.mp3"},
                {id:"music2", src:"zhuandongjiguang.mp3"}]
            , "assets/");


            function handleFileLoad(event) {
                // A sound has been preloaded. This will fire TWICE
                console.log("Preloaded:", event.id, event.src);
            }

    imagesLoaded($(".content"),
    function() {
        $("#loader").hide();
    })

    $("#tip0_bt").click(function() {
        $(this).parent().fadeOut();
        $("#tip2_03").addClass("rotate_animate_30");
        setTimeout(function() {
            $("#tip2_02").trigger("click");
        },
        1500)
    });

    $("#tip_02").click(function() {
        $("#tip_01").fadeIn();
        $("#tip1_cloud").fadeIn();
        flashFadeIn(1);
    })

    function flashFadeIn(index) {
        $("#tip1_0" + index).fadeIn();
        if (index < 6) {
            setTimeout(function() {
                flashFadeIn(++index);
                 $("#tip1_0" + (index - 1)).fadeOut();
                if (index >= 5) {
                    $("#tip_01").animate({
                        opacity: 0,
                    },
                    {
                        duration: 1000,
                        complete: function() {
                            $("#tip_01").remove();

                        }
                    });
                    $("#tip_02").animate({
                        opacity: 0,
                    },
                    {
                        duration: 1000,
                        complete: function() {
                            $("#tip_02").remove();
                            $("#tip_04").fadeIn();
                        }
                    });
                    $("#tip3_02").addClass("flash");
                }
            },
            300);
        }
    }

    $("#tip_03").click(function() {
        $("#tip3_03").animate({
            opacity: "1"
        },
        {
            duration: 1500,
            complete: function() {
                $("#tip3_04").animate({
                    opacity: "1"
                },
                {
                    duration: 1000,
                    complete: function() {
                        $("#tip_03").remove();
                        $("#tip3_04").animate({
                            opacity: "0"
                        },
                        {
                            duration: 1000,
                            complete: function() {
                                //$("#tip_03").remove();
                            }
                        })
                    }
                });
            }
        });

    })

    $("#tip_04").click(function() {
        $("#tip4_03").fadeIn();
        grap_flash();
        $("#tip_05").fadeIn();
    })

    function grap_flash(index) {
        $("#tip4_04").fadeIn();
        $("#tip4_04").animate({left:"+50px",top:"+50px"},{duration:100,complete:function(){}});
        setTimeout(function() {
            $("#tip4_04").fadeOut();
            $("#tip4_05").fadeIn();
            $("#tip4_05").animate({left:"-25px",top:"+50px"},{duration:100,complete:function(){}});
        },
        500);
        setTimeout(function() {
            $("#tip4_05").fadeOut();
            $("#tip4_06").fadeIn();
            $("#tip4_06").animate({left:"+25px",top:"+50px"},{duration:100,complete:function(){}});
        },
        1000);
        setTimeout(function() {
            $("#tip4_06").fadeOut();
            $("#tip_04").fadeOut();
            $("#tip_05").trigger("click");
        },
        1500);

    }

    $("#tip_05").click(function() {
        $("#tip_04").remove();
        $("#tip_06").fadeIn();
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

    $("#tip_06").click(function() {
        $(this).fadeOut();
        $("#tip_07").fadeIn();
        setTimeout(function() {
            $("#tip_06").remove();
        },
        1000);
    })

    $("#tip7_02").swipe({
        swipe: function(event, direction, distance, duration, fingerCount) {

            if (direction == "up") {

                if (isSwiping) {
                    return false;
                }
                isSwiping = true;

                console.log("You swiped " + direction);
                $("#more_bt").fadeIn();
                $("#go_bt").fadeIn();
                $("#tip7_02").css({
                    "opacity": "0",
                    "z-index": "0"
                });
                $("#tip7_03").css({
                    "opacity": "1",
                    "z-index": "1"
                });
                $("#tip7_03").addClass("animated_faster fadeInUp");
                $('#tip7_03').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                function() {
                    isSwiping = false;
                    $('#tip7_03').removeClass("animated_faster fadeInUp");
                })

            }
        }
    });

    $("#tip7_03").swipe({
        swipe: function(event, direction, distance, duration, fingerCount) {

            // if (direction == "up") {

            //     if (isSwiping) {
            //         return false;
            //     }
            //     isSwiping = true;

            //     console.log("You swiped " + direction);
            //     $("#more_bt").fadeOut();
            //     $("#go_bt").fadeIn();
            //     $("#tip7_03").css({
            //         "opacity": "0",
            //         "z-index": "0"
            //     });
            //     $("#tip7_04").css({
            //         "opacity": "1",
            //         "z-index": "1"
            //     });
            //     $("#tip7_04").addClass("animated_faster fadeInUp");
            //     $('#tip7_04').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
            //     function() {
            //         isSwiping = false;
            //         $('#tip7_04').removeClass("animated_faster fadeInUp");
            //     })
            // }
            if (direction == "down") {

                if (isSwiping) {
                    return false;
                }
                isSwiping = true;

                console.log("You swiped " + direction);
                $("#more_bt").fadeOut();
                $("#go_bt").fadeOut();
                $("#tip7_03").css({
                    "opacity": "0",
                    "z-index": "0"
                }); 
                $("#tip7_02").css({
                    "opacity": "1",
                    "z-index": "1"
                });
                $("#tip7_02").addClass("animated_faster fadeInDown");
                $('#tip7_02').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                function() {
                    isSwiping = false;
                    $('#tip7_02').removeClass("animated_faster fadeInDown");
                })
            }
        }
    });

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

    $("#go_bt").click(function() {
        $("#tip_07").fadeOut();
        $("#tip_08").fadeIn();
        setTimeout(function() {
            $("#tip_07").remove();
        },
        1000)
    })

    $("#more_bt").click(function() {
        window.location.href = "http://Z.JD.COM";
    })

    $("#tip8_03").click(function() {
        var tel = $("#text_input").val(); //获取手机号
        var telReg = !!tel.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);
        //如果手机号码不能通过验证
        if(telReg == false){
            alert("电话号码格式错误！");
            console.log("电话号码格式错误！")
            return false;
        }
        $("#tip_08").fadeOut();

        //下面需要用替换成json获取结果
        var r = Math.random() * 10;
        if (r < 6) {
            $("#tip_09").fadeIn();
            //$("#tip9_01").fadeIn();
            //$("#tip9_02").fadeIn();
            $("#tip9_03").fadeOut();
            $("#tip9_04").fadeOut();
        } else {
             $("#tip_10").fadeIn();
            //$("#tip10_01").fadeIn();
            //$("#tip10_02").fadeIn();
            $("#tip10_03").fadeOut();
            $("#tip10_04").fadeOut();
        }

    });
     $("#tip8_04").click(function() {
        $("#tip_08").fadeOut();
        $("#tip_11").fadeIn();
    })

    $("#tip9_02").click(function() {
        $("#tip_11").fadeOut();
        //$("#tip9_01").fadeOut();
        //$("#tip9_02").fadeOut();
        $("#tip9_03").fadeIn();
        $("#tip9_04").fadeIn();
    });
     $("#tip10_02").click(function() {
        $("#tip_11").fadeOut();
        //$("#tip10_01").fadeOut();
        //$("#tip10_02").fadeOut();
        $("#tip10_03").fadeIn();
        $("#tip10_04").fadeIn();
    })

    $("#tip9_04").click(function() {
        $("#tip_09").fadeOut();
        $("#tip_08").fadeIn();
    });
     $("#tip10_04").click(function() {
        $("#tip_10").fadeOut();
        $("#tip_08").fadeIn();
    })

    $("#tip11_03").swipe({
        swipe: function(event, direction, distance, duration, fingerCount) {

            if (direction == "up") {

                if (isSwiping) {
                    return false;
                }
                isSwiping = true;
                console.log("You swiped " + direction);

                $("#tip11_03").css({
                    "opacity": "0",
                    "z-index": "5"
                });
                 $("#tip11_04").css({
                    "opacity": "1",
                    "z-index": "6"
                });
                 $("#tip11_04").addClass("animated_faster fadeInUp");
                $('#tip11_04').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                function() {
                    isSwiping = false;
                    $('#tip11_04').removeClass("animated_faster fadeInUp");
                })

            }
        }
    });

    $("#tip11_04").swipe({
        swipe: function(event, direction, distance, duration, fingerCount) {

            if (direction == "down") {

                if (isSwiping) {
                    return false;
                }
                isSwiping = true;
                console.log("You swiped " + direction);

                $("#tip11_04").css({
                    "opacity": "0",
                    "z-index": "5"
                });
                 $("#tip11_03").css({
                    "opacity": "1",
                    "z-index": "6"
                });
                 $("#tip11_03").addClass("animated_faster fadeInDown");
                $('#tip11_03').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                function() {
                    isSwiping = false;
                    $('#tip11_03').removeClass("animated_faster fadeInDown");
                })

            }
        }
    });

    $("#tip11_05").click(function() {
        $("#tip_11").fadeOut();
        $("#tip_08").fadeIn();
    })

});