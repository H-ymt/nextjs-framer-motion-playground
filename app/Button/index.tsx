"use client";
import Link from "next/link";
import styles from "./index.module.scss";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function Button({ href, children }: Props) {
  return (
    <Link href={href}>
      <button className={styles.button}>{children}</button>
    </Link>
  );
}
