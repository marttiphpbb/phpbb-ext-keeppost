;(function($, window, document) {
	$('document').ready(function(){
        var key = 'marttiphpbb_keeppost';
        var $param = $('span[data-marttiphpbb-keeppost]')[0];
        var param = $($param).data('marttiphpbb-keeppost');
        param = param.split('&');
        var id = [];
        $.each(param, function(i, v){
            if (~~v.indexOf('sid=')){
                id.push(v);
            }
        });
        id = id.join('&');
        var $form = $('form#postform');
        var data = sessionStorage.getItem(key);
        console.log(data);
        if (data){
            data = JSON.parse(data);
            if (data.formData && data.login && data.id === id){
                console.log(data.formData);
                $form.find('input[type="checkbox"]').prop('checked', false);
                $.each(data.formData, function(name, value){
                    var $el = $($form).find('[name="'+name+'"]');
                    var type = $el.attr('type');
                    if (type === 'checkbox'){
                        $el.prop('checked', true);
                        return;
                    }
                    if (type === 'radio'){
                        $el.filter('[value='+value+']').prop('checked', true);
                        return;
                    }
                    $el.val(value);
                });            
            }
        }
        console.log(id);
        sessionStorage.removeItem(key);        
        $form.submit(function(){
            data = {};
            data.formData = {};
            $form.find('[name]:not(button):not(submit):not([type="hidden"]):not([type="button"]):not([type="submit"])').each(function(){
                var type = $(this).attr('type');
                if (type === 'checkbox' || type === 'radio'){
                   if(!$(this).prop('checked')){
                       return;
                   } 
                }
                var name = $(this).attr('name');
                data.formData[name] = $(this).val();
            });
            data.id = id;
            sessionStorage.setItem(key, JSON.stringify(data));
        });
	});
})(jQuery, window, document);
