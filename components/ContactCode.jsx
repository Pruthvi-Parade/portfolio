import styles from "../styles/ContactCode.module.css";

const contactItems = [
  {
    social: "website",
    link: "pruthviparade.me",
    href: "https://nitinranganath.me",
  },
  {
    social: "email",
    link: "parade.pruthvi@gmail.com",
    href: "mailto:parade.pruthvi@gmail.com",
  },
  {
    social: "github",
    link: "Pruthvi-Parade",
    href: "https://github.com/Pruthvi-Parade",
  },
  {
    social: "linkedin",
    link: "pruthvi-parade",
    href: "https://www.linkedin.com/in/pruthvi-parade-2040b0248/",
  },
  {
    social: "instagram",
    link: "parade_pruthvi",
    href: "https://www.instagram.com/parade_pruthvi/",
  },
];
  // {
  //   "id": 1,
  //   "name": "RFID Dashboards",
  //   "image": "/RFID_Dashboard.png",
  //   "description": "A platform for Retail stores to manage their inventory",
  //   "tags": ["React_JS", "FastAPI", "Postgres", "Redux", "Docker", "Ant-D"],
  //   "source_code": "https://github.com/Pruthvi-Parade/dashboard"
  // },
const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
