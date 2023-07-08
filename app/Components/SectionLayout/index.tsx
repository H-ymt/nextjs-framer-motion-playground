import styles from "./index.module.scss";

type Props = {
  children: React.ReactNode;
};

export default function SectionLayout({ children }: Props) {
  return <div className={styles.sectionLayout}>{children}</div>;
}
