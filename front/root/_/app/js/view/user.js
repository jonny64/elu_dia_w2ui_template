define ([], function () {

    var $butt
        
    $_F5 = function (data) {

        __d (data)
                
        w2ui ['form'].record = data
                 
        fill ($butt, data, $('.w2ui-buttons'))

        $('main input').prop ({disabled: data.__read_only})
        
        w2ui ['form'].refresh ()

    }
        
    return function (data, view) {
    
        $('body').data ('data', data)
    
        $butt = $('.w2ui-buttons > span', view)
        
        __d (data)

        $('title').text (data.label)
        
        var layout = $('main').w2layout ({

            name: 'main',

            panels: [
                { type: 'top', size: 230},
                { type: 'main', size: 400,

                    tabs: {

                        tabs: [
                            { id: 'user_options', caption: 'Опции'},
                        ],

                        onClick: $_DO.choose_tab_user

                    }                

                },
            ],
            
            onRender: function (e) {
                this.get ('main').tabs.click (data.active_tab)
            }
            
            
        });

        var $panel = $(layout.el ('top'))
        
        fill (view, data, $panel)
                
        var $form = $panel.w2form ({ 

                name   : 'form',
                
                fields : [
                
                    { name: 'label', type: 'text', required: true},
                    { name: 'login', type: 'text', required: true},
                    { name: 'mail',  type: 'text'},
//                    { name: 'is_read_only', type: 'checkbox'},
                ],            
                
                onRefresh: refreshButtons

        })
                        
        $_F5 (data)

    }

});