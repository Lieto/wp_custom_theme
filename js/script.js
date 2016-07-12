/**
 * Created by Vesa on 9.7.2016.
 */
$(function(){

    var currentYear = (new Date).getFullYear();
    $(document).ready(function() {
        $("#copyright-year").text( (new Date).getFullYear() );
    });

    $(window).load(set_height).resize(set_height);

    function set_height(){
        var height1 = $(window).height();
        var height2 = $(".content").height()+$("header").height();

        if(height1>height2) {
            console.log($(".f-list").height());
            $(".f-bot").height($(window).height()-$(".content").height()-$("header").height()-$(".f-list").height()-40);
        }
        else{
            $(".f-bot").css("height", 40);
        }
    }

    $(".gallery-1 .info .separator").after("<div class='br'></div>");
    $(".img-bord").append("<span></span>");

// IPad/IPhone
    var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
        ua = navigator.userAgent,

        gestureStart = function () {viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0";},

        scaleFix = function () {
            if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
                viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
                document.addEventListener("gesturestart", gestureStart, false);
            }
        };

    scaleFix();
    // Menu Android
    if(window.orientation!=undefined){
        var regM = /ipod|ipad|iphone/gi,
            result = ua.match(regM)
        if(!result) {
            $('.sf-menu li').each(function(){
                if($(">ul", this)[0]){
                    $(">a", this).toggle(
                        function(){
                            return false;
                        },
                        function(){
                            window.location.href = $(this).attr("href");
                        }
                    );
                }
            })
        }
    }
});
var ua=navigator.userAgent.toLocaleLowerCase(),
    regV = /ipod|ipad|iphone/gi,
    result = ua.match(regV),
    userScale="";
if(!result){
    userScale=",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0'+userScale+'">')
