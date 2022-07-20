document.addEventListener('click',(e)=>{
  if(!e.target.classList.contains('dropbtn')){
    x.style.display = "none";
  }
});
var x;
function myFunction(elemId) {
  for(let i=1;i<5;i++){
    let elem = document.querySelector(`#drop${i}`);
    if(elem.id != elemId){
      elem.style.display = "none";
    }
  }
  x = document.querySelector(`#${elemId}`);
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
