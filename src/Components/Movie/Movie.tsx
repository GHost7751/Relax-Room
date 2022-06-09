import React, { FC, useEffect, useState } from 'react';
import Spinner from '../../Layout/Spinner/Spinner';
import { fetchMovie } from '../../Service/FetchMovie';
import { MovieCard } from './MovieCard';

const Movie:FC = () => {
    const [value,setValue] = useState<Array<any>>([])
    const [loading,setLoading] = useState<boolean>(false);

    const moviejob = fetchMovie()

    console.log(moviejob)
      

    const movie =  async () : Promise<void> => {
        setLoading(true)  
        setValue(await fetchMovie())
    }
    
    useEffect(() => {
        movie()
    }, [])

    return (
        <div className='container content'>
            <br />
            <div className='movies'>
                
                {value.length ? (value
                    .map((movie) => <MovieCard key={movie.imdbID} {...movie} />)

                ) : (
                    <Spinner />
                )
                   
                }
             </div>
            <br />
        </div>
    );
};

export {Movie};