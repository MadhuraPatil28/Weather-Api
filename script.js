// JQuery code

$(document).ready(function(){
    console.log("Jquery loaded");
  })
  
  // code from ( https://api.jquery.com/jquery.ajax/ ) => context section of the webpage.
  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?q=Ratnagiri&appid=ed6fe62c9c363431b20f4b6895b5da21&units=metric",
    // context: document.body
  }).done(function(data) {
    console.log(data);
    // $( this ).addClass( "done" );
  
    $(".city_name").html(data.name)
    $(".card-sub-heading").html(data.weather.main)
    $(".card-mid-figure").html(data.main.temp)
    $(".temp").html(data.main.temp)
    $(".card-mid-info").html(data.weather.description)
    $(".humadity-info").html(data.main.humidity)
    $(".visibility-info").html(data.visibility)
    $(".pressure-info").html(data.main.pressure)
  });