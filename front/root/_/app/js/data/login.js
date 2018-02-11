define ([], function () {

    $_DO.execute_login = function (e) {
        
        var param = values ($('main'))
        
        w2ui ['form'].lock ()

        query ({type: 'sessions', action: 'create'}, {data: param}, function (data) {

            w2ui ['form'].unlock ()

            if (!data || !data.user) return alert ('Ошибка аутентификации')

            $_SESSION.start (data.user, data.timeout)
            
            localStorage.setItem ('id_voc_user_domain', param.id_voc_user_domain)
            
            location.reload ()

        })

    }

    return function (done) {
    
        var data = {}
                
        done (data)
        
    }
    
})