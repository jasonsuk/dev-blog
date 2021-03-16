import React from 'react';
import { Container, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    const postCardStyle = {
        minHeight: '500px',
        borderRadius: '15px',
        margin: '2rem 0',
        padding: '2rem 0',
        textAlign: 'center',
        background: '#f4f4f4',
    };

    const postBadgeStyle = {
        margin: '1px 3px',
        padding: '5px 10px',
        borderRadius: '15px',
        background: '#2b3e4f',
        fontSize: '1rem',
    };

    return (
        <>
            <Card style={postCardStyle}>
                {post.image.length > 0 && (
                    <Link to={`/post/${post._id}`}>
                        <Card.Img
                            style={{ width: 220, height: 200 }}
                            variant="top"
                            src={post.image}
                        />
                    </Link>
                )}
                <Card.Body>
                    <Link to={`/post/${post._id}`}>
                        <Card.Title as="h3" style={{ minHeight: 50 }}>
                            {post.title.length > 50
                                ? post.title.substring(0, 50) + ' ... '
                                : post.title}
                        </Card.Title>
                    </Link>
                    <Container className="custom-badge">
                        {post.tags &&
                            post.tags.map((tag, i) => (
                                <Badge key={i} style={postBadgeStyle}>
                                    {i <= 3 && tag}
                                </Badge>
                            ))}
                    </Container>
                </Card.Body>
            </Card>
        </>
    );
};

export default Post;
