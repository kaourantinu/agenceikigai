import { Metadata } from "next";
import styles from "./page.module.css";
import Section from "./components/Section";
import P from "./components/P";
import DecorativeRound from "./components/DecorativeRound";

export const metadata: Metadata = {
    title: "Page introuvable - ikigai : agence web à Besançon",
    description: "Page introuvable - ikigai : agence web à Besançon",
    keywords: "",
    authors: [
      {name: "Corentin Tournier", url: "https://ikigaifreelance.com/developpeur-web-freelance"},
      {name: "Agence ikigai", url: "https://ikigaifreelance.com"}
    ],
    publisher: "Agence ikigai",
    robots: { index: false, follow: false }
  };


export default function NotFound() {
  return (
    <main id={styles.main}>
      <Section id={styles.herosection} className="herosectionclass">
        <P id={styles.heroquote}>Page introuvable</P>
        <P id={styles.herodescription}>Cliquez sur notre logo en haut à gauche pour revenir sur notre site.</P>
        <DecorativeRound id={styles.decorativeround}/>
      </Section>
    </main>
  )
}