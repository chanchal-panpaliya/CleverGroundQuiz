export const get_Category_Type = (data:any,type:any)=>{
    if(data.length>0 && type!==""){
        if(type==="All"){
            return data
        }else{
            return data.filter((item:any) => item.CategoryType === type);
        }  
    }else{
        return data
    }      
}

export const get_SORT_DATA =(data:any,type:any)=>{
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

export const get_search=(data:any,name:any)=>{
    return data.filter((item:any) =>
    item.CategoryType.toLowerCase().includes(name.toLowerCase())
  )
}