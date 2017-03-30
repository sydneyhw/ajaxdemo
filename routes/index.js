/*
 * @Author: Sydney
 * @Date:   2017-03-30 18:20:18
 * @Last Modified by:   Sydney
 * @Last Modified time: 2017-03-30 18:31:06
 */

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('index', {
			title: "Ajax"
		});
	});
}