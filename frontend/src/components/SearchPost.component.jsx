import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchPost = ({ history }) => {
    const [keyword, setKeyword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        if (keyword) {
            history.push(`/search/${keyword.trim().toLowerCase()}`);
        } else {
            history.push('/');
        }
    };

    return (
        <Form inline onSubmit={submitHandler}>
            <Form.Label htmlFor="keyword" srOnly>
                Search post
            </Form.Label>
            <Form.Control
                className="my-2 mr-sm-2 ml-sm-4 p-2"
                id="keyword"
                placeholder="Input keyword(s)"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <Button type="submit">Search</Button>
        </Form>
    );
};

export default SearchPost;
