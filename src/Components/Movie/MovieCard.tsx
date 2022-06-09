import React, { FC } from 'react';
import { Button, Card } from 'react-bootstrap';
import MovieProps from '../../Types/TypesMovie';

const MovieCard:FC<MovieProps> = (props) => {
    const {
        Title,
        Year,
        imdbID,
        Type,
        Poster
    } = props

    return (
        <div>
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
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export {MovieCard};