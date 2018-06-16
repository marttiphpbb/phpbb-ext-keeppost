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
                $form.find('input[type="checkbox"]').prop('checked', false);
                $.each(data.formData, function(name, value){
                    var $el = $form.find('[name="'+name+'"]');
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
 /*               if (data.plupload){
                    for (i = 0; i < data.plupload.length; i++){
                        phpbb.plupload.update(data.plupload[i], 'addition', 0)                        
                    }

                }           */
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
            data.plupload = phpbb.plupload.data;
            data.id = id;
            sessionStorage.setItem(key, JSON.stringify(data));
        });
	});
})(jQuery, window, document);

/*

//<![CDATA[
    phpbb.plupload = {
        i18n: {
            'b': 'B',
            'kb': 'KB',
            'mb': 'MB',
            'gb': 'GB',
            'tb': 'TB',
            'Add Files': 'Add\x20files',
            'Add files to the upload queue and click the start button.': 'Add\x20files\x20to\x20the\x20upload\x20queue\x20and\x20click\x20the\x20start\x20button.',
            'Close': 'Close',
            'Drag files here.': 'Drag\x20files\x20here.',
            'Duplicate file error.': 'Duplicate\x20file\x20error.',
            'File: %s': 'File\x3A\x20\x25s',
            'File: %s, size: %d, max file size: %d': 'File\x3A\x20\x25s,\x20size\x3A\x20\x25d,\x20max\x20file\x20size\x3A\x20\x25d',
            'File count error.': 'File\x20count\x20error.',
            'File extension error.': 'File\x20extension\x20error.',
            'File size error.': 'File\x20size\x20error.',
            'File too large:': 'File\x20too\x20large\x3A',
            'Filename': 'Filename',
            'Generic error.': 'Generic\x20error.',
            'HTTP Error.': 'HTTP\x20error.',
            'Image format either wrong or not supported.': 'Image\x20format\x20either\x20wrong\x20or\x20not\x20supported.',
            'Init error.': 'Init\x20error.',
            'IO error.': 'IO\x20error.',
            'Invalid file extension:': 'Invalid\x20file\x20extension\x3A',
            'N/A': 'N\x2FA',
            'Runtime ran out of available memory.': 'Runtime\x20ran\x20out\x20of\x20available\x20memory.',
            'Security error.': 'Security\x20error.',
            'Select files': 'Select\x20files',
            'Size': 'Size',
            'Start Upload': 'Start\x20upload',
            'Start uploading queue': 'Start\x20uploading\x20queue',
            'Status': 'Status',
            'Stop Upload': 'Stop\x20upload',
            'Stop current upload': 'Stop\x20current\x20upload',
            "Upload URL might be wrong or doesn't exist.": 'Upload\x20URL\x20might\x20be\x20wrong\x20or\x20does\x20not\x20exist.',
            'Uploaded %d/%d files': 'Uploaded\x20\x25d\x2F\x25d\x20files',
            '%d files queued': '\x25d\x20files\x20queued',
            '%s already present in the queue.': '\x25s\x20already\x20present\x20in\x20the\x20queue.'
        },
        config: {
            runtimes: 'html5',
            url: './posting.php?mode=post&f=9',
            max_file_size: '262144b',
            chunk_size: '131072b',
            unique_names: true,
            filters: [{title: 'Images', extensions: 'gif,png,jpeg,jpg,tif,tiff,tga'},{title: 'Archives', extensions: 'gtar,gz,tar,zip,rar,ace,torrent,tgz,bz2,7z'}],
            
            headers: {'X-PHPBB-USING-PLUPLOAD': '1', 'X-Requested-With': 'XMLHttpRequest'},
            file_data_name: 'fileupload',
            multipart_params: {'add_file': 'Add\x20the\x20file'},
            form_hook: '#postform',
            browse_button: 'add_files',
            drop_element : 'message',
        },
        lang: {
            ERROR: 'Error',
            TOO_MANY_ATTACHMENTS: 'Cannot\x20add\x20another\x20attachment,\x200\x20is\x20the\x20maximum.',
        },
        order: 'desc',
        maxFiles: 0,
        data: [],
    }
    //]]>
*/