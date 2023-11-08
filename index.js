/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer"; //to take the input url from the user.
import qr from "qr-image"; //to convert thr given url into a image
import fs from "fs"; //to use file systems
inquirer
  .prompt([
    /* Pass your questions in here */
    {
      message: "type in the URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
    fs.writeFile("message2.txt", url, (err) => {
      if (err) throw err;
      console.log("the file saved");
    });
  })

  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
