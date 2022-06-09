import React,{useState,FC} from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

interface ISearchProps {
    setSearch:(str:string) => void
}

const Search:FC<ISearchProps> = (props) => {
    const {
        setSearch = Function.prototype
    } = props;
    const [str,setStr] = useState<string>('');
    const  handleKey = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            setSearch(str);
        }
    };
    return (
        <div>
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={str}
                    onChange={(e) =>
                        setStr(e.target.value)}
                    
                />
                <Button variant="outline-success"
                onClick={() =>
                    setSearch(str)
                }
                onKeyDown={handleKey}
                >Search</Button>
            </Form>
        </div>
    );
};

export  {Search};
