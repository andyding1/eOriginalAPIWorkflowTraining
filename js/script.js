var eoLogin = ' \
<button class="accordion">eoLogin</button> \
  <div class="panel"> \
    <div class="panelcontent"> \
      <h4>Description</h4> \
      <p>A successful eoLogin returns a cookie and is required prior to using the application.</p> \
      <div class="apicontainer"> \
        <div class="form"> \
          <h4>Parameters</h4> \
          <form action="" target="responseFrame" method="post" name="submitForm" id="submitForm"> \
            <input name="loginUsername" type="text" placeholder="loginUsername"/> \
            <input name="loginOrganization" type="text" placeholder="loginOrganization"/> \
            <input name="loginPassword" type="password" placeholder="loginPassword"/> \
            <button type="submit" form="submitForm" onclick="disableEmptyForm();redirectAction(document.submitForm,\'?action=eoLogin\', parent.document.getElementById(\'hostname\').innerHTML)">submit</button> \
          </form> \
        </div> \
        <div class="responsebox"> \
          <h4>Response</h4> \
          <iframe name="responseFrame" class="response"></iframe> \
        </div> \
      </div> \
    </div> \
  </div>';

$( document ).ready(function() {

  $( ".eoLogin" ).append(eoLogin);

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
