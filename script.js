//Send Message To Background
chrome.runtime.sendMessage({name: "fetchWords"}, (response) =>{
   
    
    
     
     console.log(response);
   
     
});