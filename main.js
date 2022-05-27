page=0;
page1=0;
function sub(){
    let landInTexts = document.querySelectorAll(".landIn");
    landInTexts.forEach(landInText => {
    let letters = landInText.textContent.split("");
    landInText.textContent = "";
    letters.forEach((letter, i) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = `${i * 0.05}s`;
        landInText.append(span);
    });
    });
}

function right(){
  var a=document.getElementById("container_small1");
  page+=1;
  if(page>5){
    page=0;
  }
  a.style.left="-"+page*100+"%";
  console.log(page);
}

function left(){
    var a=document.getElementById("container_small1");
    console.log(page);
    if(page==1){
        a.style.left="-"+0+"%";
        page-=1;
    }else if(page==2){
        a.style.left="-"+100+"%";
        page-=1;
    }else if(page==3){
        a.style.left="-"+200+"%";
        page-=1;
    }
    else if(page==4){
        a.style.left="-"+300+"%";
        page-=1;
    }else if(page==5){
        a.style.left="-"+400+"%";
        page-=1;
    }else if(page==0){
        a.style.left="-"+500+"%";
        page=5;
    }
}

$(document).ready(function() {
    $(".container_big1").hide();
    $(".light").hide();
    $(".turn").hide();

    $(".play").click(function(){
        $(this).addClass("close");
        $(".museum").hide();
        $(".landIn").hide();
        $(".enter").hide();
        $(".light").show();
        $(".container_big1").show();
        $(".turn").show();
        $(".audio").trigger('play');
        $(".player").css("animation","rotate 5s linear infinite");
    })

    $(".stop").click(function(){
        $(".audio").trigger('pause');
        $(".player").css("animation","none");
    })

    $(".stop2").click(function(){
        $(".audio").trigger('pause');
        $(".player").css("animation","none");
    })

//     $(".enter").mouseenter(function(){
//           $(this).css("background-color","#C3DBC5");
//           $(this).css("color","#FFF");
//     });

//     $(".enter").mouseleave(function(){
//         $(this).css("background-color","#EEC0C6");
//         $(this).css("color","#000");
//   });
});
