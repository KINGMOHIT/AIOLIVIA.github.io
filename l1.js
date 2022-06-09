
  var log=console.log;
  function op(e){return document.querySelector(e)}
  function opp(e){return document.querySelectorAll(e)}

  var txt="OLIVIA OLIVIA OLIVIA OLIVIA",cir=opp(".circle"),html="";

  for(let i=0; i<txt.length; i++){
    html+=`<div style="--i: ${i};"><span>${txt.charAt(i)}</span></div>`;
  }
  cir.forEach(val=>{val.innerHTML=html});

  var cirNum=0,intAp=false,
  animTim=10000;

  switchCir();
  setInterval(switchCir,animTim);

  function switchCir(){
    var parent=cir[cirNum],
    num=0;
    intAp=setInterval(()=>{
      parent.children[num].style.display="none";
      cir[(cirNum)%2].children[num].style.display="block";
      log(cir[(cirNum)%2])
      num++;
      if(num>=txt.length){
        clearInterval(intAp);
      }
    },animTim/10/360*143-100);
    cirNum=(++cirNum)%2;
  }
