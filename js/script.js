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
            <button type="submit" form="submitForm" onclick="redirectAction(document.submitForm,\'?action=eoLogin\', parent.document.getElementById(\'hostname\').innerHTML)">submit</button> \
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
            <p>mimeType:</p> \
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
            <button type="submit" form="submitForm1" onclick="redirectAction(document.submitForm1,\'?action=eoCreateTransactionUploadDocument\', parent.document.getElementById(\'hostname\').innerHTML)">submit</button> \
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
            <button type="submit" form="submitForm2" onclick="redirectAction(document.submitForm2,\'?action=eoInsertFormFields\', parent.document.getElementById(\'hostname\').innerHTML)">submit</button> \
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
  //eoConfigureSortOrder
  eoConfigureSortOrder: ' \
  <button class="accordion">eoConfigureSortOrder</button> \
  <div class="panel"> \
    <div class="panelcontent"> \
      <h4>Description</h4> \
      <p>Sets up the documents to be signed by setting up the signature path. Also specifies the order that the documents are to be signed.</p> \
      <div class="apicontainer"> \
        <div class="form"> \
          <h4>Parameters</h4> \
          <form action="" target="responseFrame3" method="post" enctype="multipart/form-data" name="submitForm3" id="submitForm3"> \
            <p>instructionsXML:</p> \
            <input type="file" name="instructionsXML" /> \
            <button type="submit" form="submitForm3" onclick="redirectAction(document.submitForm3,\'?action=eoConfigureSortOrder\', parent.document.getElementById(\'hostname\').innerHTML)">submit</button> \
          </form> \
        </div> \
        <div class="responsebox"> \
          <h4>Response</h4> \
          <iframe name="responseFrame3" class="response"></iframe> \
        </div> \
      </div> \
    </div> \
  </div> \
  ',
  //eoConfigureRoles
  eoConfigureRoles: ' \
  <button class="accordion">eoConfigureRoles</button> \
  <div class="panel"> \
    <div class="panelcontent"> \
      <h4>Description</h4> \
      <p>Sets up roles for signers/view-only participants with their name, e-mail and security code.</p> \
      <div class="apicontainer"> \
        <div class="form"> \
          <h4>Parameters</h4> \
          <form action="" target="responseFrame4" method="post" enctype="multipart/form-data" name="submitForm4" id="submitForm4"> \
            <p>instructionsXML:</p> \
            <input type="file" name="instructionsXML" /> \
            <button type="submit" form="submitForm4" onclick="redirectAction(document.submitForm4,\'?action=eoConfigureRoles\', parent.document.getElementById(\'hostname\').innerHTML)">submit</button> \
          </form> \
        </div> \
        <div class="responsebox"> \
          <h4>Response</h4> \
          <iframe name="responseFrame4" class="response"></iframe> \
        </div> \
      </div> \
    </div> \
  </div> \
  ',
  //eoConfigureInvitation
  eoConfigureInvitation: ' \
  <button class="accordion">eoConfigureInvitation</button> \
  <div class="panel"> \
    <div class="panelcontent"> \
      <h4>Description</h4> \
      <p>Creates the E-mail notification and sends it to the specified participants.</p> \
      <div class="apicontainer"> \
        <div class="form"> \
          <h4>Parameters</h4> \
          <form action="" target="responseFrame5" method="post" enctype="multipart/form-data" name="submitForm5" id="submitForm5"> \
            <p>instructionsXML:</p> \
            <input type="file" name="instructionsXML" /> \
            <button type="submit" form="submitForm5" onclick="redirectAction(document.submitForm5,\'?action=eoConfigureInvitation\', parent.document.getElementById(\'hostname\').innerHTML)">submit</button> \
          </form> \
        </div> \
        <div class="responsebox"> \
          <h4>Response</h4> \
          <iframe name="responseFrame5" class="response"></iframe> \
        </div> \
      </div> \
    </div> \
  </div> \
  ',
  //eoLogout
  eoLogout: ' \
  <button class="accordion">eoLogout</button> \
  <div class="panel"> \
    <div class="panelcontent"> \
      <h4>Description</h4> \
      <p>Closes the user session from eoLogin.</p> \
      <div class="apicontainer"> \
        <div class="form"> \
          <h4>Parameters</h4> \
          <form action="" target="responseFrame6" method="post" enctype="multipart/form-data" name="submitForm6" id="submitForm6"> \
            <button type="submit" form="submitForm6" onclick="redirectAction(document.submitForm6,\'?action=eoLogout\', parent.document.getElementById(\'hostname\').innerHTML)">submit</button> \
          </form> \
        </div> \
        <div class="responsebox"> \
          <h4>Response</h4> \
          <iframe name="responseFrame6" class="response"></iframe> \
        </div> \
      </div> \
    </div> \
  </div> \
  ',
  //eoGetAuthCode
  eoGetAuthCode: ' \
  <button class="accordion">eoGetAuthCode</button> \
  <div class="panel"> \
    <div class="panelcontent"> \
      <h4>Description</h4> \
      <p>Generates an authentication code for the SmartSign signing room.</p> \
      <div class="apicontainer"> \
        <div class="form"> \
          <h4>Parameters</h4> \
          <form action="" target="responseFrame7" method="post" enctype="multipart/form-data" name="submitForm7" id="submitForm7"> \
            <p>instructionsXML:</p> \
            <input type="file" name="instructionsXML" /> \
            <button type="submit" form="submitForm7" onclick="redirectAction(document.submitForm7,\'?action=eoGetAuthCode\', parent.document.getElementById(\'hostname\').innerHTML)">submit</button> \
          </form> \
        </div> \
        <div class="responsebox"> \
          <h4>Response</h4> \
          <iframe name="responseFrame7" class="response"></iframe> \
        </div> \
      </div> \
    </div> \
  </div> \
  ',
  //eoSecurityCheck
  eoSecurityCheck: ' \
  <button class="accordion">eoSecurityCheck.eo</button> \
  <div class="panel"> \
    <div class="panelcontent"> \
      <h4>Description</h4> \
      <p>Use this to enter the signing room with an Authentication Code. You can embed the following url into an iframe: <br /> https://<span class="inputSpan">*ecore environment*</span>/ssweb/eo_security_check?authCode=<span class="inputSpan">*authCode*</span></p> \
      <div class="apicontainer"> \
        <div class="form"> \
          <h4>Parameters</h4> \
          <form action="" method="post" enctype="multipart/form-data" name="submitFormSecurityCheck" id="submitFormSecurityCheck"> \
            <input id="authCode" name="authCode" type="text" placeholder="authCode"/> \
            <button type="submit" form="submitFormSecurityCheck" onclick="embedIt(parent.document.getElementById(\'hostname\').innerHTML);">Get Embedded Session</button> \
          </form> \
        </div> \
      </div> \
    </div> \
  </div> \
  </body> \
  ',
  //eoSellerInitiateTransfer
  eoSellerInitiateTransfer: ' \
  <button class="accordion">eoSellerInitiateTransfer</button> \
  <div class="panel"> \
    <div class="panelcontent"> \
      <h4>Description</h4> \
      <p>Creates a batch transfer of ownership request. This batch request may include one or many transactions. Each transaction described in the request, and its included documents, are locked and placed into escrow until the transfer of ownership is either confirmed by the \'seller\', cancelled by the \'seller\' or rejected by the \'buyer\'. The INITIATED_TRANSFER_OF_OWNERSHIP event is recorded for each document included in the request. A transfer receipt is created, signed by the \'seller\', and added to the escrow transaction. This transfer receipt will be included in the \'buyer\'s\' transaction upon completion of the transfer of ownership. An empty document profile is created in the \'seller\'s\' transaction to hold the transfer receipt signed by the \'buyer\' upon completion of the transfer of ownership.</p> \
      <div class="apicontainer"> \
        <div class="form"> \
          <h4>Parameters</h4> \
          <form action="" target="responseFrame8" method="post" enctype="multipart/form-data" name="submitForm8" id="submitForm8"> \
            <p>instructionsXML:</p> \
            <input type="file" name="instructionsXML" /> \
            <button type="submit" form="submitForm8" onclick="redirectAction(document.submitForm8,\'?action=eoSellerInitiateTransfer\', parent.document.getElementById(\'hostname\').innerHTML)">submit</button> \
          </form> \
        </div> \
        <div class="responsebox"> \
          <h4>Response</h4> \
          <iframe name="responseFrame8" class="response"></iframe> \
        </div> \
      </div> \
    </div> \
  </div> \
  ',
  //eoBuyerAcceptTransfer
  eoBuyerAcceptTransfer: ' \
  <button class="accordion">eoBuyerAcceptTransfer <span style="font-size:.8em">(API call in Buyer Vault)</span></button> \
  <div class="panel"> \
    <div class="panelcontent"> \
      <h4>Description</h4> \
      <p>Records the \'buyer\'s\' intent to accept control of the transactions/documents reflected in the transfer of ownership request. A transfer receipt is signed by the \'buyer\' and added to the escrow transaction. The ACCEPTED_TRANSFER_OF_OWNERSHIP event is recorded for each document included in the transfer request. \'Seller\' must next confirm transfer request before transfer of ownership completes.</p> \
      <div class="apicontainer"> \
        <div class="form"> \
          <h4>Parameters</h4> \
          <form action="" target="responseFrame9" method="post" enctype="multipart/form-data" name="submitForm9" id="submitForm9"> \
            <input name="batchId" type="text" placeholder="batchId"/> \
			<input name="manifestDPTName" type="text" placeholder="manifestDPTName"/> \
            <button type="submit" form="submitForm9" onclick="redirectAction(document.submitForm9,\'?action=eoBuyerAcceptTransfer\', parent.document.getElementById(\'hostname\').innerHTML)">submit</button> \
          </form> \
        </div> \
        <div class="responsebox"> \
          <h4>Response</h4> \
          <iframe name="responseFrame9" class="response"></iframe> \
        </div> \
      </div> \
    </div> \
  </div> \
  ',
  //eoSellerConfirmTransfer
  eoSellerConfirmTransfer: ' \
  <button class="accordion">eoSellerConfirmTransfer</button> \
  <div class="panel"> \
    <div class="panelcontent"> \
      <h4>Description</h4> \
      <p>For each transaction described in the transfer request, a new transaction is created in the \'buyer\'s\' organization. Control of each document included in the transfer is updated to reflect the \'buyer\' as the new controller/owner. The CONFIRMED_TRANSFER_OF_OWNERSHIP event is recorded for each transferred document. Retention policies described in the transfer request are executed for the \'seller\'. The transfer receipt, signed by the \'buyer\' is placed into the \'seller\'s\' transaction.</p> \
      <div class="apicontainer"> \
        <div class="form"> \
          <h4>Parameters</h4> \
          <form action="" target="responseFrame10" method="post" enctype="multipart/form-data" name="submitForm10" id="submitForm10"> \
            <input name="batchId" type="text" placeholder="batchId"/> \
            <button type="submit" form="submitForm10" onclick="redirectAction(document.submitForm10,\'?action=eoSellerConfirmTransfer\', parent.document.getElementById(\'hostname\').innerHTML)">submit</button> \
          </form> \
        </div> \
        <div class="responsebox"> \
          <h4>Response</h4> \
          <iframe name="responseFrame10" class="response"></iframe> \
        </div> \
      </div> \
    </div> \
  </div> \
  ',
  //eoRequestDestruction
  eoRequestDestruction: ' \
  <button class="accordion">eoRequestDestruction</button> \
  <div class="panel"> \
    <div class="panelcontent"> \
      <h4>Description</h4> \
      <p>Uses a destruction instructions XML file to request the Destruction of entire transactions or individual Electronic Original® documents. If a transaction is requested to be destroyed, all Electronic Original documents in the transaction will be destroyed; all eStore or eCopy documents will be deleted; the empty transaction will be deleted upon authorization of the request. When a transaction is destroyed, no retention copies are permitted. To retain a copy of a destroyed Electronic Original document, the destruction request must be initiated against the document itself and not its transaction.</p> \
      <div class="apicontainer"> \
        <div class="form"> \
          <h4>Parameters</h4> \
          <form action="" target="responseFrame11" method="post" enctype="multipart/form-data" name="submitForm11" id="submitForm11"> \
            <p>instructionsXML:</p> \
            <input type="file" name="instructionsXML" /> \
            <button type="submit" form="submitForm11" onclick="redirectAction(document.submitForm11,\'?action=eoRequestDestruction\', parent.document.getElementById(\'hostname\').innerHTML)">submit</button> \
          </form> \
        </div> \
        <div class="responsebox"> \
          <h4>Response</h4> \
          <iframe name="responseFrame11" class="response"></iframe> \
        </div> \
      </div> \
    </div> \
  </div> \
  ',
  //eoAuthorizeDestruction
  eoAuthorizeDestruction: ' \
  <button class="accordion">eoAuthorizeDestruction</button> \
  <div class="panel"> \
    <div class="panelcontent"> \
      <h4>Description</h4> \
      <p>Uses a digital token to authorize a batch destruction request.</p> \
      <div class="apicontainer"> \
        <div class="form"> \
          <h4>Parameters</h4> \
          <form action="" target="responseFrame12" method="post" enctype="multipart/form-data" name="submitForm12" id="submitForm12"> \
            <input name="batchId" type="text" placeholder="batchId"/> \
            <button type="submit" form="submitForm12" onclick="redirectAction(document.submitForm12,\'?action=eoAuthorizeDestruction\', parent.document.getElementById(\'hostname\').innerHTML)">submit</button> \
          </form> \
        </div> \
        <div class="responsebox"> \
          <h4>Response</h4> \
          <iframe name="responseFrame12" class="response"></iframe> \
        </div> \
      </div> \
    </div> \
  </div> \
  ',
  //eoGetCopy
  eoGetCopy: ' \
  <button class="accordion">eoGetCopy <span style="font-size:.8em">(Single Document)</span></button> \
  <div class="panel"> \
    <div class="panelcontent"> \
      <h4>Description</h4> \
      <p>Used to retrieve a watermarked copy of any document managed by eCore. Caller may specify watermark to apply, otherwise pre-configured system defaults will be applied based on the type of document being retrieved (eStored, electronicOriginal, or eCopy). The pre-configured system defaults are described in the defaultInstructions.xml as \'watermarkInstructions-eStore-retrieveDocument\', \'watermarkInstructions-electronicOriginal-retrieveDocument\', and \'watermarkInstructions-eCopy-retrieveDocument\'respectively.</p> \
	  <div class="apicontainer"> \
        <div class="form"> \
          <h4>Parameters</h4> \
          <form action="" target="responseFrame13" method="post" enctype="multipart/form-data" name="submitForm13" id="submitForm13"> \
            <input name="dpSid" type="text" placeholder="dpSid"/> \
            <button type="submit" form="submitForm13" onclick="redirectAction(document.submitForm13,\'?action=eoGetCopy\', parent.document.getElementById(\'hostname\').innerHTML)">submit</button> \
          </form> \
        </div> \
        <div class="responsebox"> \
          <h4>Response</h4> \
          <iframe name="responseFrame13" class="response"></iframe> \
        </div> \
      </div> \
    </div> \
  </div> \
  ',
  //eoGetTransactionDocuments
  eoGetTransactionDocuments: ' \
  <button class="accordion">eoGetTransactionDocuments <span style="font-size:.8em">(All Documents in Transaction)</span></button> \
  <div class="panel"> \
    <div class="panelcontent"> \
      <h4>Description</h4> \
      <p>All document profiles associated with the transaction are collected and returned.</p> \
	  <div class="apicontainer"> \
        <div class="form"> \
          <h4>Parameters</h4> \
          <form action="" target="responseFrame14" method="post" enctype="multipart/form-data" name="submitForm14" id="submitForm14"> \
            <input name="transactionSid" type="text" placeholder="transactionSid"/> \
      			<p>verbose:</p> \
      			<select name="verbose"> \
      				<option value="NO" > \
      					No \
      				</option> \
      				<option value="YES" selected="selected"> \
      					Yes \
      				</option> \
      			</select> \
      			<p>includeDocumentContent:</p> \
      			<select name="includeDocumentContent"> \
      				<option value="false" > \
      					false \
      				</option> \
      				<option value="true" selected="selected"> \
      					true \
      				</option> \
      			</select> \
      			<p>concatDocumentContents:</p> \
      			<select name="concatDocumentContents"> \
      				<option value="false" > \
      					false \
      				</option> \
      				<option value="true" selected="selected"> \
      					true \
      				</option> \
      			</select> \
            <button type="submit" form="submitForm14" onclick="redirectAction(document.submitForm14,\'?action=eoGetTransactionDocuments\', parent.document.getElementById(\'hostname\').innerHTML)">submit</button> \
          </form> \
        </div> \
        <div class="responsebox"> \
          <h4>Response</h4> \
          <iframe name="responseFrame14" class="response"></iframe> \
        </div> \
      </div> \
    </div> \
  </div> \
  ',
  //eoCreateTransaction
  eoCreateTransaction: ' \
  <button class="accordion">eoCreateTransaction</button> \
  <div class="panel"> \
    <div class="panelcontent"> \
      <h4>Description</h4> \
      <p>To establish a new transaction within the organization.</p> \
      <div class="apicontainer"> \
        <div class="form"> \
          <h4>Parameters</h4> \
          <form action="" target="responseFrame15" method="post" enctype="multipart/form-data" name="submitForm15" id="submitForm15"> \
            <input name="transactionName" type="text" placeholder="transactionName"/> \
            <button type="submit" form="submitForm15" onclick="redirectAction(document.submitForm15,\'?action=eoCreateTransaction\', parent.document.getElementById(\'hostname\').innerHTML)">submit</button> \
          </form> \
        </div> \
        <div class="responsebox"> \
          <h4>Response</h4> \
          <iframe name="responseFrame15" class="response"></iframe> \
        </div> \
      </div> \
    </div> \
  </div> \
  ',
  //eoCreateDocumentProfile
  eoCreateDocumentProfile: ' \
  <button class="accordion">eoCreateDocumentProfile</button> \
  <div class="panel"> \
    <div class="panelcontent"> \
      <h4>Description</h4> \
      <p>The createDocumentProfile action establishes a document profile. A document profile represents a document and contains a list of document versions.</p> \
      <div class="apicontainer"> \
        <div class="form"> \
          <h4>Parameters</h4> \
          <form action="" target="responseFrame16" method="post" enctype="multipart/form-data" name="submitForm16" id="submitForm16"> \
            <input name="transactionSid" type="text" placeholder="transactionSid"/> \
            <input name="dptName" type="text" placeholder="dptName"/> \
            <button type="submit" form="submitForm16" onclick="redirectAction(document.submitForm16,\'?action=eoCreateDocumentProfile\', parent.document.getElementById(\'hostname\').innerHTML)">submit</button> \
          </form> \
        </div> \
        <div class="responsebox"> \
          <h4>Response</h4> \
          <iframe name="responseFrame16" class="response"></iframe> \
        </div> \
      </div> \
    </div> \
  </div> \
  ',
  //eoUploadDocument
  eoUploadDocument: ' \
  <button class="accordion">eoUploadDocument</button> \
  <div class="panel"> \
    <div class="panelcontent"> \
      <h4>Description</h4> \
      <p>Stores a document in the eCore® service, and returns a document identifier and other document metadata.</p> \
      <div class="apicontainer"> \
        <div class="form"> \
          <h4>Parameters</h4> \
          <form action="" target="responseFrame17" method="post" enctype="multipart/form-data" name="submitForm17" id="submitForm17"> \
            <input name="dpSid" type="text" placeholder="dpSid"/> \
            <input name="documentFileName" type="text" placeholder="documentFileName"/> \
            <p>srcFile:</p> \
            <input name="srcFile" type="file"/> \
            <p>mimeType:</p> \
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
            <button type="submit" form="submitForm17" onclick="redirectAction(document.submitForm17,\'?action=eoUploadDocument\', parent.document.getElementById(\'hostname\').innerHTML)">submit</button> \
          </form> \
        </div> \
        <div class="responsebox"> \
          <h4>Response</h4> \
          <iframe name="responseFrame17" class="response"></iframe> \
        </div> \
      </div> \
    </div> \
  </div> \
  '
}

//Declare all workflow short name elements in an array to be used for html manipulation
var workflows = ['embed','email','transfer','destruction','retrieve'];
//Declare all API calls to insert HTML into
var calls = ['.eoLogin', '.eoCreateTransactionUploadDocument', '.eoInsertFormFields', '.eoConfigureSortOrder', '.eoConfigureRoles', '.eoConfigureInvitation', '.eoLogout', '.eoGetAuthCode', '.eoSecurityCheck', '.eoSellerInitiateTransfer', '.eoBuyerAcceptTransfer', '.eoSellerConfirmTransfer', '.eoRequestDestruction', '.eoAuthorizeDestruction', '.eoGetCopy', '.eoGetTransactionDocuments', '.eoCreateTransaction', '.eoCreateDocumentProfile', '.eoUploadDocument'];

//Functions, make sure html classes/ids have the correct name otherwise these will not work as intended
//
function hideDoms(){
  workflows.forEach(function(workflow){
    //Convert the workflow name to the dom id element
    var dom = "#" + workflow + "dom";
    $(dom).hide();
  });
}

function insertCallHTML(workflow){
  calls.forEach(function(apicall){
    //Insert the API call via the eoAPI object
    	// Only put in html if there no childs in it, otherwise clicking same workflow link will generate multiple copies of api calls
      if ( $(apicall + "." + workflow + "call").children().length == 0 ) {
      	$(apicall + "." + workflow + "call").append(eoAPI[apicall.substr(1)]);
      }
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
  insertCallHTML(workflow);
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
    initialize('transfer');
  });

  $( ".destruction" ).click(function() {
    initialize('destruction');
  });

  $( ".retrieve" ).click(function() {
    initialize('retrieve');
  });

  // Embedded Workspace
  // Get the modal
  var modal = document.getElementById('workspacebox');
  // Get links that open modal
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
