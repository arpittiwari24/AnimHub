 const componentVerification = () => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Successful Verification of component</title>
        <style>
            body {
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.4;
                color: #333333;
                margin: 0;
                padding: 0;
            }
    
    
            .container {
                max-width: 600px;
                display:flex;
                flex-direction:column;
                gap:10px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
            }

            .text{
                font-weight:bold ;
                font-size:16px;
            }
            .image{
                max-width:70%;
                height:60px;
              }
        </style>
    
    </head>
    
    <body>
        <div class="container">
           <img class="image" src="https://live.staticflickr.com/3362/3614648188_2a3c34bf2f_z.jpg" href="image"/>
           <p class="text">Your component is verified</p>
           <a href="https://gdsc.community.dev/dy-patil-college-of-engineering-pune/">click here</a>
        </div>
    </body>
    
    </html>`;
  };

  module.exports = componentVerification;