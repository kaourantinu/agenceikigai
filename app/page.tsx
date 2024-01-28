import Image from "next/image";
import { Metadata } from "next";
import styles from "./page.module.css";
import Section from "./components/Section";
import H1 from "./components/H1";
import P from "./components/P";
import Div from "./components/Div";
import DecorativeRound from "./components/DecorativeRound";
import H2 from "./components/H2";
import Span from "./components/Span";
import H3 from "./components/H3";

export const metadata: Metadata = {
  title: "ikigai : Agence web et digitale à Besançon - Création de site internet",
  description: "Agence web à Besançon, nous aidons les entreprises et les indépendants à se rendre visible sur Internet grâce à des sites internet optimisés.",
  keywords: "agence web, besançon, création de site internet",
  authors: [
    {name: "Corentin Tournier", url: "https://ikigaifreelance.com/developpeur-web-freelance"},
    {name: "Agence ikigai", url: "https://ikigaifreelance.com"}
  ],
  publisher: "Agence ikigai",
  alternates: { 
    canonical: "https://ikigaifreelance.com" 
  },
  openGraph: {
    type: "website",
    url: "https://ikigaifreelance.com",
    title: "ikigai : Agence web et digitale à Besançon - Création de site internet",
    description: "Agence web à Besançon, nous aidons les entreprises et les indépendants à se rendre visible sur Internet grâce à des sites internet optimisés.",
    siteName: "ikigai : Agence web et digitale à Besançon - Création de site internet",
  },
  robots: "index, follow"
};

export default function Home() {
  return (
    <main id={styles.main}>
      <Section id={styles.herosection}>
        <H1>Agence web à Besançon</H1>
        <P id={styles.heroquote}>Nous vous rendons visible<br></br> sur Internet</P>
        <P id={styles.herodescription}>Se rendre visible sur Internet ne devrait pas être si difficile...<br></br> Alors notre agence web basée à Besançon le fait pour vous !</P>
        <DecorativeRound id={styles.decorativeround}/>
      </Section>
      <Section id={styles.presentationsection}>
        <H2><Span color="var(--grey)">Une agence web.</Span><br></br> Plusieurs expertises digitales.</H2>
        <P>ikigai est une agence web spécialisée dans la création de site web,<br></br> le référencement naturel et la formation dans le but de booster votre communication digitale.</P>
        <Div id={styles.expertises}>
          <Div className={styles.expertise}>
            <Image src='/world-wide-web.png' width={128} height={128} alt="icon" title="icon"/>
            <H3>Création de site internet</H3>
            <P>L&apos;agence ikigai crée des sites internet sur-mesure grâce au développement web avec le framework NextJS ou grâce à des outils no-code comme WordPress et Elementor.</P>
          </Div>
          <Div className={styles.expertise}>
            <Image src='/world-wide-web.png' width={128} height={128} alt="icon" title="icon"/>
            <H3>Référencement naturel SEO</H3>
            <P>L&apos;agence ikigai écrit chaque ligne de code d&apos;un site web en optimisant au maximum sa performance et sa position future dans les résultats de recherche Google afin que vos clients puissent trouver facilement votre marque.</P>
          </Div>
          <Div className={styles.expertise}>
            <Image src='/world-wide-web.png' width={128} height={128} alt="icon" title="icon"/>
            <H3>Formations au digital</H3>
            <P>L&apos;agence ikigai forme également les personnes désireuses d&apos;apprendre et de développer leur visibilité digitale à la conception de sites internet grâce à des plateformes no-code (site WordPress/Elementor) ainsi qu&apos;au référencement naturel (SEO).</P>
          </Div>
        </Div>
      </Section>
      <Section id={styles.realisationssection}>
        <Div id={styles.realisationsdiv}>
          <H2>Nos réalisations</H2>
        </Div>
      </Section>
      <Section id={styles.vertuespresentationsection}>
          <Div id={styles.vertuespresentation}>
            <Div id={styles.vertues}>
              <H2>Les valeurs de<Span color="var(--orange)"> notre agence.</Span></H2>
              <P>Basée dans le Doubs en Bourgogne Franche-Comté, notre agence a à cœur de répondre au mieux aux attentes de ses clients et de participer au fonctionnement de l&apos;écosystème économique local.</P>
              <H3>Une seule mission : vous rendre visible sur Internet</H3>
              <P>De nos jours, obtenir de nouveaux clients est devenu un vrai défi pour la plupart des entreprises. Se rendre visible sur Google est l&apos;un des moyens de relever ce défi.</P>
              <H3>Quelque soit votre statut ou votre localisation</H3>
              <P>Que vous soyez une entreprise, un indépendant ou une association, notre agence vous accompagne dans votre stratégie de présence en ligne et cela, peu importe où vous vous situez.</P>
              <H3>Avec des prestations sur-mesure</H3>
              <P>Nous adaptons votre prestation aux besoins que nous définissons ensemble pendant notre premier rendez-vous.</P>
              <H3>Et un seul interlocuteur</H3>
              <P>Puisque l&apos;agence ikigai n&apos;est gérée que par une seule personne indépendante sans aucune équipe, fini les problèmes de communication ! Vous ne communiquez qu&apos;avec une seule personne durant tout le projet.</P>
            </Div>
            <Div id={styles.freelancepresentation}>
              <P>Corentin Tournier</P>
              <P>Développeur web freelance gérant l&apos;agence ikigai</P>
            </Div>
          </Div>
      </Section>
      <Section>
        <H2>Nos tarifs</H2>
        <H3>Site web vitrine</H3>
        <P>À partir de 999€ Développement avec WordPress & Elementor ou avec NextJS (React) Optimisation du référencement pour les moteurs de recherches sur le mot-clé désiré Responsive design (adapté aux écrans mobiles) Hébergement et nom de domaine offert pendant 12 mois</P>
        <H3>Site web e-commerce</H3>
        <P>À partir de 2499€ Développement avec WordPress, Elementor & WooCommerce ou avec NextJS (React) Optimisation du référencement pour les moteurs de recherches sur le mot-clé désiré Responsive design (adapté aux écrans mobiles) Hébergement et nom de domaine offert pendant 12 mois</P>
        <H3>Application Web sur-mesure</H3>
        <P>À partir de 4999€ Développement avec NextJS (React) Webdesign unique Responsive design (adapté aux écrans mobiles) Hébergement et nom de domaine offert pendant 12 mois</P>
        <H3>Formations numériques</H3>
        <P>Me contacter Création de site vitrine avec WordPress & Elementor Création de site e-commerce avec WordPress, Elementor & WooCommerce Référencement naturel (SEO) Formations certifiées Qualiopi & finançables OPCO et Pôle Emploi</P>
      </Section>
      <Section>
        <H2>Faites appel à nos services</H2>
      </Section>
      <Section>
        <H2>Questions fréquentes</H2>
        <H3>C&apos;est quoi exactement une agence web ?</H3>
        <P>Une agence web, aussi appelée agence digitale ou agence de communication digitale, est une structure qui rassemble un ou plusieurs experts du domaine du digital et du web marketing.</P>
        <H3>Quels métiers rassemble le domaine du digital ?</H3>
        <P>Le domaine du digital et du webmarketing possède une grande multitude de métiers, tous différents selon la thématique : développeur web, chef de projet web, web designer pour de la création de sites internet ; community manager, graphiste pour le Community Management. Ce ne sont que les plus connus bien sûr, les métiers de ce domaine sont multiples.</P>
        <H3>Quel est le rôle d&apos;une agence web comme ikigai ?</H3>
        <P>Le rôle des agences web comme la notre est de proposer un accompagnement aux entreprises et aux indépendants qui cherche à se rendre visible pour obtenir plus de clients en augmentant le trafic et en augmentant le taux d&apos;acquisition et de conversion de leur site web. Notre agence s&apos;occupe de la gestion de votre projet web de A à Z en travaillant avec vous en parallèle pour avancer ensemble sur votre demande.</P>
        <H3>Quels services sont proposés par notre agence web bisontine ?</H3>
        <P>Notre agence web est experte dans la conception de sites vitrine et e-commerce et propose en complément une expertise sur le SEO. ikigai dispense également des programmes d&apos;accompagnement pour vous former au digital et tout faire vous-même.</P>
        <H3>Comment choisir la meilleure agence web à Besançon ?</H3>
        <P>Pour choisir l&apos;agence web qui sera votre prestataire, vous pouvez vous fier à plusieurs éléments : sa réputation, son expérience, ses réalisations, les prestations qu&apos;elle propose mais également son mode de fonctionnement. Aussi, une expertise avérée peut faire pencher la balance : si vous recherchez un prestataire pour vous concevoir un site web spécifique qui sera bien placé dans les résultats de recherche Google, le fait de trouver un prestataire dans les meilleurs résultats démontre un savoir-faire d&apos;expert et une compétence auxquels vous pouvez faire confiance.</P>
        <H3>Qui a besoin d&apos;une agence web comme ikigai ?</H3>
        <P>Toutes les personnes ayant comme objectif de créer une présence marketing en ligne ont besoin d&apos;une agence web : entreprises, indépendants, particuliers. </P>
        <H3>Avez-vous des locaux dans lesquels nous accueillir ?</H3>
        <P>Malheureusement, il n&apos;y a pas de locaux à proprement parler. Tout rendez-vous se déroulera en visioconférence si possible et dans vos locaux ou dans un lieu public s&apos;il y a un besoin de se voir en physique.</P>
      </Section>
    </main>
  );
}
