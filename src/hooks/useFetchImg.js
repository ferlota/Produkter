import { useEffect, useState } from 'react';
import { getProductById }      from '../helpers/getProductById';

export const useFetchImg = ( idImg ) => {
 
    const [images, setImages]       = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getProductById( idImg );
        setImages(newImages);
        setIsLoading(false);
    }
    
    useEffect( () => {
        getImages();
    }, []);



    return {
        images,
        isLoading
    }

}
