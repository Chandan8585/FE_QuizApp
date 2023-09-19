const getFilterByCategory = (products, category)=> {
    let filteredData = [];
    if(category !== "all"){
        filteredData = products.filter(
            ({ itemCategory }) => itemCategory === category
          );
    } else{
        filteredData = [...products]
    }
     return filteredData;
}

export{ getFilterByCategory };