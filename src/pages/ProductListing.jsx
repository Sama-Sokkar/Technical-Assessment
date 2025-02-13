import { useEffect, useState } from "react";
import styled from "styled-components";

function ProductListing() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`HTTP error!`);
        }
        const json = await response.json();
        setProducts(json);

        console.log("Products fetched:", json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Wrapper>
      <h1>Product Listing Page</h1>
      <ProductList className="products-list">
        {products.map((product) => (
          <ProductItem key={product.id} className="product-item">
            <ProductImage src={product.image} alt={product.title} />
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPrice>Price: ${product.price}</ProductPrice>
            <ProductCategory>Category: {product.category}</ProductCategory>
          </ProductItem>
        ))}
      </ProductList>
    </Wrapper>
  );
}

export default ProductListing;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const ProductItem = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.02);
  }
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const ProductTitle = styled.h3`
  margin-bottom: 5px;
  font-size: 1.2rem;
`;

const ProductPrice = styled.p`
  margin-bottom: 5px;
`;

const ProductCategory = styled.p`
  color: #aaa;
`;
