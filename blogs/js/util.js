$(function () {
    //导航自适应
    $('.nav').carousel();

    //一入一出 
    $(".item_article").mouseover(function () {
        $(this).css({
            "border-left-color": "rgb(84, 70, 158)",
            "border-left-width": "4px"
        });
    })
    $(".item_article").mouseout(function () {
        $(this).css({
            "border-left-color": "",
            "border-left-width": ""
        });
    })
    //模态框
    $(".admin").click(function () {

        $('#myModal').modal('show')
    })


    //提示信息 
    $('[data-toggle="tooltip"]').tooltip()


    $(".music").click(function () {
        alert("暂未开发");
    })


    //回到顶部
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 100) {
                $("#toTop").fadeIn(1000);
            } else {
                $("#toTop").fadeOut(1000);
            }
        });
        //当点击跳转链接后，回到页面顶部位置
        $("#toTop").click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 700);
            return false;
        });
    });

})