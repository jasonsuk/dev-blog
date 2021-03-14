import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

import FormContainer from '../components/FormContainer.component.jsx';
import Loader from '../components/Loader.component.jsx';

import { updatePost } from '../redux/actions/postActions.js';
import { POST_UPDATE_RESET } from '../redux/constants/postConstants.js';

const PostEditPage = ({ match, history }) => {
    // Data to send for update
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [image, setImage] = useState('/images/updated.jpg');
    const [tags, setTags] = useState([]);
    const [uploading, setUploading] = useState(false);

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

    const userLogIn = useSelector((state) => state.userLogIn);
    const { userInfo } = userLogIn;

    const postUpdate = useSelector((state) => state.postUpdate);
    const { success: successUpdate } = postUpdate;

    // Dispatch actions
    const dispatch = useDispatch();

    useEffect(() => {
        if (successUpdate) {
            history.push('/admin/postList');
            dispatch({ type: POST_UPDATE_RESET });
        } else {
            console.log('Update failed');
        }
    }, [successUpdate, dispatch, history]);

    const fileUploadHandler = async (e) => {
        // Get info of uploaded file
        const file = e.target.files[0];
        // Create a form data (key-value object) to send
        const formData = new FormData(); // instantiate
        formData.append('image', file);
        setUploading(true);

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            };

            const { data } = await axios.post('/api/uploads', formData, config);
            setImage(data);
            setUploading(false);
            //
        } catch (error) {
            console.error(error);
            setUploading(false);
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            updatePost({
                _id: match.params.id,
                title,
                body,
                image,
                tags,
                user: userInfo._id,
            })
        );
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

<<<<<<< HEAD
||||||| d14a000
    console.log(image);

=======
    console.log(image);
    console.log(setUploading);

>>>>>>> 35ec72b0619e8882c5865c2840c508c1b557172e
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
                        <Form.Label>
                            Image upload (jpeg|jpg|png|gif only)
                        </Form.Label>
                        <Form.Control
                            type="text"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                        <Form.File
                            id="image-upload"
                            label="Click here to upload"
                            custom
                            onClick={fileUploadHandler}
                        />
                        {uploading && <Loader />}
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
