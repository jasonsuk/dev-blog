import React from 'react';
import { Container, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    return (
        <>
            <Card
                style={{ minHeight: '8rem' }}
                className="rounded my-2 p-2 text-center"
                bg="white"
                text="dark"
            >
                {post.image.length > 0 && (
                    <Link to={`/post/${post._id}`}>
                        <Card.Img variant="top" src={post.image} />
                    </Link>
                )}
                <Card.Body>
                    <Card.Title as="h6">
                        {post.title.length > 50
                            ? post.title.substring(0, 50) + ' ... '
                            : post.title}
                    </Card.Title>
                    <Container className="custom-badge">
                        {post.tags &&
                            post.tags.map((tag) => (
                                <Badge pill variant="light">
                                    {tag}
                                </Badge>
                            ))}
                    </Container>
                </Card.Body>
            </Card>
        </>
    );
};

export default Post;
