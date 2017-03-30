/*
 * @Author: Sydney
 * @Date:   2017-03-30 18:57:28
 * @Last Modified by:   Sydney
 * @Last Modified time: 2017-03-30 20:26:01
 */

window.onload = function() {
	var trigger = document.getElementById('trigger');
	trigger.onclick = getNewContent;
}

function getHTTPObject() {
	if (typeof XMLHttpRequest === "undefined") {
		XMLHttpRequest = function() {
			try {
				return new ActiveXObject("Msxml2.XMLHTTP.6.0");
			} catch (e) {}
			try {
				return new ActiveXObject("Msxml2.XMLHTTP.3.0");
			} catch (e) {}
			try {
				return new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {}
			return false;
		}
	}
	return new XMLHttpRequest();
}

function getNewContent() {
	var request = getHTTPObject();
	if (request) {
		request.open('GET', '/files/demo.txt', true);
		request.onreadystatechange = function() {
			if (request.readyState === 4) {
				alert('receive');
				var para = document.createElement('p');
				var txt = document.createTextNode(request.responseText);
				para.append(txt);
				document.getElementById('new').appendChild(para);
			}
		};

		request.send(null);
	} else {
		alert('sorry!')
	}
}