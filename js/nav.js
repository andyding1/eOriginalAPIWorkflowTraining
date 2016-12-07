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
  }
  else
  {
     alert('There was an issue bringing up workspace. Please verify you have the correct environment selected');
     return false;
  }
}

// sets correct eosecuritychecklink
function getEmbeddedSession(theHost){
  if(theHost != undefined && theHost != '')
  {
     var eosecuritychecklink = theHost.replace('ecore/','ssweb/workspace/showLogin.eo');
     $('#eosecuritycheckframe').attr('src', eosecuritychecklink);
  }
  else
  {
     alert('There was an issue bringing up eoSecurityCheck. Please verify you have the correct environment selected');
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
}

// toggles the hostname
function toggleShowEnv()
{
  // el = document.getElementById('env');
  // if ( el.style.display == 'block' ) {
	// 	el.style.display = 'none';
	// }
	// else {
	// 	el.style.display = 'block';
	// }
  $('#envdiv').click(function(){
    if ( $('#env').css('display') == 'none' ){
      $('#env').show();
    }
    else {
      $('#env').hide();
    }
  })
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
function disableEmptyForm2(){
  quizSearchForm = jQuery("#submitForm2");
  //disable empty fields so they don't clutter up the url
  quizSearchForm.find(':input[value=""]').attr('disabled', true);
}
function disableEmptyForm3(){
  quizSearchForm = jQuery("#submitForm3");
  //disable empty fields so they don't clutter up the url
  quizSearchForm.find(':input[value=""]').attr('disabled', true);
}
function disableEmptyForm4(){
  quizSearchForm = jQuery("#submitForm4");
  //disable empty fields so they don't clutter up the url
  quizSearchForm.find(':input[value=""]').attr('disabled', true);
}
function disableEmptyForm5(){
  quizSearchForm = jQuery("#submitForm5");
  //disable empty fields so they don't clutter up the url
  quizSearchForm.find(':input[value=""]').attr('disabled', true);
}
function disableEmptyForm6(){
  quizSearchForm = jQuery("#submitForm6");
  //disable empty fields so they don't clutter up the url
  quizSearchForm.find(':input[value=""]').attr('disabled', true);
}
function disableEmptyForm7(){
  quizSearchForm = jQuery("#submitForm7");
  //disable empty fields so they don't clutter up the url
  quizSearchForm.find(':input[value=""]').attr('disabled', true);
}
function addField(){
$( "#empty" ).after( '<tr><td><img src="../../images/checkmark.gif" alt="required" /></td><td>removeTransactionSid</td><td><input type="text" size="25" name="removeTransactionSid" value="" /></td><td>If you would like to remove a transaction sid you may enter it here.</td></tr>' );

}
