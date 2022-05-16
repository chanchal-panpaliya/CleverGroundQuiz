export const get_Category_Type = (data,type)=>{
    if(data.length>0 && type!==""){
        if(type==="All"){
            return data
        }else{
            return data.filter((item) => item.CategoryType === type);
        }  
    }else{
        return data
    }      
}

export const get_SORT_DATA =(data,type)=>{
    if(type==="asc-by-title"){
       return [...data].sort((a, b) => a.CategoryType.toUpperCase().localeCompare(b.CategoryType.toUpperCase(), "de", { sensitivity: "base" }));
    }
    
    if(type==="dec-by-title"){
        return [...data].sort((a, b) => b.CategoryType.toUpperCase().localeCompare(a.CategoryType.toUpperCase(), "de", { sensitivity: "base" }));
    }

    if(type==="clear"){
          return data
    }

    return data 
}

export const get_search=(data,name)=>{
    return data.filter((item) =>
    item.CategoryType.toLowerCase().includes(name.toLowerCase())
  )
}