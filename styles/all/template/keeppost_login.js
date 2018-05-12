;(function($, window, document) {
	$('document').ready(function(){
        var key = 'marttiphpbb_keeppost';
        var data = sessionStorage.getItem(key);
        if (data){
            data = JSON.parse(data);
            data.login = true;
            sessionStorage.setItem(key, JSON.stringify(data));
        }
	});
})(jQuery, window, document);
