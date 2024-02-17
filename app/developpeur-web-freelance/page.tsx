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
import H4 from "../components/H4";
import Strong from "../components/Strong";
import List from "../components/List";
import ListElement from "../components/ListElement";
import LinkButton from "../components/LinkButton";
import { LocalBusiness, WithContext } from 'schema-dts'
 
const jsonLd: WithContext<LocalBusiness> = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Corentin Tournier : Développeur web freelance à Besançon",
  image: "https://ikigaifreelance.com/logo-ikigai-blanc.svg",
  telephone: "07 61 41 30 61",
  email: "contact@ikigaifreelance.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Besançon",
    addressRegion: "Franche-Comté"
  }
}

export const metadata: Metadata = {
    title: "Corentin Tournier - Développeur web freelance à Besançon",
    description: "Développeur web freelance et spécialisé dans le référencement naturel (SEO), j'aide les entreprises et les indépendants à se rendre visible sur Internet.",
    keywords: "développeur web freelance, besançon, création de site internet",
    authors: [
        {name: "Corentin Tournier", url: "https://ikigaifreelance.com/developpeur-web-freelance"},
        {name: "Agence ikigai", url: "https://ikigaifreelance.com"}
    ],
    publisher: "Agence ikigai",
    alternates: { 
        canonical: "https://ikigaifreelance.com/developpeur-web-freelance" 
    },
    openGraph: {
        images:'/twittercard-100.jpg',
        type: "website",
        url: "https://ikigaifreelance.com/developpeur-web-freelance",
        title: "Corentin Tournier - Développeur web freelance à Besançon",
        description: "Développeur web freelance et spécialisé dans le référencement naturel (SEO), j'aide les entreprises et les indépendants à se rendre visible sur Internet.",
        siteName: "ikigai : Agence web à Besançon - Création de site internet",
    },
    robots: { index: true, follow: true },
    twitter: {
        card: "summary_large_image", 
        site: "https://ikigaifreelance.com", 
        creator: "Agence ikigai", 
        images: "/twittercard-100.jpg"
      }
  };

export default function Page(){

    return (
        <main id={styles.main}>
            <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
            <Section id={styles.herosection} className="herosectionclass">
                <H1>Développeur web freelance à Besançon</H1>
                <P id={styles.heroquote}>Je rends les entreprises et les indépendants<br></br> visibles sur Internet</P>
                <P id={styles.herodescription}>Se rendre visible sur Internet ne devrait pas être si difficile... Alors je le fais pour vous grâce au <Strong>développement web</Strong> !</P>
                <DecorativeRound id={styles.decorativeround}/>
            </Section>
            <Section id={styles.presentationsection}>
                <H2><Span color="var(--grey)">Un développeur web freelance.</Span><br></br> Plusieurs expertises digitales.</H2>
                <P id={styles.presentationtext}>Je m&apos;appelle Corentin Tournier, je suis gérant de l&apos;agence web ikigai, basée à Besançon. Développeur web indépendant spécialisé dans la <Strong>création de sites web</Strong>, le référencement naturel et la formation au digital, mon objectif est de booster la présence digitale des entreprises et des indépendants.</P>
                <Div id={styles.expertiseslider}>
                <Div id={styles.expertises}>
                    <Link href='/developpeur-web-freelance' title='Création de site internet' className={styles.expertise}>
                    <Image src='/creation-site-internet.png' width={128} height={128} alt="Site internet" title="Site internet"/>
                    <H3>Création de site internet</H3>
                    <P>J&apos;imagine, développe et créé des sites internet sur-mesure grâce au <Strong>développement web</Strong> avec le framework NextJS (langage React) ou grâce à des outils no-code comme WordPress et Elementor.</P>
                    </Link>
                    <Link href='/agence-seo' title='Référencement naturel (SEO)' className={styles.expertise}>
                    <Image src='/referencement-naturel-seo.png' width={128} height={128} alt="Oeil qui voit un site internet" title="Oeil qui voit un site internet"/>
                    <H3>Référencement naturel (SEO)</H3>
                    <P>J&apos;écris chaque ligne de code d&apos;un <Strong>site internet</Strong> en optimisant au maximum sa position future dans les résultats de recherche Google afin que vos clients puissent vous trouver facilement.</P>
                    </Link>
                    <Link href='/formation-wordpress-elementor' title='Formation WordPress Elementor' className={styles.expertise}>
                    <Image src='/formation-digitale.png' width={128} height={128} alt="Chapeau d'étudiant représentant la formation" title="Chapeau d'étudiant représentant la formation"/>
                    <H3>Formations au digital</H3>
                    <P>Je forme également les personnes désireuses d&apos;apprendre à la création de sites internet grâce à des plateformes no-code (site WordPress/Elementor) ainsi qu&apos;au référencement naturel (SEO).</P>
                    </Link>
                </Div>
                </Div>
            </Section>
            <Section id={styles.realisationssection}>
                <Div id={styles.realisationsdiv}>
                <H2>Mes réalisations</H2>
                <Div id={styles.realisationsgrid}>
                    <Div id={styles.realisation1}>
                    <H3>Le Comptoir des Bières - École-Valentin</H3>
                    <Link href='https://lecomptoirdesbieresbesancon.com/' rel="external nofollow noopener noreferrer" target="_blank" title="site e-commerce réalisé par notre agence pour le Comptoir des Bières">
                        <Image src='/site-ecommerce-comptoir.png' alt="Capture d'écran du site e-commerce réalisé par notre agence pour le Comptoir des Bières" width={3024} height={1644} title="Capture d'écran du site e-commerce réalisé par notre agence pour le Comptoir des Bières"></Image>
                    </Link>
                    </Div>
                    <Div id={styles.realisation2}>
                    <H3>Le Petit Atelier Photos - Besançon</H3>
                    <Link href='https://lepetitatelierphotos.com/' rel="external nofollow noopener noreferrer" target="_blank" title="site vitrine réalisé par notre agence pour le Petit Atelier Photos">
                        <Image src='/site-vitrine-lepetitatelierphotos.png' alt="Capture d'écran du site vitrine réalisé par notre agence pour le Petit Atelier Photos" width={3024} height={1644} title="Capture d'écran du site vitrine réalisé par notre agence pour le Petit Atelier Photos"></Image>
                    </Link>
                    </Div>
                    <Div id={styles.realisation3}>
                    <H3>Real Estate Agency (Portfolio)</H3>
                    <Link href='https://realestate-theta-eosin.vercel.app/' rel="external nofollow noopener noreferrer" target="_blank" title="site d'annonces immobilières réalisé par notre agence pour notre portfolio">
                        <Image src='/site-vitrine-realestate.png' alt="Capture d'écran du site d'annonces immobilières réalisé par notre agence pour notre portfolio" width={3024} height={1644} title="Capture d'écran du site d'annonces immobilières réalisé par notre agence pour notre portfolio"></Image>
                    </Link>
                    </Div>
                    <Div id={styles.realisation4}>
                    <H3>Real Madrid (Portfolio)</H3>
                    <Link href='https://realmadridnextjs.vercel.app/' rel="external nofollow noopener noreferrer" target="_blank" title="site vitrine du Real Madrid réalisé par notre agence pour notre portfolio">
                        <Image src='/site-vitrine-realmadrid.png' alt="Capture d'écran du site vitrine du Real Madrid réalisé par notre agence pour notre portfolio" width={3024} height={1644} title="Capture d'écran du site vitrine du Real Madrid réalisé par notre agence pour notre portfolio"></Image>
                    </Link>
                    </Div>
                    <Div id={styles.realisation5}>
                    <H3>Apple (Portfolio)</H3>
                    <Link href='https://appleiphone15pro.vercel.app/' rel="external nofollow noopener noreferrer" target="_blank" title="configurateur en ligne iPhone réalisé par notre agence pour notre portfolio">
                        <Image src='/configurateur-iphone.png' alt="Capture d'écran du configurateur en ligne iPhone réalisé par notre agence pour notre portfolio" width={3024} height={1644} title="Capture d'écran du configurateur en ligne iPhone réalisé par notre agence pour notre portfolio"></Image>
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
                        <H2>Mes valeurs en tant que<Span color="var(--orange)"> développeur web freelance</Span>.</H2>
                        <P>Basé dans le Doubs en Bourgogne Franche-Comté, il me tient à cœur de répondre au mieux aux attentes de mes clients et de participer au fonctionnement de l&apos;écosystème économique local.</P>
                        <H3>Une seule mission : votre visibilité</H3>
                        <P>De nos jours, obtenir de nouvelles opportunités commerciales est devenu un vrai défi pour la plupart des entreprises. Une bonne visibilité sur Google est l&apos;un des moyens de relever ce défi.</P>
                        <H3>Quelque soit votre statut ou votre localisation</H3>
                        <P>Que vous soyez une entreprise, un indépendant ou une association, vous serez les bienvenus et cela, peu importe où vous vous situez.</P>
                        <H3>Avec des offres sur-mesure</H3>
                        <P>J&apos;adapte chaque prestation aux besoins que je définis avec vous pendant notre premier rendez-vous.</P>
                        <H3>Et un seul interlocuteur</H3>
                        <P>Étant un développeur web indépendant, plus de problèmes de communication ! Vous ne communiquez qu&apos;avec moi durant toute la durée de notre collaboration.</P>
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
                <P>L&apos;agence ikigai a réalisé le <Strong>site internet</Strong> de mon entreprise de photographie.<br></br>
                <br></br>Nous avons étudié ensemble mon projet et Corentin a pris le temps de bien comprendre quels étaient les enjeux de ma démarche. À l&apos;écoute, il m&apos;a conseillé et a toujours répondu à mes questions.
                <br></br>Il a su apporter des solutions pertinentes aux difficultés que comprenait mon <Strong>cahier des charges</Strong>.
                <br></br>Régulièrement, il m&apos;invitait à valider l&apos;avancée de la création du site. Ainsi, nous avions un échange établi tout au long de notre collaboration.
                <br></br><br></br>Corentin est quelqu&apos;un de professionnel, disponible et réactif. Le travail est réalisé avec soin dans le respect des volontés du client.
                <br></br><br></br>Très satisfaite, je recommande vivement l&apos;agence ikigai !</P>
                </Div>
            </Section>
            <Section id={styles.pricesection}>
                <H2>Mes tarifs de développeur web freelance.</H2>
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
                        <ListElement>Responsives (adapté aux écrans mobiles)</ListElement>
                        <ListElement>Hébergement et <Strong>nom de domaine</Strong> inclus pendant 12 mois</ListElement>
                        </List>
                        <LinkButton rel="external nofollow noopener noreferrer" target="_blank" href="mailto:contact@ikigaifreelance.com" title="Demander un devis" className="button orangebutton">Demandez un devis</LinkButton>
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
                        <Image src='/logo-qualiopi.png' width={501} height={211} alt="Logo Qualiopi, certification attestant de la qualité des prestations proposées par les organismes de formation sur la base du Référentiel National Qualité" title='Logo Qualiopi, certification attestant de la qualité des prestations proposées par les organismes de formation sur la base du Référentiel National Qualité'/>
                        <Image src='/logo-datadock.png' width={481} height={519} alt="Logo Certification Datadock, l'outil d'aide au référencement des organismes de formation" title="Logo Certification Datadock, l'outil d'aide au référencement des organismes de formation"/>
                        <Image src='/logo_moncompteformation.png' width={2647} height={1559} alt="Logo Mon Compte Formation" title="Logo Mon Compte Formation"/>
                        </Div>
                        <LinkButton rel="external nofollow noopener noreferrer" target="_blank" href="mailto:contact@ikigaifreelance.com" title="Demander un devis" className="button orangebutton">Demandez un devis</LinkButton>
                    </Div>
                </Div>
            </Section>
            <Section id={styles.faqsection}>
                <H2>Questions fréquentes sur les développeurs web freelances.</H2>
                    <Div className={styles.question}>
                        <input type="checkbox" id='accordion1'/>
                        <label htmlFor='accordion1' id={styles.questionlabel}>
                            <H3>Qu&apos; est-ce qu&apos;un développeur web freelance ?</H3>
                            <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z"/></svg>
                        </label>
                        <P className={styles.answer}>Un développeur web freelance est un professionnel indépendant qui peut s&apos;occuper de la réalisation de différents projets digitaux : cela peut aller de la conception d&apos;un <Strong>site internet</Strong> vitrine ou e-commerce jusqu&apos;à la <Strong>mise en place d&apos;applications web</Strong>, en passant par la refonte de ces mêmes produits. Chaque développeur a des compétences techniques et une connaissance approfondie de son <Strong>langage de programmation</Strong> informatique ainsi que de sa technologie. Cela lui permet de travailler sur les demandes de ces clients et réaliser des produits numériques de qualité, aussi bien pour ses clients que pour ses utilisateurs.</P>
                    </Div>
                    <Div className={styles.question}>
                        <input type="checkbox" id='accordion2'/>
                        <label htmlFor='accordion2' id={styles.questionlabel}>
                            <H3>À part le développement web, un développeur web peut-il maîtriser d&apos;autres thématiques ?</H3>
                            <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z"/></svg>
                        </label>
                        <P className={styles.answer}>Oui, un développeur web freelance peut avoir des compétences techniques transverses. Personnellement, je développe avec NextJS, React, HTML, CSS, JavaScript mais je maîtrise également le référencement naturel, plus communément appelé SEO. Cela permet aux sites internet de mes clients d&apos;atteindre de plus hautes positions dans les résultats de recherche Google sur leur mot-clé.</P>
                    </Div>
                    <Div className={styles.question}>
                        <input type="checkbox" id='accordion3'/>
                        <label htmlFor='accordion3' id={styles.questionlabel}>
                            <H3>Pourquoi choisir un développeur web freelance ?</H3>
                            <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z"/></svg>
                        </label>
                        <P className={styles.answer}>Choisir un développeur web freelance au lieu d&apos;une agence digitale classique a plusieurs avantages et spécificités. Pour moi, peu importe le statut, la localisation ou l&apos;ambition, vous serez accueilli à bras ouverts, vous bénéficierez sans doute de meilleurs prix par rapport à la moyenne des tarifs pour ce genre de service et vous n&apos;avez qu&apos;une seule personne qui s&apos;occupe de votre projet, ce qui rend la communication et la compréhension plus simple et fluide.</P>
                    </Div>
                    <Div className={styles.question}>
                        <input type="checkbox" id='accordion4'/>
                        <label htmlFor='accordion4' id={styles.questionlabel}>
                            <H3>Comment bien choisir son développeur web freelance ?</H3>
                            <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z"/></svg>
                        </label>
                        <P className={styles.answer}>Pour choisir le développeur web qui sera votre prestataire, vous pouvez vous fier à plusieurs éléments : sa réputation, son expérience, ses réalisations, les prestations qu&apos;il propose mais également son mode de fonctionnement. Aussi, une expertise avérée peut faire pencher la balance : si vous recherchez un prestataire pour vous concevoir un <Strong>site web</Strong> qui sera bien placé dans les résultats de recherche Google sur un mot-clé spécifique, le fait de le trouver dans les meilleurs résultats quand vous en cherchez un sur Google démontre son expertise.</P>
                    </Div>
                    <Div className={styles.question}>
                        <input type="checkbox" id='accordion5'/>
                        <label htmlFor='accordion5' id={styles.questionlabel}>
                            <H3>Combien facture un développeur web freelance ?</H3>
                            <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z"/></svg>
                        </label>
                        <P className={styles.answer}>Chaque développeur a ses propres prix ou TJM (Taux Journalier Moyen, soit le montant qu&apos;il facture par jour) selon les projets ou l&apos;expérience. Pour ma part, mon TJM est de 350€ pour des interventions ponctuelles. Pour la création de produits web complets, vous pouvez retrouver les montants dans la rubrique concernée. Ceux-ci varient en partie selon le <Strong>langage de programmation</Strong> utilisé : par exemple, un <Strong>site web</Strong> développé avec React et NextJS met plus de temps à produire qu&apos;avec WordPress et Elementor.</P>
                    </Div>
                    <Div className={styles.question}>
                        <input type="checkbox" id='accordion6'/>
                        <label htmlFor='accordion6' id={styles.questionlabel}>
                            <H3>Un développeur web freelance accepte-t-il les missions/projets à distance ?</H3>
                            <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z"/></svg>
                        </label>
                        <P className={styles.answer}>Encore une fois, cela dépend selon les développeurs. Dans mon cas, peu importe la localisation géographique, j&apos;accepte de travailler avec vous si vous résidez en France ou dans un pays permettant une facturation facilitée.</P>
                    </Div>
            </Section>
        </main>
    )
}