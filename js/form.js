$(function() {

	// Get the form.
	var form = $('#form-contact');

	$(form).submit(function(e) {
		e.preventDefault();
		var formData = $(form).serializeArray();

		var targetEmail = "s1759855@ed.ac.uk";
		var subject = formData[0].value + " - Contact via sakib56.github.io";
		var email = formData[1].value;
		var message = formData[2].value + " \n"+email;

		document.location.href = "mailto:"+targetEmail+"?subject="
			+ encodeURIComponent(subject)
			+ "&body=" + encodeURIComponent(message);
	});
});