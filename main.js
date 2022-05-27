let urlBtn = document.querySelector("#urlBtn")
let srchBtn = document.querySelector("#srchBtn")
let inp1 = document.querySelector("#input1")
let inp2 = document.querySelector("#input2")

urlBtn.onclick = () => {
inp1.style.display = "block";
inp2.style.display = "none";
}
srchBtn.onclick = () => {
    inp1.style.display = "none";
    inp2.style.display = "block";
}