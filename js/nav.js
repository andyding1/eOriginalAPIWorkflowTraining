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
  if(theHost != undefined && theHost != '')
  {
     var workspaceurl = theHost.replace('ecore/','ssweb/workspace/showLogin.eo');
     $('#workspaceframe').attr('src', workspaceurl);
    //  $("#workspaceframe").attr("src", workspaceurl);
    //  $("#workspacebox").css ('display','block');
  }
  else
  {
     alert('There was an issue bringing up workspace. Please verify you have the correct environment selected');
     return false;
  }
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

  //set up correct link to embedded workspace
   workspace_name=(ele.value).split('/ecore/')[0];
   $('#workspace').attr('href',workspace_name+'/ssweb/workspace/showLogin.eo');
}

// toggles the hostname
function toggleShowEnv()
{
   el = document.getElementById('env');
   if ( el.style.display == 'block' ) {
		el.style.display = 'none';
	}
	else {
		el.style.display = 'block';
	}
}

function disableEmptyForm(){
  quizSearchForm = jQuery("#submitForm");
  //disable empty fields so they don't clutter up the url
  quizSearchForm.find(':input[value=""]').attr('disabled', true);
}
function disableEmptyForm1(){
  quizSearchForm = jQuery("#submitForm1");
  //disable empty fields so they don't clutter up the url
  quizSearchForm.find(':input[value=""]').attr('disabled', true);
}
function addField(){
$( "#empty" ).after( '<tr><td><img src="../../images/checkmark.gif" alt="required" /></td><td>removeTransactionSid</td><td><input type="text" size="25" name="removeTransactionSid" value="" /></td><td>If you would like to remove a transaction sid you may enter it here.</td></tr>' );

}
