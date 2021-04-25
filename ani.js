let text = document.getElementById('text');
let bir1=document.getElementById('bird1');
let bir2=document.getElementById('bird2');
let btn=document.getElementById('btn');
let forst=document.getElementById('forest');
let rock=document.getElementById('rock');
let water=document.getElementById('water');
let head =document.querySelector('.head');
let mdQ =window.matchMedia('(max-width:980px)');
window.addEventListener('scroll', function(){
let value = window.scrollY;
text.style.top = 30+ value * -0.5 + '%';
bir1.style.top = value * -1.5 + 'px';
bir1.style.left = value * 2 + 'px';
bir2.style.top = value * -1.5 + 'px';
bir2.style.left = value * -5 + 'px';
btn.style.marginTop= value *2+ 'px';
rock.style.top= value *-0.12+ 'px';
forst.style.top= value *0.3+ 'px';
head.style.top= value *0.5+ 'px';
if(mdQ.matches){
btn.style.marginTop= value *3.5+ 'px';
}
});