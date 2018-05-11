;(function($, window, document) {
	$('document').ready(function () {
        const storagePrefix = 'marttiphpb_keeppost_';
        var $textarea = $('textarea[data-marttiphpbb-keeppost]')[0];
        if ($textarea){
            var data = $($textarea).data('marttiphpbb-keeppost');
            var codeMirror = Keep Post.fromTextArea($textarea, data.config); 
            var $form = $textarea.closest('form');
            if ($form && data.historyId){
                function hash32(str){
                    var i, l, h = 0x49e335be;
                    for (i = 0, l = str.length; i < l; i++){
                        h ^= str.charCodeAt(i);
                        h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24);
                    }
                    return ('0000000' + (h >>> 0).toString(16)).substr(-8);
                }
                var hash = hash32($($textarea).val());
                console.log('marttiphpbb/keeppost hash: '+hash);
                var storageKey = storagePrefix+hash+'_'+data.historyId;
                var history = sessionStorage.getItem(storageKey);
                if (history){
                    codeMirror.setHistory(JSON.parse(history));
                }
                $($form).submit(function(){   
                    history = JSON.stringify(codeMirror.getHistory());
                    hash = hash32(codeMirror.getValue());
                    var newKey = storagePrefix+hash+'_'+historyId;
                    if (newKey !== storageKey){
                        sessionStorage.setItem(newKey, history);
//                        sessionStorage.removeItem(storageKey);
                    }
                });
            }    
            $('select[data-marttiphpbb-keeppost-theme]').change(function(){
                codeMirror.setOption('theme', $(this).find('option:selected').text());
            });
            $('select[data-marttiphpbb-keeppost-mode]').change(function(){
                codeMirror.setOption('mode', $(this).find('option:selected').text());
            });
            $('select[data-marttiphpbb-keeppost-keymap]').change(function(){
                codeMirror.setOption('keyMap', $(this).find('option:selected').text());
            });
            $('input[data-marttiphpbb-keeppost-border]').change(function(){
                if (this.value){
                    $('div.Keep Post').addClass('marttiphpbb-keeppost-border');
                } else {
                    $('div.Keep Post').removeClass('marttiphpbb-keeppost-border');
                }
            });         
            window.marttiphpbbKeep Post = codeMirror;
        }
	});
})(jQuery, window, document);
