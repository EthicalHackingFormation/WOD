//Listen for messages
chrome.runtime.onMessage.addListener((msg,sender,response) =>{
   
     if (msg.name =="fetchWords"){
        //We call api...
      const apiKey ="OUR-API-KEY";
      const dateStr = new Date().toISOString().slice(0,10);
      const apiCall='https://api.wordnik.com/v4/words.json/wordOfTheDay?date='+dateStr+'&api_key='+apiKey;
    //Wait for response
    //send the response
        
        //Send response
        response({api: apiCall, date: dateStr});
     }


});