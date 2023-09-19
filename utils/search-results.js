const getSearchedResults = (product, searchResult)=> {
    const filteredProduct = product.filter(({ title, category }) => {
          return (
            title.toLowerCase().includes(searchResult.toLowerCase()) ||
            category.toLowerCase().includes(searchResult.toLowerCase()) 
          );
    });
  return filteredProduct;
}

export {getSearchedResults};