//Listen for messages
chrome.runtime.onMessage.addListener((msg,sender,response) =>{
   
     if (msg.name =="fetchWords"){
        //We call api...
      const apiKey ="OUR-API-KEY";
      const dateStr = new Date().toISOString().slice(0,10);
      const apiCall='https://api.wordnik.com/v4/words.json/wordOfTheDay?date='+dateStr+'&api_key='+apiKey;
   
     fetch(apiCall).then(function(res){
          //Wait for response
          if(res.status !== 200){
              response({word:"Error",desc: "There was a problem loading the word of the day"});
              return;
          }

          res.json().then(function(data){
                //send response
                response({word: data.word, desc: data.note});
          });
     }).catch(function(err){
        response({word: "Error", desc: "There was a problem loading the word of the day"});
     });
    
     return true;   
       
       
     }


});