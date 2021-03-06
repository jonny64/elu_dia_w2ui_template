define ([], function () {

    $_DO.toggle_user_own_options = function (e) {

        var g = w2ui ['user_own_options_grid']
        
        var data = {}

        var r = g.get (data.id_voc_user_option = e.recid)

        data.is_on = 1 - (r.user_option.is_on || 0)

        if (!confirm ((data.is_on ? 'Установить' : 'Снять') + ' опцию "' + r.label + '"?')) return

        query ({type: 'users', action: 'set_own_option'}, {data: data}, function () {        
        
            window.__LOGOUT__ = 1

            $_USER.opt [r.name] = data.is_on

            localStorage.removeItem ('user')
            localStorage.setItem ('user', 1)
            $_SESSION.set ('user', $_USER)

            delete window.__LOGOUT__
            
            location.reload ()
            
        })

    }

    return function (done) {
 
        done ({})
   
    }

})