import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteAuthorBooks } from '../api/mergedData';

export default function AuthorCard({ authorObj, onUpdate }) {
  const deleteThisAuthor = () => {
    if (window.confirm(`Delete ${authorObj.first_name}?`)) {
      deleteAuthorBooks(authorObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{authorObj.first_name} {authorObj.last_name}</Card.Title>
          <Card.Text>
            {authorObj.email}
            <p className="card-text bold">{authorObj.favorite} </p>
          </Card.Text>
          <Link href={`/author/edit/${authorObj.firebaseKey}`} passHref>
            <Button variant="success" className="m-2">VIEW</Button>
          </Link>
          <Link href={`/author/edit/${authorObj.firebaseKey}`} passHref>
            <Button variant="info">EDIT</Button>
          </Link>
          <Button variant="danger" onClick={deleteThisAuthor} className="m-2">DELETE</Button>
        </Card.Body>
      </Card>
    </>

  );
}

AuthorCard.propTypes = {
  authorObj: PropTypes.shape({
    email: PropTypes.string,
    favorite: PropTypes.bool,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    uid: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
