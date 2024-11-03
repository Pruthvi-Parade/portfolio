import Link from "next/link";
import Illustration from "../components/Illustration";
import styles from "../styles/HomePage.module.css";
export default function HomePage() {
  const CV = "/Pruthvi_Parade_Resume.pdf"
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>Digital Craftsman</h1>
          
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Pruthvi Parade</h1>
            <h6 className={styles.bio}>Full Stack Developer | AI Enthusiast</h6>
            <Link href="/projects">
              <button className={styles.button}>View Work</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contact Me</button>
            </Link>
            <Link href={CV} download >
              <button className={`btn ${styles.outlined}`}  >View My Journey</button>
            </Link>
          </div>
          <Illustration className={styles.illustration} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: "Home" },
  };
}
