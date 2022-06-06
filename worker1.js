

onmessage = function(e) {
     let finished =false
     let notFound = false
     let validSites= ["youtube.com"]
     let notValidSites=["blackworm.com"]
    //  for(let i = 0;i<100000;i++){
    //      console.log(i)
    //  }
   validSites.forEach(element=>{
     
    if(e.data.includes(element)){
      console.log(element)
      finished=true;
      this.postMessage("Valid")
    }else{
      notFound=true
    }
   })
   if(!finished){
     notValidSites.forEach(element=>{
       if(e.data.includes(element)){
        console.log(element)
         finished = true
         notFound=false
         this.postMessage("NotValid")
       }
     })
   }
   if(notFound==true){
     this.postMessage("Not Found")
   }
}