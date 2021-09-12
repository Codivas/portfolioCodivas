
(function ($) {
    jQuery.expr[':'].Contains = function(a,i,m){
        return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
    };

    function listFilter(header, list) {
        var form = $("<form>").attr({"class":"filterform","action":"#"}),
            input = $("<input>").attr({"class":"filterinput","type":"text","placeholder":"Busque pelo nome da aluna"});

        $(form).append(input).appendTo(header);
        $(input)
            .change( function () {
            var filter = $(this).val();
            
            if(filter) {
                $(list).find('.entry').removeClass("entry-found");
                $(list).find('.entry').removeClass("entry-notfound");

                var elementsHidden = $(list).find(".names:not(:Contains(" + filter + "))").parent();
                var elementsShown = $(list).find(".names:Contains(" + filter + ")").parent();

                elementsHidden.addClass("entry-notfound");
                elementsShown.addClass("entry-found");
                
          } else {
            $(list).find('.entry').removeClass("entry-found");
            $(list).find('.entry').removeClass("entry-notfound");
            }
            return false;
          })
        .keyup( function () {
            $(this).change();
        });
      }
    
      $(function () {
        listFilter($("#header"), $("#list"));
      });
    }(jQuery));

