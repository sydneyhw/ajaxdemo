/*
 * @Author: Sydney
 * @Date:   2017-03-30 20:26:52
 * @Last Modified by:   Sydney
 * @Last Modified time: 2017-03-30 21:02:15
 */
$(function() {
	$('#trigger').on('click', getContent);
})

function getContent() {
	$.ajax({
		type: "GET",
		url: '/files/demo.txt',
		dataType: 'text',
		success: function(data) {
			var $para = $('<p>' + data + '</p>');
			$('#new').append($para);
		}
	});

}