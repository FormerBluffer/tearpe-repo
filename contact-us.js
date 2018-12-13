



function hgsubmit()
	{
		if (/\S+/.test(document.hgmailer.firstname.value) == false) alert ("Please provide your First Name.");
		else if (/^\S+@[a-z0-9_.-]+\.[a-z]{2,6}$/i.test(document.hgmailer.email.value) == false) alert ("Please provide a valid E-Mail Address.");
		else if (/\S+/.test(document.hgmailer.comment.value) == false) alert ("Please enter a Message.");
		else {
			document.hgmailer.submit();
			alert (' Thank you! \n Your email is sent.');
		}
	}
