//construct cards 
$(function () {
  $.each(alphaGames, function (index, data) {

    $("#gameRowAlpha").append(
      '<div class="col-md-4"> <div class="card m-3 bg-dark text-white">' + '<img class="card-img-top" src="https://www.pixelstalk.net/wp-content/uploads/2016/10/Arcade-Wallpaper-Widescreen.jpg" alt="Kaitlin Echo Image">' +
        '<div class="card-body"> <div class="offset-md-2 col-md-8 mx-auto text-center">' +
        '<h4 class="card-title">' +data.gameName+ '</h4>' +
        '<p class="card-text">Created by: '+  data.name +'</p>' +
        '<a href="' +
        data.url +
        '" class="btn text-white" style="background-color:#ff704d">Time to Play!</a></div> '
    );
  });
  $.each(charlieGames, function (index, data) {

    $("#gameRowCharlie").append(
      '<div class="col-md-4"> <div class="card m-3 bg-dark text-white">' + '<img class="card-img-top" src="https://www.pixelstalk.net/wp-content/uploads/2016/10/Arcade-Wallpaper-Widescreen.jpg" alt="Kaitlin Echo Image">' +
        '<div class="card-body"> <div class="offset-md-2 col-md-8 mx-auto text-center">' +
        '<h4 class="card-title">' +data.gameName+ '</h4>' +
        '<p class="card-text">Created by: '+  data.name +'</p>' +
        '<a href="' +
        data.url +
        '" class="btn text-white" style="background-color:#ff704d">Time to Play!</a></div> '
    );
  });
  $.each(deltaGames, function (index, data) {

    $("#gameRowDelta").append(
      '<div class="col-md-4"> <div class="card m-3 bg-dark text-white">' + '<img class="card-img-top" src="https://www.pixelstalk.net/wp-content/uploads/2016/10/Arcade-Wallpaper-Widescreen.jpg" alt="Kaitlin Echo Image">' +
        '<div class="card-body"> <div class="offset-md-2 col-md-8 mx-auto text-center">' +
        '<h4 class="card-title">' +data.gameName+ '</h4>' +
        '<p class="card-text">Created by: '+  data.name +'</p>' +
        '<a href="' +
        data.url +
        '" class="btn text-white" style="background-color:#ff704d">Time to Play!</a></div> '
    );
  });
  $.each(echoGames, function (index, data) {

    $("#gameRowEcho").append(
      '<div class="col-md-4"> <div class="card m-3 bg-dark text-white">' + '<img class="card-img-top" src="https://www.pixelstalk.net/wp-content/uploads/2016/10/Arcade-Wallpaper-Widescreen.jpg" alt="Kaitlin Echo Image">' +
        '<div class="card-body"> <div class="offset-md-2 col-md-8 mx-auto text-center">' +
        '<h4 class="card-title">' +data.gameName+ '</h4>' +
        '<p class="card-text">Created by: '+  data.name +'</p>' +
        '<a href="' +
        data.url +
        '" class="btn text-white" style="background-color:#ff704d">Time to Play!</a></div> '
    );
  });
});
