const buttons=document.querySelectorAll('.button')
const bd=document.querySelector('body')
buttons.forEach(function(button){
  button.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);
    if(e.target.id==="grey")
    {
      bd.style.backgroundColor=e.target.id;
    }
    if(e.target.id==="white")
    {
      bd.style.backgroundColor=e.target.id;
    }
    if(e.target.id==="blue")
    {
      bd.style.backgroundColor=e.target.id;
    }
    if(e.target.id==="yellow")
    {
      bd.style.backgroundColor=e.target.id;
    }
    
  })
})