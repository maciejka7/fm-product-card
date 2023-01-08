import React from "react";
import { Button, Card, Price } from "../components";
import cardImage from "../../public/image-product-mobile.jpg";

type Props = {};

const components: { title: string; component: React.ReactElement }[] = [
  {
    title: "Button Component",
    component: (
      <Button
        handleAction={() => console.log("button action")}
        text="Add to cart"
      />
    ),
  },
  {
    title: "Price Component",
    component: <Price oldPrice={169.99} currentPrice={149.99} />,
  },
  {
    title: "Card Component",
    component: (
      <Card
        title="Gabrielle Essence Eau De Parfum"
        imgSrc={cardImage}
        tag="perfume"
        description="A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL."
        currentPrice={149.99}
        oldPrice={169.99}
        buttonText="Add to cart"
      />
    ),
  },
];

export const ComponentsPage = (props: Props) => {
  return (
    <main className="flex flex-col gap-8 p-8">
      <h1 className="text-2xl">Components</h1>
      {components.map((component) => (
        <section className="border-b pb-4">
          <h3 className="mb-2 text-xl">{component.title}</h3>
          {component.component}
        </section>
      ))}
    </main>
  );
};

export default ComponentsPage;
