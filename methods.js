async function csv(txt='survey_2019.csv'){
    if(txt.match(/\.csv$/)){
        txt = await (await fetch(txt)).text()
    }
    return txt.split(/[\r\n]+/g).map(r=>r.split(',')).slice(0,-1) // leaving trailing blank out
}

async function data(arr='survey_2019.csv'){
    if(typeof(arr)=='string'){
        arr=await csv(arr)
    }
    let obj={}
    arr[0].forEach((x,i)=>{
        obj[x]=arr.slice(1,-1).map(r=>r[i]).map(v=>{
            // parsing type
            switch (x){
                case 'SURVEYDATE':
                    return (new Date(v))
                    break;
                default:
                    return v
            }
        })
    })
    //debugger
    return obj
    
}

export {csv,data}