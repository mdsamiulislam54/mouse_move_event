// mouse event start.....
let curser_event = document.getElementById('curser_event')
document.addEventListener('mousemove',(e)=>{
  let mouseLeft = e.clientX
  let mouseTop = e.clientY
  curser_event.style.cssText ="left:" + mouseLeft +"px;  top:" +mouseTop +"px";
  
 
})