async function csv(url='survey_2019.csv'){
    let txt = await (await fetch(url)).text()    
    return txt.split(/[\r\n]+/g).map(r=>r.split(','))
}

export {csv}