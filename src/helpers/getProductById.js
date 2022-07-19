export const getProductById = async( id ) => {

    const url = `https://pfp-public-productdb-api.azurewebsites.net/api/picture/${ id }`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const productImg = data.map( img => ({
        id: img.traceId,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return productImg;
}