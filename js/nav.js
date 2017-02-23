var workspacesession = false;

// submit the form to the host passed in
function redirectAction(theForm, theAction, theHost)
{
   if(theHost != undefined && theHost != '')
   {
      var action = theHost + theAction;
      theForm.action = action;
   }
   else
   {
      alert('There was an issue submitting your form.\nPlease verify you have the correct environment selected');
	  return false;
   }
}

// sets correct workspace link based on environment selected
function getWorkspace(theHost){
  if(workspacesession === false){
    if(theHost != undefined && theHost != '')
    {
       var workspaceurl = theHost.replace('ecore/','ssweb/workspace/showLogin.eo');
       $('#workspaceframe').attr('src', workspaceurl);
    }
    else
    {
       alert('There was an issue bringing up workspace. Please verify you have the correct environment selected');
       return false;
    }
  }
  workspacesession = true;
}

// toggles the hostname
function toggleHostname(ele)
{
   eles = document.getElementsByName('hostname');
   for(x = 0; x < eles.length; x++)
      if(eles[x] != ele)
         eles[x].checked = false;

   document.getElementById('hostname').innerHTML = ele.value;
   document.getElementById('envname').innerHTML = ele.id;
   document.getElementById('envname').title = ele.value;
   if(ele.type == 'checkbox' && ele.checked == false)
      document.getElementById('hostname').innerHTML = '';
}

// toggles the hostname
function toggleShowEnv()
{
  $('#envdiv').click(function(){
    if ( $('#env').css('display') == 'none' ){
      $('#env').show();
    }
    else {
      $('#env').hide();
    }
  })
}

//open embedded session
function embedIt(theHost){
  var embedurl = theHost.replace('ecore/','ssweb/eo_security_check?authCode=') + $('#authCode').val();
  window.open(embedurl);
}

function addField(){
$( "#empty" ).after( '<tr><td><img src="../../images/checkmark.gif" alt="required" /></td><td>removeTransactionSid</td><td><input type="text" size="25" name="removeTransactionSid" value="" /></td><td>If you would like to remove a transaction sid you may enter it here.</td></tr>' );

}
