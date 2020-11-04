$(document).ready(function () {

  // bottone next
  $(".next").click(nextImg).click(nextCerchio);

  // bottone prev
  $(".prev").click(prevImg).click(prevCerchio);

  // funzionamento frecce direzzionali
  $(document).keydown(function(e){

    // se premo freccia destra
    if (e.which === 39){
      nextImg();
      nextCerchio();

    // se premo freccia sinistra
    } else if (e.which === 37){
      prevImg();
      prevCerchio();
    }

  });

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

  // funzione per cerchio next
  function nextCerchio() {

    var cicleAttivo = $(".nav i.active");

    cicleAttivo.removeClass("active");

    // se sono all'ultimo cerchio torna al primo
    if (cicleAttivo.hasClass("last")){
      $(".nav i.first").addClass("active");

    // altrimenti il cerchio successivo diventa quello active
    } else {
      cicleAttivo.next(".nav i").addClass("active");
    }

  }

  // funzione per cerchio prev
  function prevCerchio() {

    var cicleAttivo = $(".nav i.active");

    cicleAttivo.removeClass("active");

    // se sono al primo cerchio torna all'ultimo
    if (cicleAttivo.hasClass("first")){
      $(".nav i.last").addClass("active");

    // altrimenti il cerchio precedente diventa quello active
    } else {
      cicleAttivo.prev(".nav i").addClass("active");
    }

  }

});
