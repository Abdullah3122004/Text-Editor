var input_text =document.getElementById("input_text")
var bold=document.getElementById("bold")
var Italic=document.getElementById("Italic")
var Underline=document.getElementById("Underline")
var fontsize=document.getElementById("fontsize")
var fontfamily=document.getElementById("fontfamily")
var color=document.getElementById("color")
var normal=document.getElementById("normal")

normal.addEventListener("click",function(){
    input_text.style.fontWeight= "normal"
    input_text.style.fontStyle= "normal"
    input_text.style.textDecoration="none"
    input_text.style.fontSize=fontsize.value+"50px"
    input_text.style.fontFamily=fontfamily.value;
    input_text.style.color=color.black;
})

bold.addEventListener( "click",function(){
    input_text.style.fontWeight= "bold"
})
Italic.addEventListener( "click",function(){
    input_text.style.fontStyle= "italic"
})
Underline.addEventListener( "click",function(){
   input_text.style.textDecoration="underline"
})
fontsize.addEventListener( "click",function(){
    input_text.style.fontSize=fontsize.value+"40px"
 })
 fontfamily.addEventListener( "click",function(){
   input_text.style.fontFamily=fontfamily.none;
 })
 color.addEventListener("input", function () {
     input_text.style.color = color.value;
});
