(async function(){
    act24 = await import('./methods.js')
    // if commonJS require is being used
    if(typeof(define)!='undefined'){
        define(act24)
    }
    // acknowledge
    console.log('act24.js loaded')
})()