const pantalla = document.querySelector('.pantalla');
const btn = document.querySelectorAll('.btn');
btn.forEach(btn =>{
    btn.addEventListener("click", ()=>{
      const btnClick= btn.textContent;
      if(btn.id=== "C"){
        pantalla.textContent ="0";
      } else if (btn.id === "borrar"){
        if(pantalla.textContent.length ===1 || pantalla.textContent === "Error"){
            pantalla.textContent = "0";
        }
        pantalla.textContent = pantalla.textContent.slice(0,-1)
      } 
      else if (btn.id == 'igual'){

        try{

        
            pantalla.textContent = eval(pantalla.textContent)
        } catch{
            pantalla.textContent = "Error!"
        }
        }
      
      else if (pantalla.textContent ==="0" || pantalla.textContent === "Error"){
        pantalla.textContent = btnClick;
      } else{
        pantalla.textContent += btnClick ;
    
      }
      })
})