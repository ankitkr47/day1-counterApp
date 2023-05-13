 const button = document.querySelector(".buttons");
 const count = document.querySelector(".count");

 function setColor(){
    if (count.innerHTML > 0) {
      count.style.color = "lightGreen";
    } else if (count.innerHTML < 0) {
      count.style.color = "orange";
    }
    else{
      count.style.color = "white";

    }
 }

 button.addEventListener("click" , (e) =>{
    if(e.target.classList.contains("add")){
        count.innerHTML++;
        setColor();
        
    }
    if (e.target.classList.contains("subtract")) {
      count.innerHTML--;
      setColor();
    }
    if (e.target.classList.contains("reset")) {
      count.innerHTML = 0;
      setColor();
    }
    
 })