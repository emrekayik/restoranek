import Head from "next/head";
// import styles from "@/styles/Home.module.css";
import { Router, useRouter } from "next/router";
import styled from "styled-components";
import Masa from "@/pages/masa";

export default function Home() {
  const router = useRouter();
  console.log(router.query.masa);

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

  const Paragraph = styled.p`
    line-height: 1.5;
    font-size: 1.5rem;
    color: #0070f3;
  `;

  const Footer = styled.footer`
    position: absolute;
    bottom: 0;
    right: 0;
    color: #0070f3;
    padding: 1rem;
    font-size: 2rem;
  `;
  if (router.query.masa) {
    return <Masa masa={router.query.masa} />;
  } else {
    return (
      <>
        <Head>
          <title>RestoranEK</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container>
          <Title>RestoranEK</Title>
          <Paragraph>Lütfen masanızdaki QR kodu tekrar okutunuz.</Paragraph>
          <Footer>StudioEK</Footer>
        </Container>
      </>
    );
  }
}
