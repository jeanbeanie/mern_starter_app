// ./src/components/Html.jsx

import React from 'react';

const Html = (props) => {
  return (
    <html>
      <head>
        <meta charSet="utf-8"/>
        <meta name="description" content={props.initialData.metaDescription} />
        <meta name="keywords" content={props.initialData.metaKeywords} />
        <meta name="author" content={props.initialData.metaAuthor} />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
        <link rel="stylesheet" href="css/styles.css" />

        <title>{props.initialData.metaTitle}</title>
      </head>

      <body>
        <div id="app">
            {props.children}
        </div>
        <script id="initial-data" type="text/plain" data-json={props.initialData}></script>
        <script src="bundle.js"></script>
        
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>  
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
      </body>
    </html>
  );
};

export default Html;