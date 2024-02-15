import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import styles from "./page.module.css";
import Section from "../components/Section";
import H1 from "../components/H1";
import P from "../components/P";
import Div from "../components/Div";
import DecorativeRound from "../components/DecorativeRound";
import H2 from "../components/H2";
import Span from "../components/Span";
import H3 from "../components/H3";
import List from "../components/List";
import ListElement from "../components/ListElement";
import LinkButton from "../components/LinkButton";

export const metadata: Metadata = {
  title: "ikigai : agence SEO à Besançon - Stratégie de référencement naturel",
  description: "Agence SEO à Besançon, nous aidons les entreprises et les indépendants à se rendre visible sur Google grâce à une bonne stratégie de référencement naturel.",
  keywords: "agence seo, besançon, référencement, naturel, création de site internet",
  authors: [
    {name: "Corentin Tournier", url: "https://ikigaifreelance.com/developpeur-web-freelance"},
    {name: "Agence ikigai", url: "https://ikigaifreelance.com"}
  ],
  publisher: "Agence ikigai",
  alternates: { 
    canonical: "https://ikigaifreelance.com/agence-seo" 
  },
  openGraph: {
    type: "website",
    url: "https://ikigaifreelance.com/agence-seo",
    title: "ikigai : agence SEO à Besançon - Stratégie de référencement naturel",
    description: "Agence SEO à Besançon, nous aidons les entreprises et les indépendants à se rendre visible sur Google grâce à une bonne stratégie de référencement naturel.",
    siteName: "ikigai : Agence web à Besançon - Création de site internet",
  },
  robots: { index: true, follow: true }
};

export default function Page() {

  return (
    <main id={styles.main}>
      <Section id={styles.herosection} className="herosectionclass">
        <H1>Agence SEO à Besançon</H1>
        <P id={styles.heroquote}>Nous vous rendons visible <br></br>sur Internet</P>
        <P id={styles.herodescription}>Se rendre visible sur Internet ne devrait pas être si difficile... <br></br>Alors l&apos;agence SEO ikigai basée à Besançon le fait pour vous !</P>
        <DecorativeRound id={styles.decorativeround}/>
      </Section>
      <Section id={styles.presentationsection}>
        <H2><Span color="var(--grey)">Une agence SEO.</Span><br></br> Plusieurs expertises digitales.</H2>
        <P id={styles.presentationparagraph}>ikigai est une agence SEO spécialiste dans le référencement naturel, la création de site web ainsi que dans la formation dans le but d&apos;aider à booster le marketing digital des entreprises et des indépendants.</P>
        <Div id={styles.expertiseslider}>
          <Div id={styles.expertises}>
            <Link target='_blank' href='https://www.redacteur.com/blog/les-10-regles-dor-de-la-redaction-web/' title='Rédaction web & SEO' className={styles.expertise} rel="nofollow external">
              <Image src='/redaction-seo.png' width={128} height={128} alt="Crayon pour rédaction SEO" title="Crayon pour rédaction SEO"/>
              <H3>Rédaction web & SEO</H3>
              <P>L&apos;agence écrit chaque ligne de texte présent sur votre site afin de le référencer au mieux sur la requête Google correspondant à votre secteur d&apos;activité.</P>
            </Link>
            <Link target='_blank' href='https://www.inboundvalue.com/blog/audit-technique-seo' title='Audit technique & optimisation' className={styles.expertise} rel="nofollow external">
              <Image src='/audit-technique.png' width={128} height={128} alt="Clé à molette pour audit technique SEO" title="Clé à molette pour audit technique SEO"/>
              <H3>Audit technique & optimisation</H3>
              <P>Nous faisons un audit complet de votre site web afin de détecter quels problèmes de performance vous font vous rapprocher de la dernière place dans les résultats de recherche Goog​le.</P>
            </Link>
            <Link target='_blank' href='https://semji.com/fr/guide/netlinking-le-guide-pour-maximiser-votre-seo/#:~:text=Le%20netlinking%2C%20aussi%20appel%C3%A9%20linking,sur%20les%20moteurs%20de%20recherches.' title='Stratégie de netlinking' className={styles.expertise} rel="nofollow external">
              <Image src='/lien-externe.png' width={128} height={128} alt="Lien externe pour stratégie de backlinking" title="Lien externe pour stratégie de backlinking"/>
              <H3>Stratégie de netlinking</H3>
              <P>L&apos;expertise de l&apos;agence en terme de netlinking nous permet de travailler sur des stratégies en fournissant une réputation de qualité et efficace pour un business, peu importe le domaine d&apos;activité.</P>
            </Link>
          </Div>
        </Div>
      </Section>
      <Section id={styles.definitionsection}>
        <Div id={styles.definitiondiv}>
          <Div id={styles.titlediv}>
            <H2>Mais c&apos;est quoi exactement le référencement naturel SEO ?</H2>
          </Div>
          <Div id={styles.paragraphediv}>
            <P>Le référencement naturel (qui est plus largement appelé SEO et signifiant Search Engine Optimization) est l&apos;ensemble des actions menées dans l&apos;objectif de développer le positionnement d&apos;un site dans les moteurs de recherche et d&apos;attirer plus de trafic organique. Google est le plus connu et le plus largement utilisé en France.<br></br><br></br>Pour classer un site et le positionner plus ou moins haut, un moteur de recherche envoie des petits robots &quot;crawlers&quot; sur celui-ci pour récupérer son code. Après cela, il l&apos;analyse selon plus de 200 critères. Pour simplifier, nous allons les résumer en trois grandes thématiques : le contenu (le texte qui se trouve sur une page et la sémantique qu&apos;il renvoie), le côté technique (le plus gros travail ici étant le fait qu&apos;un site charge rapidement pour améliorer l&apos;expérience utilisateur), la réputation (le fait qu&apos;un site ait une bonne image auprès de Google). Ces facteurs sont aussi triés par le fait qu&apos;ils soient Onsite (internes et spécifiques au site web) ou Offsite (externes mais bénéficiant indirectement au site).<br></br><br></br>Après avoir a​nalysé un site selon ces facteurs, une note lui est octroyée et est ensuite comparée à celle de ses concurrents sur une requête précise pour lui donner son positionnement final.<br></br><br></br>Pour information, 9 utilisateurs sur 10 ne vont pas au delà des 10 premiers sites affichés. C&apos;est donc pour cela qu&apos;il faut essayer au maximum de se classer dans les résultats les plus hauts en faisant appel à une agence SEO.</P>
          </Div>
        </Div>
      </Section>
      <Section id={styles.vertuespresentationsection}>
          <Div id={styles.vertuespresentation}>
            <Div id={styles.vertues}>
              <H2>Les valeurs de<Span color="var(--orange)"> notre agence.</Span></H2>
              <P>Basée dans le Doubs en Bourgogne Franche-Comté, l&apos;agence a à cœur de répondre au mieux aux attentes de ses clients et de participer au fonctionnement de l&apos;écosystème économique local.</P>
              <H3>Une seule mission : vous rendre visible sur Internet</H3>
              <P>De nos jours, obtenir de nouveaux clients est devenu un vrai défi pour la plupart des entreprises. Se rendre visible sur Google est l&apos;une des solutions pour relever ce défi et le référencement naturel en est le levier.</P>
              <H3>Quelque soit votre statut ou votre localisation</H3>
              <P>Que vous soyez une entreprise, un indépendant ou une association, l&apos;agence vous accompagne dans la mise en place d&apos;une stratégie de présence en ligne et cela, peu importe où vous vous situez en France ou dans un pays francophone.</P>
              <H3>Avec des offres sur-mesure</H3>
              <P>Nous adaptons chaque projet aux besoins, aux objectifs et aux cibles que nous définissons ensemble pendant un rendez-vous de démarrage.</P>
              <H3>Et un seul interlocuteur</H3>
              <P>Puisque l&apos;agence ikigai n&apos;est gérée que par une seule personne indépendante sans aucune équipe, fini les problèmes de communication et de suivi ! Vous ne communiquez qu&apos;avec une seule personne durant tout le temps de notre collaboration.</P>
            </Div>
            <Link href='/developpeur-web-freelance' title='Développeur web freelance à Besançon' id={styles.freelancepresentation}>
              <Image src='/corentin-tournier-developpeur-web-freelance.webp' alt="Corentin Tournier, développeur web freelance gérant l'agence ikigai" title="Corentin Tournier, développeur web freelance gérant l'agence ikigai" width={3024} height={4032}></Image>
              <Div id={styles.overlaypresentation}></Div>
              <H3>Corentin Tournier</H3>
              <P>Développeur web freelance et consultant SEO gérant l&apos;agence ikigai</P>
            </Link>
          </Div>
      </Section>
      <Section id={styles.pricesection}>
        <H2>Nos tarifs.</H2>
          <Div id={styles.offers}>
            <Div id={styles.weboffer}>
              <H3>Référencement naturel</H3>
                <Div id={styles.weboffercontainer}>
                    <P className={styles.offerprice}><Span color="var(--orange)"><b>Sur devis</b></Span></P>
                </Div>
                <P>Accompagnement expert pour un gain de visibilité de votre site web sur le moteur de recherche Google</P>
                <List>
                  <ListElement>Audit SEO de site</ListElement>
                  <ListElement>Définition des requêtes de recherche</ListElement>
                  <ListElement>Création de contenu et structure de site</ListElement>
                  <ListElement>Optimisation technique de site</ListElement>
                  <ListElement>Stratégie de netlinking et backlinks</ListElement>
                </List>
                <LinkButton target="_blank" href="mailto:contact@ikigaifreelance.com?subject=Demande de devis référencement naturel" title="Demander un devis" className="button orangebutton">Demandez un devis</LinkButton>
            </Div>
          </Div>
      </Section>
      <Section id={styles.faqsection}>
        <H2>Questions fréquentes sur les agences SEO.</H2>
        <Div className={styles.question}>
          <input type="checkbox" id='accordion8'/>
          <label htmlFor='accordion8' id={styles.questionlabel}>
              <H3>C&apos;est quoi une agence SEO ?</H3>
              <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z"/></svg>
          </label>
          <P className={styles.answer}>Une agence de référencement naturel (ou plus communément appelée agence SEO pour Search Engine Optimization) est une structure dont la spécialité est d&apos;optimiser le contenu des pages web pour les moteurs de recherche comme Google. Spécialisée dans cette problématique, elle améliore le positionnement du site web d&apos;une entreprise pour apparaître sur la première page dans les résultats de recherche Google. En résumé, une agence SEO vous accompagne dans votre projet de création ou d&apos;optimisation de site internet afin de le faire remonter le plus haut possible sur le mot-clé correspondant au secteur d&apos;activité en question.</P>
        </Div>
        <Div className={styles.question}>
          <input type="checkbox" id='accordion1'/>
          <label htmlFor='accordion1' id={styles.questionlabel}>
              <H3>Comment choisir une bonne agence SEO ?</H3>
              <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z"/></svg>
          </label>
          <P className={styles.answer}>Afin de choisir l&apos;agence SEO qui sera l&apos;heureuse élue pour vous faire monter dans les résultats de Google, vous pouvez faire confiance à plusieurs éléments : la réputation de l&apos;agence, ses recommandations, ses réalisations mais également son mode de fonctionnement. Aussi, une expertise avérée peut prendre l&apos;ascendant sur ces critères : si vous recherchez un prestataire pour vous rendre visible sur Google, le fait de trouver le site de ce prestataire dans les meilleurs résultats de page de Google démontre une expertise à laquelle vous pouvez faire confiance.</P>
        </Div>
        <Div className={styles.question}>
          <input type="checkbox" id='accordion2'/>
          <label htmlFor='accordion2' id={styles.questionlabel}>
              <H3>Par quels moyens une prestation SEO peut améliorer la visibilité de mon site internet ?</H3>
              <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z"/></svg>
          </label>
          <P className={styles.answer}>Une prestation SEO peut améliorer la visibilité de votre site internet et son positionnement sur Google grâce à l&apos;optimisation de vos pages selon les trois grands piliers SEO :</P>
          <List id={styles.pilierlist} className={styles.answer}>
            <ListElement>Pilier de contenu (intention de recherche, mots-clés, content marketing, maillage interne, cocon sémantique, ...)</ListElement>
            <ListElement>Pilier technique (vitesse de chargement de votre site, mises à jour ...)</ListElement>
            <ListElement>Pilier de réputation (stratégie de netlinking et backlinks pertinents)</ListElement>
          </List>
          <P className={styles.answer}>Grâce à l&apos;optimisation de tous ces piliers qui sont tant appréciés par l&apos;algorithme des moteurs de recherche, un site internet ne peut que gagner en visibilité sur Google. Cela vous permettra d&apos;obtenir de nouvelles opportunités professionnelles et maximiser le taux de conversion de vos prospects.</P>
        </Div>
        <Div className={styles.question}>
          <input type="checkbox" id='accordion3'/>
          <label htmlFor='accordion3' id={styles.questionlabel}>
              <H3>Dois-je missionner une agence de référencement naturel ou gérer mon SEO moi-même ?</H3>
              <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z"/></svg>
          </label>
          <P className={styles.answer}>Dans le cas de mots-clés très faciles à atteindre et sans concurrence, vous pouvez essayer de gérer votre référencement naturel avec différents outils gratuits si vous avez les compétences de base pour cela. Mais ce n&apos;est pas conseillé : dans le cas de mots-clés plus concurrentiels, vous aurez besoin d&apos;une expertise et un accompagnement SEO venant d&apos;une agence SEO afin d&apos;atteindre de meilleures places sur une recherche Google.</P>
        </Div>
        <Div className={styles.question}>
          <input type="checkbox" id='accordion4'/>
          <label htmlFor='accordion4' id={styles.questionlabel}>
              <H3>Quels sont les tarifs pour une prestation de référencement naturel ?</H3>
              <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z"/></svg>
          </label>
          <P className={styles.answer}>Les prestations en matière de référencement naturel n&apos;ont pas de prix précis, cela dépend surtout du temps passé sur votre problématique. Plus un mot-clé est concurrentiel, plus le travail à fournir et la valeur ajoutée pour atteindre les premières places seront conséquents et donc plus cher sera le travail à réaliser.</P>
        </Div>
        <Div className={styles.question}>
          <input type="checkbox" id='accordion5'/>
          <label htmlFor='accordion5' id={styles.questionlabel}>
              <H3>Comment puis-je savoir si votre prestation SEO a eu des résultats ?</H3>
              <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z"/></svg>
          </label>
          <P className={styles.answer}>Notre agence de référencement SEO sera tout à fait transparente sur les résultats de la prestation réalisée mais vous pouvez aussi vérifier vos positions sur Google Search Console (dont vous aurez l&apos;accès à la fin de la prestation), Google Analytics (pour vérifier le trafic qualifié de votre site ainsi que le taux de conversion) ou encore en recherchant simplement un mot-clé sur Google. Attention cependant : le référencement naturel est une science dépendant de nombreux facteurs et tous ne sont pas contrôlables. Une agence ou consultant SEO vous garantissant un résultat précis sur une requête est À FUIR ! C&apos;est pour cela que chez ikigai, nous ne garantissons pas cela mais uniquement un gain dans une visibilité sur Internet.</P>
        </Div>
        <Div className={styles.question}>
          <input type="checkbox" id='accordion6'/>
          <label htmlFor='accordion6' id={styles.questionlabel}>
              <H3>Comment construire une bonne stratégie de référencement naturel ?</H3>
              <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z"/></svg>
          </label>
          <P className={styles.answer}>Voici étape par étape comment nous fonctionnons à l&apos;agence ikigai pour créer une stratégie SEO sur-mesure :</P>
          <List id={styles.pilierlist} className={styles.answer}>
            <ListElement>Rendez-vous de démarrage pour parler du projet et définir vos besoins</ListElement>
            <ListElement>Audit SEO de votre site internet actuel s&apos;il existe</ListElement>
            <ListElement>Analyse et définition des mots-clés à viser par rapport à divers critères (référencement local ou national, acquisition de trafic organique, pertinence et concurrence) ainsi qu&apos;en fonction de vos objectifs</ListElement>
            <ListElement>Optimisation du contenu du site internet : construction de la structure des pages, écriture des textes ainsi que du cocon sémantique</ListElement>
            <ListElement>Optimisation technique du site internet pour plus de performances</ListElement>
            <ListElement>Définition d&apos;une stratégie de netlinking avec des backlinks sémantiquement pertinents</ListElement>
          </List>
        </Div>
        <Div className={styles.question}>
          <input type="checkbox" id='accordion7'/>
          <label htmlFor='accordion7' id={styles.questionlabel}>
              <H3>Pourquoi ne pas plutôt utiliser une campagne SEA ?</H3>
              <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z"/></svg>
          </label>
          <P className={styles.answer}>Une campagne SEA (Search Engine Advertising, notamment Google Ads) est moins complexe à mettre en place mais beaucoup plus chère tout en étant moins tenable à long terme. En effet, une campagne SEA vous rend visible tant que vous dépensez du budget publicitaire mais dès que vous ne payerez plus, toute la visibilité générée disparaîtra. C&apos;est la différence entre SEO et SEA : une prestation SEO ne se paye qu&apos;une fois et dure dans le temps grâce aux actions mises en place. La campagne SEA a donc un moins bon rapport qualité prix que le référencement naturel.</P>
        </Div>
        <Div className={styles.question}>
          <input type="checkbox" id='accordion9'/>
          <label htmlFor='accordion9' id={styles.questionlabel}>
              <H3>Est-ce que vous proposez la création de site web en complément du référencement naturel ?</H3>
              <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z"/></svg>
          </label>
          <P className={styles.answer}>Oui, notre <Link href='/' title="Agence web Besançon">agence web</Link> a plusieurs casquettes concernant la stratégie digitale et propose aussi le <Link href='/developpeur-web-freelance' title="Développeur web freelance Besançon">développement et/ou la refonte de site</Link> vitrine, e-commerce, ... Ils sont développés de manière responsive et optimisée pour vous placer au plus haut sur votre requête cible.</P>
        </Div>
      </Section>
    </main>
  );
}
