import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function AuthorCard({ authorObj }) {
  // const deleteThisAuthor = () => {
  //   if (window.confirm(`Delete ${authorObj.first_name}?`)) {
  //     deleteSingleAuthor(authorObj.firebaseKey).then(() => onUpdate());
  //   }
  // };
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{authorObj.first_name} {authorObj.last_name}</Card.Title>
        <Card.Text>
          {authorObj.email}
          <p className="card-text bold">${authorObj.favorite} </p>
        </Card.Text>
        <Button variant="success">??</Button>
        <Button variant="info">??</Button>
        <Button variant="danger">??</Button>
      </Card.Body>
    </Card>
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
};
