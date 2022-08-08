const request = require('request');
const fs = require('fs');
const website =  process.argv.slice(2)[0];
console.log(website)
//'http://www.example.edu '



request(website, (error, response, body) => {
  /*console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google 
*/

  if (!error)  {
    fs.writeFile('./index.html', body, err => {
      if (err) {
        console.error(err); 
      } else {
        const size = fs.stat('./index.html', (err, stats) => {
          if (err) throw err;
          console.log(`Downloaded and saved ${stats.size} bytes to ./index.html`)
        });

      }
      
     
         

 
    
  });



  }

});





