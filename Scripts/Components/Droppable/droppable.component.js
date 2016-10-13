﻿angular.module("mainModule")
    .component("droppable", {
        templateUrl: "Scripts/Components/Droppable/Droppable.html",
        controller: function () {
            var scope = this;
            var component = {};

            setTimeout(function () {
                component = $("#droppable-" + scope.id);
                component.droppable({
                    drop: function (event, ui) {
                       
                            $( this )
                              .addClass( "ui-state-highlight" )
                              .find( "p" )
                                .html( "Dropped!" );
                        
                        console.log(ui.draggable);

                    }
                });

            });

        },
        controllerAs: "scope",
        bindings: {
            id: "="
            
        }
    });