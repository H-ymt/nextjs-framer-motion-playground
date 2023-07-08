"use client";

import { Abril_Fatface } from "next/font/google";
import Button from "./Components/Button";
import styles from "./page.module.scss";
import Image from "next/image";
import Card from "./Components/Card";
import { cards } from "./utils/cards";

const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <>
      <div className={styles.heroContainer}>
        <div className={`${abril.className} ${styles.text}`}>
          <h1 className={styles.title}>Lorem ipsum dolor.</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique voluptas aliquid
            illo tempora. Ea facilis assumenda, dolorum officia quo asperiores cupiditate, fugiat
            maxime consectetur id ducimus labore magnam consequatur exercitationem numquam
            voluptates?
          </p>
          <div className={styles.button}>
            <Button href="/">Button</Button>
          </div>
        </div>

        <Image className={styles.img} src="/top-img.jpg" alt="" width={500} height={333} />
      </div>

      <div>
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          );
        })}
      </div>
    </>
  );
}
