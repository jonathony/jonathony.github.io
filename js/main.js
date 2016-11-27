function askQuestions(){


	var firstName = prompt ('What is your first name?');
	var lastName = prompt ('What is your last name?');
	var fullName = firstName + ' ' + lastName;
	console.log('User is called ' + fullName);


	if (firstName.toLowerCase().trim() == 'jonathon' && lastName.toLowerCase().trim() == 'yeung')
		{
		console.log('Greeting General')
	}
	else if (firstName.toLowerCase().trim() != 'jonathon' || lastName.toLowerCase().trim() != 'yeung') 
		{console.log ('Go away - and my name is Mr Burns');
	}

	var faveColour = prompt('what is your favourite colour?');

	faveColour = faveColour.toLowerCase().trim();

	if (faveColour == 'red' || 
		faveColour == 'green' ||
		faveColour == 'blue' ||
		faveColour == 'yellow'){

		$('h1').css('color', faveColour);
	}
}

//When the page has loaded
$(function(){

	$('img').on('click', askQuestions);
	//When the user clicks an h3
	$('h3').on('click',function(){

		//Hide the next element
		$(this).next().toggle();
	})

});