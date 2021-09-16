import React from "react";
import { Helmet } from "react-helmet";
import MainBanner from "../components/Web/MainBanner";
import WhatsappView from "../components/Web/Whatsapp";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="Home"
          data-react-helmet="true"
        />
      </Helmet>
      <WhatsappView />
      <MainBanner />
    </>
  );
}
