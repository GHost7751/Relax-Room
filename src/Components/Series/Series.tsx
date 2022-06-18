import { Pagination } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import Spinner from '../../Layout/Spinner/Spinner';
import { fetchSeries } from '../../Service/FetchSeries';
import APIProps from '../../Types/TypesAPI';
import { Search } from '../Search/Search';
import { SeriesCard } from './SeriesCard';

const Series:FC = () => {
    const [value,setValue] = useState<APIProps[]>([])
    const [loading,setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [search,setSearch] = useState<string>('matrix')

   

    const series =  async () : Promise<void> => {
        setLoading(true)  
        setValue(await fetchSeries(search,page))
    }
    
    useEffect(() => {
        series()
    }, [search,page])

    return (
        <div className='container content'>
            <br />
            <Search setSearch={setSearch} />
            <br />
            <div className='movies'>
                
                {value.length ? (value
                    .map((series) => <SeriesCard key={series.imdbID} {...series} />)

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

export {Series};