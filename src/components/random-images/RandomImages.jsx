import './randomImage.styles.scss';
import { useEffect, useState } from 'react';
import { Api } from '../../utils/utils';
import Spinner from '../loading-spinner/Spinner';
import { API_KEY } from '../../utils/constants';
 


const RandomImages =() =>{
    const [randomImages , setRandomImages ] = useState({});
    const [isLoading, setIsLoading] = useState(false);


    useEffect( () => {
        fetchImages();
      },[])

    useEffect( () => {
        let timer = setTimeout(() => setIsLoading(false), 300);   
        return () => {
            clearTimeout(timer);
          };
      },[randomImages])

    const fetchImages = async () =>{
        const url = `https://api.unsplash.com/photos/random?client_id=${API_KEY}&count=1`;
        setIsLoading(true);
        const data = await Api(url ,"get");
        const [image] = data;   
        setRandomImages(image);
    }
    return(
        <>
        {isLoading && <Spinner />}    
        <div className='image-container'>        
            <img onClick={fetchImages} className="image" src={randomImages?.urls?.regular}/>
        </div>
        </>
    )
}

export default RandomImages 