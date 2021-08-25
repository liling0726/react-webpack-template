

module.exports = ()=>{
    const arr = []
    for(let i=0;i<5;i++){
        arr.push({
            i: Math.random().toString().substring(2)
        })
    }
    return {
        result:1,
        data:arr
    }
}