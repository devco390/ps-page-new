import react from 'react';
import { useRouter, Router } from 'next/router';

const Product = () => {
  const {
    query: { id }
  } = useRouter();

  return <div>Product!! {id}</div>;
};

export default Product;
