let urlBtn = document.querySelector("#urlBtn")
let srchBtn = document.querySelector("#srchBtn")
let inp1 = document.querySelector("#input1")
let srchIcon = document.querySelector(".srchIcon")
let scanIcon = document.querySelector(".scanIcon")
let subBtn = document.querySelector("#sub")
let loader = document.querySelector(".loader")
let failure = document.querySelector("#failureAnimation")
let success = document.querySelector(".success-animation")
let url = true
let srch = false
let worker1 = new Worker('worker1.js')
urlBtn.onclick = (e) => {
    srchIcon.style.display = "block";
    scanIcon.style.display = "none"
    urlBtn.className = "active"
    srchBtn.className = ""
    inp1.style.display = "block";
    failure.style.display = "none"
    success.style.display = "none"
    inp1.value=""
    inp1.placeholder = "Search or scan a URL"
    url=true
    srch= false
}
srchBtn.onclick = (e) => {
    srchIcon.style.display = "none";
    scanIcon.style.display = "block"
    inp1.value=""
    urlBtn.className = ""
    srchBtn.className = "active"
    failure.style.display = "none"
    success.style.display = "none"
    inp1.placeholder = "URL,IP address, domain or file hash"
    url=false
    srch=true
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
 

//worker
    //url
    
if(url==true&&srch==false){
    subBtn.onclick = (e) => {
        e.preventDefault()
         worker1.postMessage(inp1.value)
        failure.style.display = "none"
        success.style.display = "none"
        loader.style.display = "inline-block"
        console.log("sent")
        worker1.onmessage = (e) => {
        loader.style.display = "none"
        console.log(e.data)
        if(e.data==true){
            success.style.display = "block"
            
        }else{
            failure.style.display = "block"
        }
                }
            }
        }
    
    if(srch==true&&url==false){
    subBtn.onclick = (e) => {
        console.log(inp1.value)
        e.preventDefault()
    failure.style.display = "none"
    success.style.display = "none"
    
    loader.style.display = "inline-block"
    worker1.postMessage(inp1.value)
    worker1.onmessage = (e) => {
    loader.style.display = "none"
    if(e.data==true){
        success.style.display = "block"
    }else{
        failure.style.display = "block"
    }
        }
    }
    }