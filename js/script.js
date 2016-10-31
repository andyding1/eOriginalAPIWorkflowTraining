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

  // Embedded Workspace
  // Get the modal
  var modal = document.getElementById('workspacebox');

  // Get link that opens modal
  var workspacelink = document.getElementById("workspacelink");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  workspacelink.onclick = function() {
      modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

});
