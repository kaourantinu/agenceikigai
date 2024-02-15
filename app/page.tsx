import Image from "next/image";
import Link from "next/link";
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
import H4 from "./components/H4";
import Strong from "./components/Strong";
import List from "./components/List";
import ListElement from "./components/ListElement";
import LinkButton from "./components/LinkButton";

export const metadata: Metadata = {
  title: "ikigai : Agence web à Besançon - Création de site internet",
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
    title: "ikigai : Agence web à Besançon - Création de site internet",
    description: "Agence web à Besançon, nous aidons les entreprises et les indépendants à se rendre visible sur Internet grâce à des sites internet optimisés.",
    siteName: "ikigai : Agence web à Besançon - Création de site internet",
  },
  robots: { index: true, follow: true }
};

export default function Home() {

  return (
    <main id={styles.main}>
      <Section id={styles.herosection} className="herosectionclass">
        <H1>Agence web à Besançon</H1>
        <P id={styles.heroquote}>Nous vous rendons visible <br></br>sur Internet</P>
        <P id={styles.herodescription}>Se rendre visible sur Internet ne devrait pas être si difficile... <br></br>Alors l&apos;agence web ikigai basée à Besançon le fait pour vous !</P>
        <DecorativeRound id={styles.decorativeround}/>
      </Section>
      <Section id={styles.presentationsection}>
        <H2><Span color="var(--grey)">Une agence web.</Span><br></br> Plusieurs expertises digitales.</H2>
        <P>ikigai est une <Strong>agence web spécialisée</Strong> dans la <Strong>création de site web</Strong>, le référencement naturel et la formation dans le but de booster votre <Strong>communication digitale</Strong>.</P>
        <Div id={styles.expertiseslider}>
          <Div id={styles.expertises}>
            <Link href='/creation-site-internet' title='Création de site internet' className={styles.expertise}>
              <Image src='/creation-site-internet.png' width={128} height={128} alt="Site internet" title="Site internet"/>
              <H3>Création de site internet</H3>
              <P>L&apos;agence ikigai crée des sites internet sur-mesure grâce au <Strong>développement web</Strong> avec le framework NextJS ou grâce à des outils no-code comme WordPress et Elementor.</P>
            </Link>
            <Link href='/agence-seo' title='Référencement naturel (SEO)' className={styles.expertise}>
              <Image src='/referencement-naturel-seo.png' width={128} height={128} alt="Oeil qui voit un site internet" title="Oeil qui voit un site internet"/>
              <H3>Référencement naturel (SEO)</H3>
              <P>L&apos;agence ikigai écrit chaque ligne de code d&apos;un site web en optimisant au maximum sa performance et sa position future dans les résultats de recherche Google afin que vos clients puissent trouver facilement votre marque.</P>
            </Link>
            <Link href='/formation-wordpress-elementor' title='Formation WordPress Elementor' className={styles.expertise}>
              <Image src='/formation-digitale.png' width={128} height={128} alt="Chapeau d'étudiant représentant la formation" title="Chapeau d'étudiant représentant la formation"/>
              <H3>Formations au digital</H3>
              <P>L&apos;agence ikigai forme également les personnes désireuses d&apos;apprendre et de développer leur visibilité digitale à la <Strong>conception de sites internet</Strong> grâce à des plateformes no-code (site WordPress/Elementor) ainsi qu&apos;au référencement naturel (SEO).</P>
            </Link>
          </Div>
        </Div>
      </Section>
      <Section id={styles.realisationssection}>
        <Div id={styles.realisationsdiv}>
          <H2>Nos réalisations.</H2>
          <Div id={styles.realisationsgrid}>
            <Div id={styles.realisation1}>
              <H3>Le Comptoir des Bières - École-Valentin</H3>
              <Link href='https://lecomptoirdesbieresbesancon.com/' rel="external nofollow" target="_blank" title="Site e-commerce réalisé par notre agence pour le Comptoir des Bières">
                <Image src='/site-ecommerce-comptoir.png' alt="Site e-commerce réalisé par notre agence pour le Comptoir des Bières" width={3024} height={1644} title="Site e-commerce réalisé par notre agence pour le Comptoir des Bières"></Image>
              </Link>
            </Div>
            <Div id={styles.realisation2}>
              <H3>Le Petit Atelier Photos - Besançon</H3>
              <Link href='https://lepetitatelierphotos.com/' rel="external nofollow" target="_blank" title="Site vitrine réalisé par notre agence pour le Petit Atelier Photos">
                <Image src='/site-vitrine-lepetitatelierphotos.png' alt="Site vitrine réalisé par notre agence pour le Petit Atelier Photos" width={3024} height={1644} title="Site vitrine réalisé par notre agence pour le Petit Atelier Photos"></Image>
              </Link>
            </Div>
            <Div id={styles.realisation3}>
              <H3>Real Estate Agency (Portfolio)</H3>
              <Link href='https://realestate-theta-eosin.vercel.app/' rel="external nofollow" target="_blank" title="Site d'annonces immobilières réalisé par notre agence pour notre portfolio">
                <Image src='/site-vitrine-realestate.png' alt="Site d'annonces immobilières réalisé par notre agence pour notre portfolio" width={3024} height={1644} title="Site d'annonces immobilières réalisé par notre agence pour notre portfolio"></Image>
              </Link>
            </Div>
            <Div id={styles.realisation4}>
              <H3>Real Madrid (Portfolio)</H3>
              <Link href='https://realmadridnextjs.vercel.app/' rel="external nofollow" target="_blank" title="Site vitrine du Real Madrid réalisé par notre agence pour notre portfolio">
                <Image src='/site-vitrine-realmadrid.png' alt="Site vitrine du Real Madrid réalisé par notre agence pour notre portfolio" width={3024} height={1644} title="Site vitrine du Real Madrid réalisé par notre agence pour notre portfolio"></Image>
              </Link>
            </Div>
            <Div id={styles.realisation5}>
              <H3>Apple (Portfolio)</H3>
              <Link href='https://appleiphone15pro.vercel.app/' rel="external nofollow" target="_blank" title="Configurateur en ligne iPhone réalisé par notre agence pour notre portfolio">
                <Image src='/configurateur-iphone.png' alt="Configurateur en ligne iPhone réalisé par notre agence pour notre portfolio" width={3024} height={1644} title="Configurateur en ligne iPhone réalisé par notre agence pour notre portfolio"></Image>
              </Link>
            </Div>
            <Div id={styles.realisation6}>
            </Div>
          </Div>
        </Div>
      </Section>
      <Section id={styles.vertuespresentationsection}>
          <Div id={styles.vertuespresentation}>
            <Div id={styles.vertues}>
              <H2>Les valeurs de<Span color="var(--orange)"> notre agence.</Span></H2>
              <P>Basée dans le Doubs en Bourgogne Franche-Comté, l&apos;agence a à cœur de répondre au mieux aux attentes de ses clients et de participer au fonctionnement de l&apos;écosystème économique local.</P>
              <H3>Une seule mission : vous rendre visible sur Internet</H3>
              <P>De nos jours, obtenir de nouveaux clients est devenu un vrai défi pour la plupart des entreprises. Se rendre visible sur Google est l&apos;un des moyens de relever ce défi.</P>
              <H3>Quelque soit votre statut ou votre localisation</H3>
              <P>Que vous soyez une entreprise, un indépendant ou une association, l&apos;agence vous accompagne dans la <Strong>mise en place</Strong> d&apos;une stratégie de <Strong>présence en ligne</Strong> et cela, peu importe où vous vous situez.</P>
              <H3>Avec des prestations sur-mesure</H3>
              <P>Nous adaptons votre prestation aux besoins que nous définissons ensemble pendant un premier rendez-vous.</P>
              <H3>Et un seul interlocuteur</H3>
              <P>Puisque l&apos;agence ikigai n&apos;est gérée que par une seule personne indépendante sans aucune équipe, fini les problèmes de communication ! Vous ne communiquez qu&apos;avec une seule personne durant tout le temps de création d&apos;un site web.</P>
            </Div>
            <Link href='/developpeur-web-freelance' title='Développeur web freelance à Besançon' id={styles.freelancepresentation}>
              <Image src='/corentin-tournier-developpeur-web-freelance.webp' alt="Corentin Tournier, développeur web freelance gérant l'agence ikigai" title="Corentin Tournier, développeur web freelance gérant l'agence ikigai" width={3024} height={4032}></Image>
              <Div id={styles.overlaypresentation}></Div>
              <H3>Corentin Tournier</H3>
              <P>Développeur web freelance gérant l&apos;agence ikigai</P>
            </Link>
          </Div>
      </Section>
      <Section id={styles.reviewsection}>
        <H2>Ce que nos clients ont pensé de leur projet.</H2>
        <Div id={styles.review}>
          <Div id={styles.reviewinfo}>
            <Div id={styles.reviewimage}>
              <Image src='/cindy-giancarlo-photographe-independante.jpg' width={500} height={500} alt="Cindy Giancarlo, photographe indépendante pour qui nous avons créé un site web vitrine" title="Cindy Giancarlo, photographe indépendante pour qui nous avons créé un site web vitrine"></Image>
            </Div>
            <Div id={styles.reviewtextinfo}>
              <H3>Cindy Giancarlo</H3>
              <H4>Photographe indépendante</H4>
            </Div>
          </Div>
          <P>L&apos;agence ikigai a réalisé le site internet de mon entreprise de photographie.<br></br>
          <br></br>Nous avons étudié ensemble mon projet et Corentin a pris le temps de bien comprendre quels étaient les enjeux de ma démarche. À l&apos;écoute, il m&apos;a conseillé et a toujours répondu à mes questions.
          <br></br>Il a su apporter des solutions pertinentes aux difficultés que comprenait mon cahier des charges.
          <br></br>Régulièrement, il m&apos;invitait à valider l&apos;avancée de la création du site. Ainsi, nous avions un échange établi tout au long de notre collaboration.
          <br></br><br></br>Corentin est quelqu&apos;un de professionnel, disponible et réactif. Le travail est réalisé avec soin dans le respect des volontés du client.
          <br></br><br></br>Très satisfaite, je recommande vivement l&apos;agence ikigai !</P>
        </Div>
      </Section>
      <Section id={styles.pricesection}>
        <H2>Nos tarifs.</H2>
          <Div id={styles.offers}>
            <Div id={styles.weboffer}>
              <H3>Développement web</H3>
                <Div id={styles.weboffercontainer}>
                  <Div className={styles.webpriceoffer}>
                    <H4>Site web vitrine</H4>
                    <P className={styles.offerprice}>À partir de<br></br> <Span color="var(--orange)"><b>999€</b></Span></P>
                  </Div>
                  <Div className={styles.webpriceoffer}>
                    <H4>Site web e-commerce</H4>
                    <P className={styles.offerprice}>À partir de<br></br> <Span color="var(--orange)"><b>1999€</b></Span></P>
                  </Div>
                  <Div className={styles.webpriceoffer}>
                    <H4>Application Web sur-mesure</H4>
                    <P className={styles.offerprice}>À partir de<br></br> <Span color="var(--orange)"><b>4999€</b></Span></P>
                  </Div>
                </Div>
                <H4>Caractéristiques de nos <Strong>sites web</Strong></H4>
                <List>
                  <ListElement>Développés avec WordPress & Elementor ou avec NextJS (React)</ListElement>
                  <ListElement>Optimisés pour le référencement pour les <Strong>moteurs de recherche</Strong> sur le mot-clé désiré</ListElement>
                  <ListElement>Uniques au niveau de leur design</ListElement>
                  <ListElement>Responsives (adaptés aux écrans mobiles)</ListElement>
                  <ListElement>Hébergement et nom de domaine inclus pendant 12 mois</ListElement>
                </List>
                <LinkButton target="_blank" href="mailto:contact@ikigaifreelance.com?subject=Demande de devis site internet" title="Demander un devis" className="button orangebutton">Demandez un devis</LinkButton>
            </Div>
            <Div id={styles.formationoffers}>
              <H3>Formations numériques</H3>
                <List>
                  <ListElement><H4>Création de <Strong>site vitrine</Strong> avec WordPress & Elementor</H4></ListElement>
                  <ListElement><H4>Création de site e-commerce avec WordPress, Elementor & WooCommerce</H4></ListElement>
                  <ListElement><H4>Référencement naturel (SEO)</H4></ListElement>
                </List>
                <P id={styles.qualiopi}>Formations certifiées Qualiopi & finançables OPCO et Pôle Emploi</P>
                <Div id={styles.logoformation}>
                  <Image src='/logo-qualiopi.png' width={501} height={211} alt="Logo Qualiopi, certification attestant de la qualité des prestations proposées par les organismes de formation sur la base du Référentiel National Qualité"/>
                  <Image src='/logo-datadock.png' width={481} height={519} alt="Logo Certification Datadock, l'outil d'aide au référencement des organismes de formation"/>
                  <Image src='/logo_moncompteformation.png' width={2647} height={1559} alt="Logo Mon Compte Formation"/>
                </Div>
                <LinkButton target="_blank" href="mailto:contact@ikigaifreelance.com?subject=Demande de devis formation" title="Demander un devis" className="button orangebutton">Demandez un devis</LinkButton>
            </Div>
          </Div>
      </Section>
      <Section id={styles.faqsection}>
        <H2>Questions fréquentes sur les agences web.</H2>
        <Div className={styles.question}>
          <input type="checkbox" id='accordion1'/>
          <label htmlFor='accordion1' id={styles.questionlabel}>
              <H3>C&apos;est quoi exactement une agence web ?</H3>
              <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z"/></svg>
          </label>
          <P className={styles.answer}>Une agence web, aussi appelée <Strong>agence digitale</Strong> ou <Strong>agence de communication digitale</Strong>, est une structure qui rassemble un ou plusieurs experts du domaine du digital et du <Strong>web marketing</Strong>.</P>
        </Div>
        <Div className={styles.question}>
          <input type="checkbox" id='accordion2'/>
          <label htmlFor='accordion2' id={styles.questionlabel}>
              <H3>Quels métiers rassemble le domaine du digital ?</H3>
              <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z"/></svg>
          </label>
          <P className={styles.answer}>Le domaine du digital et du webmarketing possède une grande multitude de métiers, tous différents selon la thématique : <Strong>développeur web</Strong>, chef de <Strong>projet web</Strong>, <Strong>web designer</Strong> pour de la création de sites internet ; community manager, graphiste pour le Community Management. Ce ne sont que les plus connus bien sûr, les métiers de ce domaine sont multiples.</P>
        </Div>
        <Div className={styles.question}>
          <input type="checkbox" id='accordion3'/>
          <label htmlFor='accordion3' id={styles.questionlabel}>
              <H3>Quel est le rôle d&apos;une agence web comme ikigai ?</H3>
              <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z"/></svg>
          </label>
          <P className={styles.answer}>Le rôle des <Strong>agences web</Strong> comme la notre est de proposer un accompagnement aux entreprises et aux indépendants qui cherche à se rendre visible pour obtenir plus de clients en augmentant le trafic et en augmentant le taux d&apos;acquisition et de conversion de leur site web. Notre agence s&apos;occupe de la gestion de votre <Strong>projet web</Strong> de A à Z en travaillant avec vous en parallèle pour avancer ensemble sur votre demande.</P>
        </Div>
        <Div className={styles.question}>
          <input type="checkbox" id='accordion4'/>
          <label htmlFor='accordion4' id={styles.questionlabel}>
              <H3>Quels services sont proposés par notre agence web bisontine ?</H3>
              <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z"/></svg>
          </label>
          <P className={styles.answer}>Notre agence web est experte dans la <Strong>conception de sites</Strong> vitrine et e-commerce et propose en complément une expertise sur le SEO. ikigai dispense également des programmes d&apos;accompagnement pour vous former au digital et tout faire vous-même.</P>
        </Div>
        <Div className={styles.question}>
          <input type="checkbox" id='accordion5'/>
          <label htmlFor='accordion5' id={styles.questionlabel}>
              <H3>Comment choisir la meilleure agence web à Besançon ?</H3>
              <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z"/></svg>
          </label>
          <P className={styles.answer}>Pour choisir l&apos;agence web qui sera votre prestataire, vous pouvez vous fier à plusieurs éléments : sa réputation, son expérience, ses réalisations, les prestations qu&apos;elle propose mais également son mode de fonctionnement. Aussi, une expertise avérée peut faire pencher la balance : si vous recherchez un prestataire pour vous concevoir un site web spécifique qui sera bien placé dans les résultats de recherche Google, le fait de trouver un prestataire dans les meilleurs résultats démontre un savoir-faire d&apos;expert et une compétence auxquels vous pouvez faire confiance.</P>
        </Div>
        <Div className={styles.question}>
          <input type="checkbox" id='accordion6'/>
          <label htmlFor='accordion6' id={styles.questionlabel}>
              <H3>Qui a besoin d&apos;une agence web comme ikigai ?</H3>
              <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z"/></svg>
          </label>
          <P className={styles.answer}>Toutes les personnes ayant comme objectif de créer une présence marketing en ligne ont besoin d&apos;une agence web : entreprises, indépendants, particuliers.</P>
        </Div>
        <Div className={styles.question}>
          <input type="checkbox" id='accordion7'/>
          <label htmlFor='accordion7' id={styles.questionlabel}>
              <H3>Avez-vous des locaux dans lesquels nous accueillir ?</H3>
              <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z"/></svg>
          </label>
          <P className={styles.answer}>Malheureusement, il n&apos;y a pas de locaux à proprement parler. Tout rendez-vous se déroulera en visioconférence si possible et dans vos locaux ou dans un lieu public s&apos;il y a un besoin de se voir en physique.</P>
        </Div>
      </Section>
    </main>
  );
}
