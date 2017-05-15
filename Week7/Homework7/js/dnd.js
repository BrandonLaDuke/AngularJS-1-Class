$("#draggable").draggable({
    drag: function(event, ui) {
        $(this).removeClass('dropClass');
    }
});


$("#droppable").droppable({
    tolerance: 'intersect',
    // Add .hoverClass whenever #draggable is being hovered over #droppable
    over: function(event, ui) {
        $('.ui-draggable-dragging').addClass('hoverClass').removeClass('up');
    },
    // Remove .hoverClass whenever #draggable is no longer hovered over #droppable
    out: function(event, ui) {
        $('.ui-draggable-dragging').removeClass('hoverClass').addClass('up');
    },
    // Add .dropClass whenever #draggable is dropped on #droppable
    drop: function(event, ui) {
        $('.ui-draggable-dragging').removeClass('hoverClass').addClass('dropClass');
    }
});
