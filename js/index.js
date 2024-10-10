$(document).ready(function(){
    let btn = $(".cash-btn");
    for(a=0; a <= btn.length;a++){
        btn[a].onclick = ()=>{
            $("#second-box").css(
                {"display":"flex",
                    "justify-content":"center",
                })
                $("#box-child").animate({
                    "margin-top":"150px"
                },2000);
                $(".close").click(function(){
                    $("#second-box").fadeOut(1000);
                    $("#box-child").css("margin-top","-500px");
                });
        };
    };

});
