var zonaGradiente=document.getElementById("zonaGradiente");
var color1=document.getElementById("color1");
var color2=document.getElementById("color2");
var crear=document.getElementById("crear");
var texto=document.getElementById("texto")

crear.addEventListener("click",()=>{
    console.log(color1.value);
    console.log(color2.value);
    zonaGradiente.style.background=`linear-gradient(to bottom right,${color1.value},${color2.value})`
    texto.innerText=""
})
