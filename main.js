let urlBtn = document.querySelector("#urlBtn")
let srchBtn = document.querySelector("#srchBtn")
let inp1 = document.querySelector("#input1")
let inp2 = document.querySelector("#input2")
let srchIcon = document.querySelector(".srchIcon")
let scanIcon = document.querySelector(".scanIcon")
urlBtn.onclick = () => {
    srchIcon.style.display = "block";
    scanIcon.style.display = "none"
    urlBtn.className = "active"
    srchBtn.className = ""
    inp1.style.display = "block";
    inp2.style.display = "none";
}
srchBtn.onclick = () => {
    srchIcon.style.display = "none";
    scanIcon.style.display = "block"
    urlBtn.className = ""
    srchBtn.className = "active"
    inp1.style.display = "none";
    inp2.style.display = "block";
}

//navbar code
const navSlide = () => {
    const drop = document.querySelector(".drop")
    const nav = document.querySelector(".nav-links")
    const navLinks = document.querySelectorAll('.nav-links li')
    drop.addEventListener('click' , ()=>{
        nav.classList.toggle('nav-active');
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
            link.style.animation = ''
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+0.3}s`
            }
        })
    })
    
}
navSlide();
 