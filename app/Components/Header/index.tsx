"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.scss";
import Button from "../Button";
import { useState } from "react";
import cx from "classnames";
import { FaWallet } from "react-icons/fa";

export default function Header() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const handleMenu = () => {
    setOpen(!isOpen);
  };
  const close = () => setOpen(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo} onClick={close}>
          <Image src="/next.svg" alt="logo" width={40} height={40} />
        </div>

        <div className={styles.search}>
          <input type="text" placeholder="Search" />
        </div>

        <nav className={cx(styles.nav, isOpen && styles.open)}>
          <ul className={cx(styles.list, isOpen && styles.open)}>
            <li className={styles.item} onClick={close}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.item} onClick={close}>
              <Link href="/">Auctions</Link>
            </li>
            <li className={styles.item} onClick={close}>
              <Link href="/">Marketplace</Link>
            </li>
            <li className={styles.item} onClick={close}>
              <Link href="/">About</Link>
            </li>

            <div className={styles.button}>
              <Button href="/">
                <FaWallet />
                Connect
              </Button>
            </div>
          </ul>
        </nav>
        <div className={cx(styles.mask, isOpen && styles.open)} onClick={close}></div>

        <button className={cx(styles.hamburgerButton, isOpen && styles.close)} onClick={handleMenu}>
          <Image src="/menu.svg" alt="" width={32} height={32} />
        </button>
      </header>
    </>
  );
}
