"use client";
import Link from "next/link";
import styles from "./index.module.scss";
import { Noto_Sans_JP } from "next/font/google";

const NotoSans = Noto_Sans_JP({ subsets: ["latin"], weight: "400" });

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function Button({ href, children }: Props) {
  return (
    <Link href={href} className={NotoSans.className}>
      <button className={styles.button}>{children}</button>
    </Link>
  );
}
