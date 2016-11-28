//Putting all api calls as html strings for scalability
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
  </div> \
';
var eoCreateTransactionUploadDocument = ' \
<button class="accordion">eoCreateTransactionUploadDocument</button> \
  <div class="panel"> \
    <div class="panelcontent"> \
      <h4>Description</h4> \
      <p>This creates a transaction (folder for the document) along with a document type (container for the document) and uploads a document into the document type. Upon successful completion of this call there will be transaction with a document type inside which has an uploaded document which is converted to a pdf in eOriginal regardless of the mimeType of the source file.</p> \
      <div class="apicontainer"> \
        <div class="form"> \
          <h4>Parameters</h4> \
          <form action="" target="responseFrame1" method="post" enctype="multipart/form-data" name="submitForm1" id="submitForm1"> \
            <input name="transactionName" type="text" placeholder="transactionName"/> \
            <input name="dptName" type="text" placeholder="dptName"/> \
            <input name="documentFileName" type="text" placeholder="documentFileName"/> \
            <p>srcFile:</p> \
            <input name="srcFile" type="file"/> \
            <select name="mimeType"> \
              <optgroup label="Documents"> \
                <option value="application/pdf" selected="selected"> \
                    application/pdf \
                </option> \
              </optgroup> \
              <optgroup label="Text Documents"> \
                <option value="application/msword"> \
                    application/msword \
                </option> \
                <option value="application/vnd.openxmlformats-officedocument.wordprocessingml.document"> \
                    application/vnd.openxmlformats-officedocument.wordprocessingml.document \
                </option> \
                <option value="text/plain"> \
                    text/plain \
                </option> \
              </optgroup> \
              <optgroup label="Spreadsheets/Data Documents"> \
                <option value="application/vnd.ms-excel"> \
                    application/vnd.ms-excel \
                </option> \
                <option value="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"> \
                    application/vnd.openxmlformats-officedocument.spreadsheetml.sheet \
                </option> \
                <option value="application/application/lotus123"> \
                    application/lotus123 \
                </option> \
                <option value="text/comma-separated-values"> \
                    text/comma-separated-values \
                </option> \
                <option value="text/csv"> \
                    text/csv \
                </option> \
                <option value="application/csv"> \
                    application/csv \
                </option> \
              </optgroup> \
              <optgroup label="Presentations"> \
                <option value="application/vnd.ms-powerpoint"> \
                    application/vnd.ms-powerpoint \
                </option> \
                <option value="application/vnd.openxmlformats-officedocument.presentationml.presentation"> \
                    application/vnd.openxmlformats-officedocument.presentationml.presentation \
                </option> \
              </optgroup> \
              <optgroup label="Images"> \
                <option value="image/bmp"> \
                    image/bmp \
                </option> \
                <option value="image/jpeg"> \
                    image/jpeg \
                </option> \
                <option value="application/postscript"> \
                    application/postscript \
                </option> \
                <option value="application/png"> \
                    application/png \
                </option> \
                <option value="image/png"> \
                    image/png \
                </option> \
                <option value="application/x-png"> \
                    application/x-png \
                </option> \
                <option value="image/tiff"> \
                    image/tiff \
                </option> \
                <option value="image/gif"> \
                    image/gif \
                </option> \
                <option value="image/x-xbitmap"> \
                    image/x-xbitmap \
                </option> \
              </optgroup> \
            </select> \
            <button type="submit" form="submitForm1" onclick="disableEmptyForm1();redirectAction(document.submitForm1,\'?action=eoCreateTransactionUploadDocument\', parent.document.getElementById(\'hostname\').innerHTML)">submit</button> \
          </form> \
        </div> \
        <div class="responsebox"> \
          <h4>Response</h4> \
          <iframe name="responseFrame1" class="response"></iframe> \
        </div> \
      </div> \
    </div> \
  </div> \
';

function hideDoms(){
  var doms = ['#embeddom','#emaildom','#transferdom','#destructiondom','#retrievedom'];
  doms.forEach(function(element){
    $(element).hide();
  });
}

function commentHTMLID(elementid){
  $(elementid).append("-->");
  $(elementid).prepend("<!--");
}

function commentElement(element){
  comment = document.createComment($(element).get(0).outerHTML);
  $(element).replaceWith(comment);
}

//jQuery
$( document ).ready(function() {
  $( ".eoLogin" ).append(eoLogin);
  $( ".eoCreateTransactionUploadDocument" ).append(eoCreateTransactionUploadDocument);

  $( ".embed" ).click(function() {
    hideDoms();
    // commentHTMLID("#embeddom");
    commentElement('#embeddom');
    $( "#embeddom" ).show( "slow" );
  });

  $( ".email" ).click(function() {
    hideDoms();
    commentHTMLID("#emaildom");
    $( "#emaildom" ).show( "slow" );
  });

  $( ".transfer" ).click(function() {
    hideDoms();
    $( "#transferdom" ).show( "slow" );
  });

  $( ".destruction" ).click(function() {
    hideDoms();
    $( "#destructiondom" ).show( "slow" );
  });

  $( ".retrieve" ).click(function() {
    hideDoms();
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
