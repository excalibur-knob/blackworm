let urlBtn = document.querySelector("#urlBtn")
let srchBtn = document.querySelector("#srchBtn")
let inp1 = document.querySelector("#input1")
let inp2 = document.querySelector("#input2")
let srchIcon = document.querySelector(".srchIcon")
let scanIcon = document.querySelector(".scanIcon")
urlBtn.onclick = () => {
    srchIcon.style.display = "block";
    scanIcon.style.display = "none"
    urlBtn.classList.toggle("active")
    srchBtn.classList.toggle("active")
    inp1.style.display = "block";
    inp2.style.display = "none";
}
srchBtn.onclick = () => {
    srchIcon.style.display = "none";
    scanIcon.style.display = "block"
    srchBtn.classList.toggle("active")
    urlBtn.classList.toggle("active")
    inp1.style.display = "none";
    inp2.style.display = "block";
}

