const parseEnv = () => {
    const objEntries = Object.entries(process.env);
    const arrOfEntriesStartsWirhPrefix = objEntries.filter((item) => item[0].includes('RSS_'))
    const finalString = arrOfEntriesStartsWirhPrefix.reduce((acc, item,index) => {
        const [key,value]=item
        const str = `${acc}; ${key}=${value}`
        if(index===0){
            return str.substring(2,str.length)
        }
        return str
    }, '')
    console.log(finalString)
};

parseEnv();