$(function() {
	$('.car-img').each(function(index) {
		var search = $(this).data('search');
		// console.log(search);

		$.get("http://www.carimagery.com/api.asmx/GetImageUrl?searchTerm=" + search).success( function( data ) {

			console.log(data);

			$(this).html("http://www.regcheck.org.uk/image.aspx/@MjAwOSBUb3lvdGEgQ2Ftcnk=");

		  });

	});
});
