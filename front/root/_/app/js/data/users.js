define ([], function () {

    return function (done) {
    
        query ({type: 'roles'}, {}, function (data) {
        
            add_vocabularies (data, {roles: 1})
            
            $('body').data ('data', data)
            
            done (data)
        
        })                   
        
    }
    
})