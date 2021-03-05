function setRem() {
    const width = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = width / 100 + "px";
}
window.onresize=function(){
    setRem();
}
setRem();