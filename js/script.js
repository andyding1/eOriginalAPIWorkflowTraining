$( document ).ready(function() {
  $( ".embed" ).click(function() {
    // hides all then shows correct dom
    $( "#embeddom" ).hide();
    $( "#emaildom" ).hide();
    $( "#transferdom" ).hide();
    $( "#destructiondom" ).hide();
    $( "#retrievedom" ).hide();
    $( "#embeddom" ).show( "slow" );
  });

  $( ".email" ).click(function() {
    // hides all then shows correct dom
    $( "#embeddom" ).hide();
    $( "#emaildom" ).hide();
    $( "#transferdom" ).hide();
    $( "#destructiondom" ).hide();
    $( "#retrievedom" ).hide();
    $( "#emaildom" ).show( "slow" );
  });

  $( ".transfer" ).click(function() {
    // hides all then shows correct dom
    $( "#embeddom" ).hide();
    $( "#emaildom" ).hide();
    $( "#transferdom" ).hide();
    $( "#destructiondom" ).hide();
    $( "#retrievedom" ).hide();
    $( "#transferdom" ).show( "slow" );
  });

  $( ".destruction" ).click(function() {
    // hides all then shows correct dom
    $( "#embeddom" ).hide();
    $( "#emaildom" ).hide();
    $( "#transferdom" ).hide();
    $( "#destructiondom" ).hide();
    $( "#retrievedom" ).hide();
    $( "#destructiondom" ).show( "slow" );
  });

  $( ".retrieve" ).click(function() {
    // hides all then shows correct dom
    $( "#embeddom" ).hide();
    $( "#emaildom" ).hide();
    $( "#transferdom" ).hide();
    $( "#destructiondom" ).hide();
    $( "#retrievedom" ).hide();
    $( "#retrievedom" ).show( "slow" );
  });

  // Accordion
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
      acc[i].onclick = function(){
          this.classList.toggle("active");
          this.nextElementSibling.classList.toggle("show");
    }
  }

});
