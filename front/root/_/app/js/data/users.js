define ([], function () {

    return function (done) {
    
        query ({type: 'roles'}, {}, function (data) {
        
            data.roles = dia2w2uiVoc (data.roles)
            
            $('body').data ('data', data)
            
            done (data)
        
        })                   
        
    }
    
})