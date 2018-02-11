define ([], function () {

    return function (data, view) {

        $(view).w2popup ('open', {
        
            width  : 260,
            height : 290,

            title   : 'Новая учётная запись',
            
            onOpen: function (event) {
            
                var p = this
            
                $_DRAW.users_new = function () {
                    p.close ()
                }

                event.onComplete = function () {               
                    
                    $('.w2ui-form .the_table_container').w2regrid ({ 

                        name: 'rolesGrid', 

                        show: {
                            toolbar: false,
                            footer: false,
                            selectColumn: true,
                            toolbarColumns: false,
                            toolbarReload: false,
                            columnHeaders: true,
                        },

                        columns: [                
                            {field: 'text',        caption: 'Роль',      size: 150},
                        ],

                        records: data.roles,

                        recid: 'id',

                        multiSelect: false,

                    })
                    .refresh ()

                    clickOn ($('.w2ui-buttons button[name=update]'), $_DO.update_users_new)

                }
                
            }
            
        })
    
    }    
    
})