
onmessage = function(e) {
     let database = ["youtube.com"]
     for(let i = 0;i<100000;i++){
         console.log(i)
     }
  if(e.data == database[0]){
    postMessage("File not safe")
  }else{
      this.postMessage("File safe")
  }
}