$(function() {
	$('.car-img').each(function(index) {
		var search = $(this).data('search');
		var carId = $(this).data('id');

		// console.log(search);

		$.get("http://www.carimagery.com/api.asmx/GetImageUrl?searchTerm=" + search).success( function( data ) {

			// console.log(data);
			var xml = $(data).find('string').html();
			// console.log(xml);

			$('#div-' + carId).html('<img class="car-image" src="' + xml + '" />');

		  });

	});
});
