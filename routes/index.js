
/*
 * GET home page.
 */

exports.do_work = function(req, res){
	  res.render('index.jade', { 
		  title: 'PENNTEREST' 
	  });
	};
