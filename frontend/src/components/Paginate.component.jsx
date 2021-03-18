import React from 'react';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Paginate = ({ pageNumber, pageCount, keyword = '' }) => {
    return (
        <>
            <Pagination>
                <Pagination.First />
                <Pagination.Prev />

                {[...Array(pageCount).keys()].map((x) => (
                    <LinkContainer
                        key={x + 1}
                        to={
                            keyword
                                ? `/search/${keyword}/page/${x + 1}`
                                : `/page/${x + 1}`
                        }
                    >
                        <Pagination.Item active={x + 1 === pageNumber}>
                            {x + 1}
                        </Pagination.Item>
                    </LinkContainer>
                ))}

                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        </>
    );
};

export default Paginate;
