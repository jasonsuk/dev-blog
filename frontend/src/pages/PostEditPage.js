import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';

import FormContainer from '../components/FormContainer.component.jsx';

const PostEditPage = () => {
    // Data to send for update
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [image, setImage] = useState('');
    const [tags, setTags] = useState([]);

    // Set an array of tags
    const availableTags = [
        'software engineering',
        'analysis',
        'database',
        'programming',
        'machine learning',
        'deep learning',
        'math',
        'statistics',
    ];

    // Get states
    //     const userLogIn = useSelector((state) => state.userLogIn);
    //     const { userInfo } = userLogIn;
    //
    //     // Dispatch actions
    //     const dispatch = useDispatch();
    //
    //     useEffect(() => {}, []);

    const fileUploadHandler = () => {
        console.log('Image uploaded');
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('Post updated!');
    };

    const tagSelector = (e) => {
        // If tags has more than 3 values
        // remove the very first one
        if (tags.length > 2) {
            tags.shift();
        }

        // Include the newly selected tag
        setTags([...tags, e.target.value]);
    };

    return (
        <div>
            <h1>Update post</h1>
            <FormContainer>
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId="title">
                        <Form.Label></Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Write a title of the post"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="body">
                        <Form.Label>Body of the post</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Write a body of the post"
                            rows={10}
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Image upload (jpg, png only)</Form.Label>
                        <Form.Control
                            type="text"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />

                        <Form.File
                            id="image"
                            label="Click here upload "
                            custom
                            onClick={fileUploadHandler}
                        />
                    </Form.Group>
                    <Form.Group controlId="tags">
                        <Form.Label>Select up to 3 tags</Form.Label>
                        <Form.Control
                            as="select"
                            multiple
                            value={tags}
                            onChange={(e) => tagSelector(e)}
                        >
                            {availableTags.map((tagItem, tagId) => (
                                <option key={tagId}>{tagItem}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Button
                        variant="primary"
                        type="submit"
                        className="btn btn-block"
                    >
                        Update
                    </Button>
                </Form>
            </FormContainer>
        </div>
    );
};

export default PostEditPage;
