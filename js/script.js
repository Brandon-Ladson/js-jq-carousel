$(document).ready(function () {

  // bottone next
  $(".next").click(nextImg);

  // bottone prev
  $(".prev").click(prevImg);




  //FUNZIONI
  // funzione per bottone next
  function nextImg() {

    var imgAttiva = $("img.active");

    imgAttiva.removeClass("active");

    // se sono all'ultima immagine torna alla prima
    if (imgAttiva.hasClass("last")){
      $("img.first").addClass("active");

    // altrimenti l'immagine successiva diventa quella active
    } else {
      imgAttiva.next("img").addClass("active");
    }

  }


  // funzione per bottone prev
  function prevImg() {

    var imgAttiva = $("img.active");

    imgAttiva.removeClass("active");

    // se sono alla prima immagine torna all'ultima
    if (imgAttiva.hasClass("first")){
      $("img.last").addClass("active");

    // altrimenti l'immagine precedente diventa quella active
    } else {
      imgAttiva.prev("img").addClass("active");
    }

  }


});
