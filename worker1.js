onmessage = function (e) {
    let finished = false
    let notFound = true
    let data = e
        .data
        .toLowerCase()
    let validSites = ["youtube.com", "facebook.com"]
    let notValidSites = ["virus.com", "stepn-eventos.com", "spin2money.cc"]
    //  for(let i = 0;i<100000;i++){      console.log(i)  }
    console.log("logged  " + data)
    validSites.forEach(element => {
        if (data.includes(element)) {
            console.log(element)
            finished = true;
            notFound = false
            this.postMessage("Valid")
        }
    })
    if (!finished) {
        notValidSites.forEach(element => {
            if (data.includes(element)) {
                // console.log(element)
                finished = true
                notFound = false
                this.postMessage("NotValid")
            }
        })
    }
    console.log(notFound)
    if (notFound == true) {
        this.postMessage("Not Found")
    }
}