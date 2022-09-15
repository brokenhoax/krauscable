import styles from "./about.module.css";

const Kraus = () => {
  return (
    <div className={`${styles.about}`}>
      <h1 className={styles.header}>
        Experience the best in movies, entertainment, sports, news and kids
        programming with{" "}
        <span className={styles.callout}>Kraus Cable Television</span>
      </h1>
      <p className={`${styles.text}`}>
        Arthur A. Kraus started the Kraus radio repair business in the
        depression year of 1932. As a startup business, he needed to supplement
        his income by working with other local industries. The business grew
        slowly. During the war years, 1940-1945, he received contract work from
        several department stores to install and repair radios. In 1946,
        television was being experimented with which caused him to get
        additional training from the University of Illinois. In 1947, he started
        to sell and install television receivers and antennas to local residents
        and business. Sales were slow because there was only one channel at the
        time.
      </p>
      <p className={`${styles.text}`}>
        Arthur “Skip” Jr. grew up in the apartment behind the radio shop where
        he learned the language of the radio by testing tubes and learning from
        the technicians. Training was being taught at the local high schools
        and, in the late 50's, Skip was exposed to transistors, color TV and
        building master antenna systems for hospitals, apartment complexes, and
        hotels all of which laid the groundwork for whole community antenna
        systems and, eventually, Cable Television.
      </p>
      <p className={`${styles.text}`}>
        Skip’s first attempt was to wire the neighborhood around his shop. In
        1969, Skip wired the town of Rockdale—the first antenna cable system in
        this part of Illinois. He eventually built four more systems. Soon,
        satellite programming became a part of the cable systems. What seems to
        be true in the electronic business is constantly changing. As part of
        what's changing is the introduction of the internet. We were the first
        again to offer internet in this part of the state. Being a family
        business, his two sons joined the business. Phone service was eventually
        added. Again, another change is the introduction of fiber optic cable.
      </p>
    </div>
  );
};

export default Kraus;
