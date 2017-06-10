$(function() {
   console.log("Loading Text");

   function loadText() {
      $.getJSON( "/api/students/", function( Textarea ) {
          console.log(Textarea);
          var message = "No word is here";
          if ( Textarea.length > 0 ) {
            message = Textarea[0].word;
          }
          $(".skills").text(message);
        });
     };
    
     loadText();
     setInterval( loadText, 2000);
});
