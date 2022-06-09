import { Pagination } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import Spinner from '../../Layout/Spinner/Spinner';
import { fetchMovie } from '../../Service/FetchMovie';
import { Search } from '../Search/Search';
import { MovieCard } from './MovieCard';

const Movie:FC = () => {
    const [value,setValue] = useState<Array<any>>([])
    const [loading,setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [search,setSearch] = useState<string>('matrix')

   

    const movie =  async () : Promise<void> => {
        setLoading(true)  
        setValue(await fetchMovie(search,page))
    }
    
    useEffect(() => {
        movie()
    }, [search,page])

    return (
        <div className='container content'>
            <br />
            <Search setSearch={setSearch} />
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
            <Pagination  className='pagination'
        count={10}
            page={page}
            onChange={(_,num) => setPage(num)}
        />
        </div>
    );
};

export {Movie};