import Head from "next/head";
import { useRouter } from "next/router";
import styled from "styled-components";
import products from "@/pages/api/urunler.json";

export default function Masa({ masa }) {
  const router = useRouter();
  // console.log(router.query.masa)
  console.log(products);

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 0 0.5rem;
    background: #fff;
  `;
  const Title = styled.h1`
    line-height: 1.15;
    font-size: 4rem;
    color: #0070f3;
  `;
  const Description = styled.p`
    line-height: 1.5;
    font-size: 1.5rem;
    color: #0070f3;
  `;
  const Ul = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
  `;


  return (
    <>
      <Head>
        <title>masa {router.query.masa} - RestoranEK</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Container>
          <Title>Masa</Title>
          <Description>{masa}</Description>
          <Ul>
            {products.urunler.map((product) => (
              <li key={product.id}>
                <h3>{product.ad}</h3>
                <p>{product.description}</p>
                <p>Price: {product.fiyat}</p>
                <p>Category: {product.kategori}</p>
              </li>
            ))}
          </Ul>
        </Container>
      </Container>
    </>
  );
}
