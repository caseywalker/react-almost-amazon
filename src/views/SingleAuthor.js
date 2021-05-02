import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleAuthor } from '../helpers/data/authorData';

export default function SingleAuthor() {
  const [author, setAuthor] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    getSingleAuthor(firebaseKey)
      .then(setAuthor);
  }, []);

  return (
    <div>
      <h2>{author.first_name}</h2>
    </div>
  );
}
