$(document).ready(function() {
    
    $(".draggable").draggable({
        connectToSortable: ".canvas",
        opacity: 0.7,
        helper: 'clone',//function( event ) {
        //     return $( '<div class="drag">'+
        //     '<div class="row">'+
        //         '<div class="col m12 column">ndnfdnjfdjf</div>'+
        //     '</div>'+
        // '</div>' );
        // },
        // helper: 'clone',
        // handle: ".drag",
        drag: function(event, ui) {
            // console.log(event);
            // console.log(event.target);
            ui.helper.width(400);
            // event.originalEvent.dataTransfer.setData('...', '...');
            // event.target.style.border = "dashed";
            // Español
            // capturo el hermano a previsualizar que identifica el elemento a arrastar
            // Ejemplo. si arrastro un col s12 m12 l12, entonces me muestra el div con esa configuración
            //English
            // I capture the siblings() to preview that identifies the element to drag
            // Example. if I drag a col s12 m12 l12, then it shows me the div with that configuration
            console.log($(event.target).siblings().find('.view'));
        },
        stop: function( event, ui ) {
            $('.canvas .column').sortable({ 
                opacity : 0.35,
                connectWith: '.column'
            });
        }
    });
    
    $("#ccanvas").droppable({
        drop: eventDrop
    });
    
    // Cuando se suelta un objeto en el canvas
    function eventDrop(event, ui) {
        var obj = ui.draggable[0]; 
        console.log(obj);
        alert('soltado ' + obj.id);
        
    }

    $(".sortable").sortable({
        revert: true
    });
});

