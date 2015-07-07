/**
 * Created by Administrator on 2015/7/6.
 */

(function(window, document, undefined){
    function scroll(){
        var timer = null;
        return function(e){
            if(timer){
                clearTimeout(timer);
            }
            document.body.classList.add('event-none');
            timer = setTimeout(function(){
                document.body.classList.remove('event-none');
                timer = null;
            }, 100);
        }
    }
    var timer = null;
    window.addEventListener('scroll', scroll());
})(window, document);