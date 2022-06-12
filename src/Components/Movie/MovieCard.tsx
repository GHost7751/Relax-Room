import React, { FC, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import MovieProps from '../../Types/TypesMovie';
import MoreInfo from '../Modal/Modal';
import {fetchMoviePlotFull} from '../../Service/FetchMovie'

const MovieCard:FC<MovieProps> = (props) => {
    const [modalShow, setModalShow] = useState<boolean>(false);
    const [data,setData] = useState<any>({})
    const [loading,setLoading] = useState<boolean>(false)
    const {
        Title,
        Year,
        imdbID,
        Type,
        Poster
    } = props

    const plotFull =  async () : Promise<void> => {
        setLoading(true)  
        setData( await fetchMoviePlotFull(imdbID))
    }

    
    return (
        <>
            <Card style={{ width: '20rem', height: '100%' }} key={imdbID}>
            {Poster === 'N/A' ? (
                 <img
                 src={`https://via.placeholder.com/300x400?text=${Title}`}
                 />
                 ) : (
                    <Card.Img variant="top" src={Poster} />
                    )}
                <Card.Body>
                    <Card.Title>{Title}</Card.Title>
                    <Card.Text>
                       Type : {Type}
                       <br />
                       Years : {Year}
                    </Card.Text>
                    <Button variant="primary" onClick={() => (setModalShow(true), plotFull())}>
                        Launch vertically centered modal
                    </Button>
                </Card.Body>
            </Card>
            <MoreInfo 
                data = {data}
                show={modalShow}
                onHide={() => setModalShow(false)} />
        </>
    );
};

export {MovieCard};
