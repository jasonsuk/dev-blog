import React from 'react';
import { Container, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    return (
        <>
            <Card
                style={{ minHeight: 300 }}
                className="rounded my-2 p-2 text-center"
                bg="white"
                text="dark"
            >
                {post.image.length > 0 && (
                    <Link to={`/post/${post._id}`}>
                        <Card.Img
                            style={{ width: 220, height: 200 }}
                            variant="top"
                            src={post.image}
                            fluid
                        />
                    </Link>
                )}
                <Card.Body>
                    <Link to={`/post/${post._id}`}>
                        <Card.Title as="h6" style={{ minHeight: 50 }}>
                            {post.title.length > 50
                                ? post.title.substring(0, 50) + ' ... '
                                : post.title}
                        </Card.Title>
                    </Link>
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
