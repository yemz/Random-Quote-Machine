
//run the Random Quote Machine with forismatic API
$(document).ready(function(){
    getQuotes();//call function to display first quote
    var quoteRandom; //variable to get the quote data 
    var author; //variable to get the author data

    function getQuotes(){
    //call the url of the forismatic api
    var url="http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
//run the random quotes machine
    $.getJSON(url, function(data){
    quoteRandom = data.quoteText;
    author = data.quoteAuthor;
    $(".quotes").html('"'+ quoteRandom + '"');
    $(".author").html("-" + author);
  }); 
};
   //enable twitter button to display current quote and author when tweeted
    $(".twitter").on("click", function(data){
      window.open("https://twitter.com/intent/tweet?text=" + '"' + quoteRandom +'"' + " -" + author);
   });

//enable next-quote button to display the next random quote
$(".next-quote").on("click", function(){
    getQuotes();
   });
});