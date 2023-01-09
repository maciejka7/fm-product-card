import React from "react";
import { Card } from "../components";

import cardImageMobile from "../../public/image-product-mobile.jpg";
import cardImageDesktop from "../../public/image-product-desktop.jpg";



export const MainPage = () => {
  return (
    <div className="flex justify-center items-center h-full bg-[#F3EAE3]">
      {" "}
      <Card
        title="Gabrielle Essence Eau De Parfum"
        imageProps={{
          imgSrc: { mobile: cardImageMobile, desktop: cardImageDesktop },
        }}
        tag="perfume"
        description="A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL."
        currentPrice={149.99}
        oldPrice={169.99}
        buttonText="Add to cart"
      />
    </div>
  );
};
