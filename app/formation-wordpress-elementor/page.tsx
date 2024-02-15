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
import LinkButton from "../components/LinkButton";

export const metadata: Metadata = {
    title: "Apprendre à créer un site internet - Formation WordPress/Elementor",
    description: "Apprenez à créer un site web facilement grâce à une formation WordPress et Elementor de qualité : formation 100% prise en charge CPF & Pôle Emploi !",
    keywords: "formation wordpress, formation elementor, eligible cpf, eligible pole emploi, création de site internet",
    authors: [
        {name: "Corentin Tournier", url: "https://ikigaifreelance.com/developpeur-web-freelance"},
        {name: "Agence ikigai", url: "https://ikigaifreelance.com"}
    ],
    publisher: "Agence ikigai",
    alternates: { 
        canonical: "https://ikigaifreelance.com/formation-wordpress-elementor" 
    },
    openGraph: {
        type: "website",
        url: "https://ikigaifreelance.com/formation-wordpress-elementor",
        title: "Apprendre à créer un site internet - Formation WordPress & Elementor",
        description: "Apprenez à créer un site web facilement grâce à une formation WordPress et Elementor de qualité : formation éligible CPF & Pôle Emploi !",
        siteName: "ikigai : Agence web à Besançon - Création de site internet",
    },
    robots: { index: true, follow: true }
  };

export default function Page(){

    return (
        <main id={styles.main}>
            <Section id={styles.herosection} className="herosectionclass">
                <H1>Formation WordPress & Elementor</H1>
                <P id={styles.heroquote}>Nous vous formons à vous <br></br>rendre visible</P>
                <P id={styles.herodescription}>Se rendre visible sur Internet ne devrait pas être si difficile... <br></br>Alors notre formation vous apprend à le faire par la création de site web !</P>
                <DecorativeRound id={styles.decorativeround}/>
            </Section>
            <Section id={styles.presentationsection}>
                <H2><Span color="var(--grey)">Une formation.</Span><br></br> Plusieurs objectifs.</H2>
                <P id={styles.presentationtext}>L&apos;agence ikigai propose une formation en présentiel ou à distance afin de vous apprendre à créer votre propre site internet sans écrire une seule ligne de code, grâce à WordPress et Elementor.</P>
                <Div id={styles.expertiseslider}>
                <Div id={styles.expertises}>
                    <Link href='/' title='Installation de site internet' className={styles.expertise}>
                    <Image src='/site-internet-web.png' width={128} height={128} alt="Globe représentant le web et ses sites internet" title="Globe représentant le web et ses sites internet"/>
                    <H3>Installation de votre site internet</H3>
                    <P>Notre formation vous apportera les connaissances clés techniques afin de vous permettre d&apos;installer l&apos;espace dans lequel vous allez mettre en ligne et créer un site internet complet (serveur, hébergement et nom de domaine).</P>
                    </Link>
                    <Link href='/developpeur-web-freelance' title='Création de site internet' className={styles.expertise}>
                    <Image src='/creation-site-internet.png' width={128} height={128} alt="Site internet" title="Site internet"/>
                    <H3>Création de votre site internet</H3>
                    <P>Réussir à créer son propre site internet est l&apos;objectif ultime de cette formation : à la fin de celle-ci, vous pourrez sans difficulté créer votre site internet et ses différentes pages grâce à WordPress et Elementor, publier des articles de blog, ainsi que gérer et mettre à jour votre site internet, son thème et ses plugins pour plus de sécurité.</P>
                    </Link>
                    <Link href='/agence-seo' title='Référencement naturel (SEO)' className={styles.expertise}>
                    <Image src='/referencement-naturel-seo.png' width={128} height={128} alt="Oeil qui voit un site internet" title="Oeil qui voit un site internet"/>
                    <H3>Visibilité grâce au référencement naturel (SEO)</H3>
                    <P>Le moyen de mettre en avant et de rendre visible votre site internet : le référencement naturel, dit SEO. Vous apprendrez les différents concepts du référencement naturel et l&apos;optimisation de vos pages afin de référencer votre site internet dans les premiers résultats des moteurs de recherche comme Google.</P>
                    </Link>
                </Div>
                </Div>
            </Section>
            <Section id={styles.realisationssection}>
                <Div id={styles.realisationsdiv}>
                    <H2>Informations sur la formation</H2>
                    <Div className={styles.requirepoint}>
                        <Div className={styles.requirepointdiv}>
                            <H3>Prérequis pour la formation</H3>
                            <P>Formation ouverte aux personnes de niveau débutant : il faut seulement savoir se servir d&apos;un ordinateur et d&apos;Internet !</P>
                        </Div>
                        <Div className={styles.requirepointdiv}>
                            <H3>Diplôme / certification à la fin de la formation</H3>
                            <P>Certification d&apos;organisme de formation spécialisé dans la création de site web WordPress.</P>
                        </Div>
                    </Div>
                    <Div className={styles.requirepoint}>
                        <Div className={styles.requirepointdiv}>
                            <H3>Durée et localisation</H3>
                            <P>3 jours de formation soit l&apos;équivalent de 21 heures de formation en présentiel sur Besançon ou à distance en vidéo/visio-conférence avec votre formateur.</P>
                        </Div>
                        <Div className={styles.requirepointdiv}>
                            <H3>Coût et financement</H3>
                            <P>2850,00 € HT (3420€ TTC) pour les formations individuelles ou 1500,00 € HT (1800€ TTC) pour les formations en groupe.</P>
                        </Div>
                    </Div>
                    <P id={styles.financementtext}>Financement possible via le CPF (Compte Professionnel de Formation) ou Pôle Emploi pour les demandeurs d&apos;emploi ainsi que les salariés dans le cadre du plan de développement des compétences.</P>
                    <LinkButton target="_blank" href="mailto:contact@ikigaifreelance.com?subject=Informations formation" title="En savoir plus sur la formation" className="button orangebutton">Des questions ?</LinkButton>
                </Div>
            </Section>
            <Section id={styles.vertuespresentationsection}>
                <Div id={styles.vertuespresentation}>
                    <Div id={styles.vertues}>
                        <H2>Comment va se passer cette<Span color="var(--orange)"><br></br> formation WordPress et Elementor</Span> ?</H2>
                        <H3>Premier rendez-vous pour votre projet de formation</H3>
                        <P>Nous nous rencontrons une première fois afin de définir vos besoins de formation.</P>
                        <H3>Constitution de votre dossier de financement</H3>
                        <P>Si vous êtes éligible au CPF (Compte Professionnel de Formation), nous réalisons votre dossier pour financer en partie ou à 100% votre formation WordPress.</P>
                        <H3>Planification des cours de la formation</H3>
                        <P>Après avoir réglé pour les modalités administratives, nous vous recontactons pour planifier avec vous les jours et heures de formation où vous êtes disponible.</P>
                        <H3>Suivi après les derniers cours</H3>
                        <P>Après avoir terminé toutes nos heures de formation, vous êtes suivi pendant quelques jours pendant la préparation de votre certification.</P>
                        <H3>Passage de la certification de la formation</H3>
                        <P>Vous passez la certification de formation grâce aux différentes connaissances que vous avez pu acquérir au cours de votre parcours de formation et de notre enseignement.</P>
                    </Div>
                    <Link href='/developpeur-web-freelance' title='Développeur web freelance à Besançon' id={styles.freelancepresentation}>
                        <Image src='/corentin-tournier-developpeur-web-freelance.webp' alt="Corentin Tournier, développeur web freelance gérant l'agence ikigai" title="Corentin Tournier, développeur web freelance gérant l'agence ikigai" width={3024} height={4032}></Image>
                        <Div id={styles.overlaypresentation}></Div>
                        <H3>Corentin Tournier</H3>
                        <P>Développeur web et formateur freelance gérant l&apos;agence ikigai</P>
                    </Link>
                </Div>
            </Section>
            <Section id={styles.pricesection}>
                <H2>Programme de cours et parcours de formation.</H2>
                <Div id={styles.offers}>
                    <Div id={styles.formationoffers}>
                        <H3>Module 1 : Un site internet, c&apos;est quoi ?</H3>
                            <H4>Définition d&apos;un site internet</H4>
                            <H4>Comment fonctionne un site internet ?</H4>
                            <H4>Les différents langages de programmation</H4>
                            <H4>L&apos;organisation d&apos;une page web</H4>
                            <H4 className={styles.lastchild}>WordPress et Elementor, le combo gagnant</H4>
                        <H3>Module 2 : Mise en place du site internet</H3>
                            <H4>L&apos;hébergement du site internet</H4>
                            <H4>Comprendre le back-office WordPress</H4>
                            <H4>Paramétrer le site internet</H4>
                            <H4>Installation d&apos;Elementor</H4>
                            <H4 className={styles.lastchild}>Installation de plugins utiles</H4>
                        <H3>Module 3 : Création du site internet</H3>
                            <H4>Paramétrage et création du header et du footer</H4>
                            <H4>Paramétrage et création de la page d&apos;accueil</H4>
                            <H4>Mise en pratique sur un exercice d&apos;exemple précis</H4>
                        <P id={styles.qualiopi}>Formations certifiées Qualiopi & finançables OPCO et Pôle Emploi</P>
                        <Div id={styles.logoformation}>
                        <Image src='/logo-qualiopi.png' width={501} height={211} alt="Logo Qualiopi, certification attestant de la qualité des prestations proposées par les organismes de formation sur la base du Référentiel National Qualité" title='Logo Qualiopi, certification attestant de la qualité des prestations proposées par les organismes de formation sur la base du Référentiel National Qualité'/>
                        <Image src='/logo-datadock.png' width={481} height={519} alt="Logo Certification Datadock, l'outil d'aide au référencement des organismes de formation" title="Logo Certification Datadock, l'outil d'aide au référencement des organismes de formation"/>
                        <Image src='/logo_moncompteformation.png' width={2647} height={1559} alt="Logo Mon Compte Formation" title="Logo Mon Compte Formation"/>
                        </Div>
                        <LinkButton target="_blank" href="mailto:contact@ikigaifreelance.com" title="Demander un devis" className="button orangebutton">Demandez un devis</LinkButton>
                    </Div>
                </Div>
            </Section>
            <Section id={styles.clientsection}>
                <H2>Les organismes de formation qui ont confiance en notre formation.</H2>
                <Div id={styles.logoorganisme}>
                    <Link target="_blank" className={styles.linkimage} href='https://www.univ-fcomte.fr/' title="Université de Franche-Comté, organisme de formation" rel="external nofollow">
                        <Image src='/logo-universite-franche-comte.png' width={1200} height={330} alt="Logo de l'Université de Franche-Comté, organisme de formation" title="Logo de l'Université de Franche-Comté, organisme de formation"/>
                    </Link>
                    <Link target="_blank" className={styles.linkimage} href='https://www.formagraph.com/' title="Formagraph Design, organisme de formation" rel="external nofollow">
                        <Image src='/logo-formagraph-design.png' width={369} height={27} alt="Logo de Formagraph Design, organisme de formation" title="Logo de Formagraph Design, organisme de formation"/>
                    </Link>
                    <Link target="_blank" className={styles.linkimage} href='https://senza-formations.com/' title="Senza Formation, organisme de formation" rel="external nofollow">
                        <Image src='/logo-senza-formation.png' width={650} height={203} alt="Logo de Senza Formation, organisme de formation" title="Logo de Senza Formation, organisme de formation"/>
                    </Link>
                    <Link target="_blank" className={styles.linkimage} href='https://axio-formation.com/' title="Axio Formation, organisme de formation" rel="external nofollow">
                        <Image src='/logo-axio-formation.png' width={601} height={275} alt="Logo d'Axio Formation, organisme de formation" title="Logo d'Axio Formation, organisme de formation"/>
                    </Link> 
                </Div>
            </Section>
            <Section id={styles.faqsection}>
                <H2>Questions fréquentes sur la formation WordPress et Elementor.</H2>
                    <Div className={styles.question}>
                        <input type="checkbox" id='accordion1'/>
                        <label htmlFor='accordion1' id={styles.questionlabel}>
                            <H3>Quel est le but de WordPress ?</H3>
                            <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z"/></svg>
                        </label>
                        <P className={styles.answer}>Le but de WordPress est de rendre accessible la création de sites web au plus grand nombre, sans écrire une seule ligne de code. En effet, à la base, WordPress est un CMS (Content Management System ou Système de gestion de contenu en français) qui permet de créer des sites web de type blog pour y poster des articles. Mais depuis de nombreuses années, WordPress s&apos;est diversifié dans ses fonctionnalités et permet maintenant de créer des sites web vitrines ou e-commerce de qualité pour votre entreprise, nativement avec Gutenberg ou grâce à différents plugins ou extensions (Elementor ou Divi par exemple).</P>
                    </Div>
                    <Div className={styles.question}>
                        <input type="checkbox" id='accordion2'/>
                        <label htmlFor='accordion2' id={styles.questionlabel}>
                            <H3>Est-ce facile d&apos;utiliser WordPress ?</H3>
                            <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z"/></svg>
                        </label>
                        <P className={styles.answer}>Comme nous venons de le dire, WordPress a pour but de permettre au grand public de créer des sites web facilement mais l&apos;interface de ce CMS reste compliquée pour les non-initiés.</P>
                    </Div>
                    <Div className={styles.question}>
                        <input type="checkbox" id='accordion3'/>
                        <label htmlFor='accordion3' id={styles.questionlabel}>
                            <H3>Pourquoi faire une formation WordPress ?</H3>
                            <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z"/></svg>
                        </label>
                        <P className={styles.answer}>WordPress restant plus ou moins compliqué pour les utilisateurs qui viennent de le découvrir, il est impératif de se former et de maîtriser ce logiciel si l&apos;on désire créer soi-même son site web avec. Vous pouvez passer par des tutos gratuits en ligne mais cette méthode ne sera pas aussi efficace qu&apos;une vraie formation comme la notre. C&apos;est pourquoi notre formation WordPress et Elementor vous donnera toutes les compétences pour vous débrouiller et ainsi créer et personnaliser un site web à l&apos;image de votre entreprise ou de votre activité.</P>
                    </Div>
                    <Div className={styles.question}>
                        <input type="checkbox" id='accordion4'/>
                        <label htmlFor='accordion4' id={styles.questionlabel}>
                            <H3>C&apos;est quoi Elementor dans WordPress ?</H3>
                            <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z"/></svg>
                        </label>
                        <P className={styles.answer}>Elementor est un plugin WordPress dit &quot;site-builder&quot; (constructeur ou éditeur de site en français). Il s&apos;agit d&apos;un logiciel et d&apos;un thème à installer dans votre interface WordPress afin de pouvoir créer un site web facilement avec un système de blocs personnalisables en glisser-déposer. Ce plugin est dit &quot;no-code&quot; car vous n&apos;aurez en aucun cas à écrire des lignes de code.</P>
                    </Div>
                    <Div className={styles.question}>
                        <input type="checkbox" id='accordion5'/>
                        <label htmlFor='accordion5' id={styles.questionlabel}>
                            <H3>Pourquoi passer à Elementor ?</H3>
                            <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z"/></svg>
                        </label>
                        <P className={styles.answer}>Passer à Elementor est un moyen pratique de contourner le fait d&apos;écrire du code pour créer votre site web et gagner du temps. De plus, Elementor est le leader des outils de sa catégorie, ce qui justifie ce choix.</P>
                    </Div>
                    <Div className={styles.question}>
                        <input type="checkbox" id='accordion6'/>
                        <label htmlFor='accordion6' id={styles.questionlabel}>
                            <H3>Est-ce que Elementor est payant ?</H3>
                            <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z"/></svg>
                        </label>
                        <P className={styles.answer}>Elementor possède une version gratuite et une version payante. Dans le cadre de cette formation, nous utiliserons la version gratuite.</P>
                    </Div>
                    <Div className={styles.question}>
                        <input type="checkbox" id='accordion7'/>
                        <label htmlFor='accordion7' id={styles.questionlabel}>
                            <H3>Quel type de site puis-je réaliser grâce à WordPress et Elementor gratuit ?</H3>
                            <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z"/></svg>
                        </label>
                        <P className={styles.answer}>Grâce à WordPress et Elementor, vous pouvez créer des sites vitrines, des sites boutiques (ou ecommerce) ainsi que beaucoup d&apos;autres types de sites à contenu. Il suffit de le fusionner à d&apos;autres plugins/extensions comme Woocommerce pour le ecommerce.</P>
                    </Div>
            </Section>
        </main>
    )
}