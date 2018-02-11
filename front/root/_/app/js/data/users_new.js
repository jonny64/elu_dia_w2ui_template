define ([], function () {

    $_DO.update_users_new = function (e) {

        var g = w2ui ['rolesGrid']
        
        var ids = g.getSelection ()
        
        if (!ids || !ids.length) return alert ('Вы не выбрали роль');
        
        query ({
        
            type: 'users', 
            action: 'create'
        
        }, {data: {id_role: ids [0]}}, function (data) {
        
            $_DRAW.users_new ()

            var uri = '/users/' + data.uuid
            
            openTab (uri, uri)
        
        })
    
    }

    return function (done) {
                    
        done ($('body').data ('data'))
            
    }
    
})