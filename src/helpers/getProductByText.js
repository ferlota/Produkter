export const getProductById = async( text ) => {

    const url = `https://pfp-public-productdb-api.azurewebsites.net/api/product/search/?results=10`;
   
    const resp = await fetch( url,  {
                                        method: 'POST',
                                        body: JSON.stringify({searchText: text})
                                    }
                            );

    const { data } = await resp.json();

    const productResults = data.map( result => ({
        id: result.results.id,
        name: result.results.name
    }));
    
    return productResults;
}