var Btn1 = document.getElementById("btn1");
var Btn2 = document.getElementById("btn2");
var Btn3 = document.getElementById("btn3");
var Btn4 = document.getElementById("btn4");
var box = document.querySelectorAll(".boxOne");


        Btn2.onclick = function(){
            Btn2.style.color = "#F33F3F";
            box[1].classList.toggle("hide");
            box[2].classList.toggle("hide");
            box[3].classList.toggle("hide");
            box[4].classList.toggle("hide");
        }
        Btn4.onclick = function(){
            Btn4.style.color = "#F33F3F";
            box[0].classList.toggle("hide");
            box[1].classList.toggle("hide");
            box[3].classList.toggle("hide");
            box[5].classList.toggle("hide");
        }
        Btn3.onclick = function(){
            Btn3.style.color = "#F33F3F";
            box[0].classList.toggle("hide");
            box[2].classList.toggle("hide");
            box[3].classList.toggle("hide");
            box[5].classList.toggle("hide");
        }
        Btn1.onclick = function(){
            for(var i =0; i<box.length; i++){
                box[i].classList.toggle("display");
            }
        }







