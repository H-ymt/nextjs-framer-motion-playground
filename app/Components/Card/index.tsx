"use client";

import Image from "next/image";
import styles from "./index.module.scss";

type Props = {
  title?: string;
  description?: string;
  image?: any;
};

export default function Card({ title, description, image }: Props) {
  return (
    <>
      <div className="style.image" />
      <p>New</p>
      <div className={styles.text}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <Image className={styles.image} src={image} alt="" width={384} height={256} loading="lazy" />

      <div className={styles.overlay}></div>
    </>
  );
}
