import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { viewAuthorDetails } from '../../api/mergedData';
import { getAuthorBooks } from '../../api/authorData';
import BookCard from '../../components/BookCard';

export default function ViewAuthor() {
  const router = useRouter();
  // Grab fireabseKey from url
  const { firebaseKey } = router.query;
  const [authorDetails, setAuthorDetails] = useState([]);
  const [authorsBooks, setAuthorBooks] = useState([]);

  // make call to API layer to get the data
  useEffect(() => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  }, [firebaseKey]);

  useEffect(() => {
    getAuthorBooks(firebaseKey).then(setAuthorBooks);
  }, [firebaseKey]);

  return (
    <>
      <div className="text-white ms-5 details">
        <h5>
          Author Name {authorDetails.first_name} {authorDetails.last_name}
        </h5>
        Author Email: <a href={`mailto:${authorDetails?.email}`}>{authorDetails?.email}</a>
        <p>Books by {authorDetails.first_name} {authorDetails.last_name}</p>
      </div>
      <div className="d-flex flex-wrap">
        {authorsBooks.map((book) => (
          <BookCard key={book.firebaseKey} bookObj={book} />
        ))}
      </div>
    </>
  );
}
