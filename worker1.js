let succeed = true;
let failed = false;
onmessage = function(e) {
 
     let database = ["blackworm.com"]
    //  for(let i = 0;i<100000;i++){
    //      console.log(i)
    //  }
    console.log(e.data)
  if(e.data == database[0]){
    postMessage(failed)
  }else{
    postMessage(succeed)
  }
}