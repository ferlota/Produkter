import { useEffect, useState } from 'react';
import { getProductByText }    from '../helpers/getProductByText';

export const useFetchResults = ( searchTxt ) => {
 
    const [results, setResults]     = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getResults = async() => {
        const newResults = await getProductByText( searchTxt );
        setResults(newResults);
        setIsLoading(false);
    }
    
    useEffect( () => {
        getResults();
    }, []);


    return {
        results,
        isLoading
    }

}