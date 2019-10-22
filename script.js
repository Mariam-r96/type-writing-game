 let list=['h','a','s','d','o','f','x','y','q','m','k','l','r','p','z','h'];
   
    let input = document.querySelector(".input");
    let displaySample = document.querySelector(".start");
    
    // clicking on start
    displaySample.addEventListener("click",function(){

        input.classList.remove("rightColor");
        input.classList.remove("wrongColor");
      
        let str = list.join('  ');
        document.querySelector("#sample").innerHTML = str;
        document.querySelector("#right").innerHTML = '';
        document.querySelector("#wrong").innerHTML = '';

        let timeleft = 20;
        let downloadTimer = setInterval(function(){
        document.querySelector("#time").innerHTML = "Timer : "+ timeleft;
        timeleft -= 1;
        if(timeleft <0){
            clearInterval(downloadTimer);
            alert("Game Over !");
            displayResult();
            right = 0;
            wrong = 0;
            
        }
        }, 1000);
       
    }) 

  

    input.addEventListener("keyup", inputText);
    let count = 0;
    let wrong = 0;
    let right = 0;
    
    function inputText() {

        list.forEach(function(element,index){
            console.log(element.toUpperCase());
        
            if (input.value.toUpperCase() === element.toUpperCase() && index===count) {

                input.classList.remove("wrongColor");
                input.classList.remove("rightColor");
                

                console.log(element+" matches");
               
                list.splice(count,1);
                let str1 = list.join('  ');
                document.querySelector("#sample").innerHTML = str1;
                console.log(list)
                count--; // adjusting count with the updated array index
                input.classList.remove("wrongColor");
                input.classList.add("rightColor");
                count++;
                right++;
                input.value=''; // empty the input field 
  
            }
          
            else if(input.value.toUpperCase() === element.toUpperCase() && count!=index){

                input.classList.remove("rightColor");
                input.classList.add("wrongColor");
                input.value='';

                wrong++;
              
                console.log("no match")
                console.log("wrong inputs "+ wrong)
                
            }

            // else if(input.value.toUpperCase()!== list[count] ){
                
            //     if(count!=index){
            //     // input.classList.remove("rightColor");
            //     // input.classList.add("wrongColor");
            //     input.value='';
            //     wrong++;
            //     // input.value='';
            //     console.log("no match")
            //     console.log("wrong inputs "+ wrong) 
            // }
            //  }

            
        })
    
         
       

    }



    function displayResult(){
        document.querySelector("#right").innerHTML = `Correct keys : ${right}`;
        document.querySelector("#wrong").innerHTML = `Wrong keys : ${wrong} `;
    }
