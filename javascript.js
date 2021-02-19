let effects = document.querySelectorAll('.effects input') 


// inputs function

function myFunction(){
    let suffex = this.dataset.sizing || ''
   document.documentElement.style.setProperty(`--${this.name}`, this.value + suffex )
}

effects.forEach(effect=> effect.addEventListener("change" , myFunction))
effects.forEach(effect=> effect.addEventListener("mousemove" , myFunction))

// rotation function

//  let btn = document.querySelector(".btn")

//  function btnFunction(){

//   let deg = btn.dataset.sizing 

//   console.log("hello")

//  document.documentElement.style.setProperty(`--${rotate}` , this.value )
// //      this.value
//  }  btn.addEventListener("onclick" , btnFunction)