import styled from "styled-components";

function HomePage() {
  return (
    <Wrapper>
      <TextContent>
        <p>
          Welcome to Our store, your one-stop shop for all things! Discover a
          wide selection of high-quality products at competitive prices, all
          from the comfort of your own home. Browse our latest arrivals, explore
          our curated collections, and find exactly what you are looking for.
          Enjoy a seamless online shopping experience with secure checkout and
          fast shipping. Start shopping today and experience the difference!
        </p>
      </TextContent>
      <ImageContainer>
        <HomeImage
          src="https://www.creativefabrica.com/wp-content/uploads/2021/03/02/Shopping-bag-Hand-holding-a-shopping-Graphics-9096002-1.png"
          alt="Shopping Bag"
        />
      </ImageContainer>
    </Wrapper>
  );
}

export default HomePage;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 70vh;
  padding: 2rem;
  font-family: "Arial", sans-serif;
  background-color: #f8f8f8;
`;

const TextContent = styled.div`
  width: 50%;
  padding: 3rem;
  font-size: 1.2rem;
  line-height: 1.6;
  color: navy;
  text-align: justify;
`;

const ImageContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomeImage = styled.img`
  max-width: 90%;
  height: auto;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;
