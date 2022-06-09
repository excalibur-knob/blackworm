let urlBtn = document.querySelector("#urlBtn")
let srchBtn = document.querySelector("#srchBtn")
let inp1 = document.querySelector("#url")
let srchIcon = document.querySelector(".srchIcon")
let scanIcon = document.querySelector(".scanIcon")
let subBtn = document.querySelector("#sub")
let loader = document.querySelector(".loader")
let failure = document.querySelector("#failureAnimation")
let success = document.querySelector(".success-animation")
let pictureContainer = document.querySelector("#pic")
let container = document.querySelector(".container")
let inputs = document.querySelector(".inputs")
let text = document.querySelector(".text")
let url = true
let srch = false
let clickedOnBody = false;
let worker1 = new Worker('worker1.js')

document.addEventListener('click', function(event) {
    let isClickInsideElement = inputs.contains(event.target);
    if (!isClickInsideElement) {
        pictureContainer.style.display = "block"
        inp1.style.display = "block"
        subBtn.style.display = "block"
        success.style.display="none"
        failure.style.display="none"
        text.style.display="none"
        inp1.value=""
        text.innerHTML=""
        clickedOnBody = true
    }
});
urlBtn.onclick = (e) => {
    inp1.placeholder = "Search or scan a URL"
    url=true
    srch= false
    inp1.style.display = "block"
    srchIcon.style.display = "block";
    scanIcon.style.display = "none"
    urlBtn.className = "active"
    srchBtn.className = ""
    inp1.style.display = "block";
    failure.style.display = "none"
    success.style.display = "none"
    subBtn.style.display = "block"
    pictureContainer.style.display = "block"
    inp1.value=""
    text.style.display="none"
    text.innerHTML=""

}
srchBtn.onclick = (e) => {
    inp1.placeholder = "URL,IP address, domain or file hash"
    url=false
    srch=true
    inp1.style.display = "block"
    srchIcon.style.display = "none";
    scanIcon.style.display = "block"
    inp1.value=""
    subBtn.style.display = "block"
    pictureContainer.style.display = "block"
    urlBtn.className = ""
    srchBtn.className = "active"
    text.style.display="none"
    failure.style.display = "none"
    success.style.display = "none"
    text.innerHTML=""
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
    const badSite = () => {
        let i = 0;
        text.innerHTML=""
        let data = inp1.value.toLowerCase();
        console.log(inp1.value)
        let txt;
        if(data == "stepn-eventos.com"){
            txt = `${inp1.value} არის სტეპენის ფიშინგ ვებსაიტი, რომელიც მიმართული იყო 
            facebook-ის ფიშინგ კამპანიაში`;
        }
        if(data == "virus.com"){
         txt = `${inp1.value} დომეინი არის დაფიქსირებული ჰაკერულ აქტივობებში,
        რომელიც განხორციელებული იყო 2022 წლის 15 აპრილს საქართველოს მოსახლეობის წინააღმდეგ 
        და მოიცავდა შეტევას საბანკო რეკვიზიტების მოთხოვნასთან დაკავშირებით`;
        }
        let speed = 10;
  function typeWriter() {
  if (i < txt.length) {
    text.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  
}
document.addEventListener('click', e =>{
    clearTimeout(typeWriter)
})
typeWriter();
}

    const validSite = () => {
    let i = 0;
    text.innerHTML=""
    let txt = `${inp1.value} დომეინი სუფთაა`;
    let speed = 10;
        function typeWriter() {
            if (i < txt.length) {
                text.innerHTML += txt.charAt(i);
                    i++;
            setTimeout(typeWriter, speed);
            }
        }
    typeWriter();
}



if(url==true&&srch==false){
    subBtn.onclick = (e) => {
        e.preventDefault()
        text.innerHTML=""
        worker1.postMessage(inp1.value)
        failure.style.display = "none"
        success.style.display = "none"
        loader.style.display = "inline-block"
        console.log("sent")
        worker1.onmessage = (e) => {
        loader.style.display = "none"
        console.log(e.data)
        pictureContainer.style.display = "none"
        inp1.style.display = "none"
        subBtn.style.display = "none"
        success.style.top = "-80px"
        failure.style.top = "-80px"
        if( e.data == "Not Found"){
            text.style.display = "block"
            text.innerHTML = "Not Found"
         }
        if(e.data=="Valid"){
            success.style.display = "block"
            text.style.display = "block"
            validSite();

        } if(e.data=="NotValid"){
            failure.style.display = "block"
            text.style.display = "block"
            badSite();
        }
                }
            }
        }
    
if(srch==true&&url==false){
    subBtn.onclick = (e) => {
        text.innerHTML=""
        e.preventDefault()
        failure.style.display = "none"
        success.style.display = "none"
        loader.style.display = "inline-block"
        worker1.postMessage(inp1.value)
        worker1.onmessage = (e) => {
        loader.style.display = "none"
        pictureContainer.style.display = "none"
        inp1.style.display = "none"
        subBtn.style.display = "none"
        success.style.top = "-80px"
        failure.style.top = "-80px"
        writer();
        if( e.data == "Not Found"){
            text.style.display = "block"
            text.innerHTML = "Not Found"
         }
        if(e.data=="Valid"){
            success.style.display = "block"
            text.style.display = "block"
            validSite();

        } if(e.data=="NotValid"){
            failure.style.display = "block"
            text.style.display = "block"
            badSite();
        }
        }
     }
    }