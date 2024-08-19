const form1=document.querySelector('form');


form1.addEventListener('submit',function(e){
  e.preventDefault();
  const h=parseInt(document.querySelector('#height').value);
  const w=parseInt(document.querySelector('#weight').value);
  const res=document.querySelector('#results');

  if(h===' '|| h<0 || isNaN(h) ){
    res.innerHTML=`Enter the valid Height ${h}`;
  }
   else if(w===' ' || w<0 || isNaN(w) ){
    res.innerHTML=`Enter the valid Weight ${w}`;
  } 
  else {
    const bmi = (w / ((h * h) / 10000)).toFixed(2);
    //show the result
    res.innerHTML = `<span>${bmi}</span>`;
  }
  switch(bmi){
    case (bmi>=20):
        res.innerHTML=`normal`;
        break;

    case (bmi<=20):
        res.innerHTML=`under weight` ;
        break;
     default:
        res.innerHTML=`not valid`;
        
        break;
    
  }


});