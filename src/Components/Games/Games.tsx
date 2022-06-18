import { Pagination } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import Spinner from '../../Layout/Spinner/Spinner';
import { fetchGames } from '../../Service/FetchGames';
import { Search } from '../Search/Search';
import { GamesCard } from './GamesCard';
import APIProps from '../../Types/TypesAPI';


const Games:FC = () => {
    const [value,setValue] = useState<APIProps[]>([])
    const [loading,setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [search,setSearch] = useState<string>('matrix')

   

    const games =  async () : Promise<void> => {
        setLoading(true)  
        setValue(await fetchGames(search,page))
    }
    
    useEffect(() => {
        games()
    }, [search,page])

    return (
        <div className='container content'>
            <br />
            <Search setSearch={setSearch} />
            <br />
            <div className='movies'>
                
                {value.length ? (value
                    .map((game) => <GamesCard key={game.imdbID} {...game} />)

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

export {Games};