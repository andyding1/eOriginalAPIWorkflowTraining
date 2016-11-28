//Putting all api calls as html strings for scalability
var eoAPI = {
  //eoLogin
  eoLogin: ' \
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
    ',
    //eoCreateTransactionUploadDocument
    eoCreateTransactionUploadDocument: ' \
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
    ',
    //eoInsertFormFields
    eoInsertFormFields: ' \
    <button class="accordion">eoInsertFormFields</button> \
      <div class="panel"> \
        <div class="panelcontent"> \
          <h4>Description</h4> \
          <p>Inserts signature blocks and supporting text fields, storing the resulting PDF file as a new document version in the document profile; returns an XML response containing the revised document version ID for the PDF file with signature and text blocks added.</p> \
          <div class="apicontainer"> \
            <div class="form"> \
              <h4>Parameters</h4> \
              <form action="" target="responseFrame2" method="post" enctype="multipart/form-data" name="submitForm2" id="submitForm2"> \
                <input name="dpSid" type="text" size="25" placeholder="dpSid"/> \
                <p style="text-align: center; font-size: .85em;">One of the following:</p> \
                <input type="text" size="25" name="formFieldsTemplateName" placeholder="formFieldsTemplateName"/> \
                <p>formFieldsXML</p> \
                <input type="file" name="formFieldsXML" /> \
                <button type="submit" form="submitForm2" onclick="disableEmptyForm2();redirectAction(document.submitForm2,\'?action=eoInsertFormFields\', parent.document.getElementById(\'hostname\').innerHTML)">submit</button> \
              </form> \
            </div> \
            <div class="responsebox"> \
              <h4>Response</h4> \
              <iframe name="responseFrame2" class="response"></iframe> \
            </div> \
          </div> \
        </div> \
      </div> \
    ',
}

//Declare all workflow short name elements in an array to be used for html manipulation
var workflows = ['embed','email','transfer','destruction','retrieve'];
//Declare all API calls to insert HTML into
var calls = ['.eoLogin', '.eoCreateTransactionUploadDocument', '.eoInsertFormFields'];

//Functions, make sure html classes/ids have the correct name otherwise these will not work as intended
//
function hideDoms(){
  workflows.forEach(function(workflow){
    //Convert the workflow name to the dom id element
    var dom = "#" + workflow + "dom";
    $(dom).hide();
  });
}

function insertCallHTML(){
  calls.forEach(function(apicall){
    //insert the API call via the eoAPI object
    $(apicall).append(eoAPI[apicall.substr(1)]);
  });
}

function emptyOtherHTML(workflowName){
  workflows.forEach(function(workflow){
    if(workflowName === workflow){
      //Do nothing since we don't want to empty
    }
    else{
      //get workflow calls by class to empty
      var workflowcalls = "." + workflow + "call";
      $(workflowcalls).empty();
    }
  });
}

function showDom(workflow){
  var dom = "#" + workflow + "dom";
  $(dom).show("slow");
}

function accordion(){
  //Accordion functionality
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
      acc[i].onclick = function(){
          this.classList.toggle("active");
          this.nextElementSibling.classList.toggle("show");
    }
  }
}

function initialize(workflow){
  hideDoms();
  insertCallHTML();
  emptyOtherHTML(workflow);
  showDom(workflow);
  accordion();
}

//jQuery
$( document ).ready(function() {

  $( ".embed" ).click(function() {
    initialize('embed');
  });

  $( ".email" ).click(function() {
    initialize('email');
  });

  $( ".transfer" ).click(function() {
    hideDoms();
    $( "#transferdom" ).show( "slow" );
    accordion();
  });

  $( ".destruction" ).click(function() {
    hideDoms();
    $( "#destructiondom" ).show( "slow" );
    accordion();
  });

  $( ".retrieve" ).click(function() {
    hideDoms();
    $( "#retrievedom" ).show( "slow" );
    accordion();
  });

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
