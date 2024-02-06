import Div from "../Div";
import styles from './footer.module.css'
import Image from "next/image";
import P from "../P";
import List from "../List";
import ListLinkElement from "../ListLinkElement";
import { format } from 'date-fns';
import Link from "next/link";

export default function Footer(){

    const currentDate = new Date();

    const currentYear = format(currentDate, 'yyyy');

    return (
        <footer id={styles.footer}>
            <Div id={styles.firstfooter}>
                <Div id={styles.logofootercontainer}>
                    <Link href="/" title="Logo de l'agence ikigai, agence web à Besançon">
                        <Image src='/logo-ikigai-blanc.svg' alt="Logo de l'agence ikigai, agence web à Besançon" title="Logo de l'agence ikigai, agence web à Besançon" width={300} height={96} />
                    </Link>
                    <P>Agence web à Besançon gérée par un développeur web freelance, nous vous rendons visible sur le web avec des sites internet optimisés.</P>
                </Div>
                <Div id={styles.footermenu}>
                    <P>Nos expertises</P>
                    <List className={styles.infolist}>
                        <ListLinkElement href='/creation-site-internet' title='Création de site internet'>Création de site internet</ListLinkElement>
                        <ListLinkElement href='/creation-site-internet' title='Référencement naturel (SEO)'>Référencement naturel</ListLinkElement>
                        <ListLinkElement href='/creation-site-internet' title='Formateur digital Besançon'>Formation au digital</ListLinkElement>
                        <ListLinkElement href='/creation-site-internet' title='Demande de devis gratuit'>Contact & Demande de devis</ListLinkElement>
                    </List>
                </Div>
                <Div id={styles.footercontact}>
                    <P>Contact</P>
                    <List className={styles.infolist}>
                        <ListLinkElement title="Localisation d'ikigai, agence web à Besançon" href="https://maps.app.goo.gl/cJ9Dz4mSuExCRDq97">Besançon, Doubs, Franche-Comté</ListLinkElement>
                        <ListLinkElement title="Numéro de téléphone d'ikigai, agence web à Besançon" href="tel:+33761413061">07 61 41 30 61</ListLinkElement>
                        <ListLinkElement title="Adresse mail d'ikigai, agence web à Besançon" href="mailto:contact@ikigaifreelance.com">contact@ikigaifreelance.com</ListLinkElement>
                    </List>
                    <List id={styles.socialmedias}>
                        <ListLinkElement title="Compte Facebook d'ikigai, agence web à Besançon" href="https://www.facebook.com/profile.php?id=100084150312537" rel="external nofollow">Facebook</ListLinkElement>
                        <ListLinkElement title="Compte Instagram d'ikigai, agence web à Besançon" href="https://www.instagram.com/ikigaifreelance/" rel="external nofollow">Instagram</ListLinkElement>
                        <ListLinkElement title="Compte LinkedIn d'ikigai, agence web à Besançon" href="https://www.linkedin.com/company/ikigai-freelance/" rel="external nofollow">LinkedIn</ListLinkElement>
                    </List>
                </Div>
            </Div>
            <Div id={styles.secondfooter}>
                <P>Copyright © {currentYear} Agence ikigai</P>
                <List>
                    <ListLinkElement title="Mentions légales d'ikigai, agence web à Besançon" href="/mentions-legales">Mentions légales</ListLinkElement>
                    <ListLinkElement title="Politique de confidentialité d'ikigai, agence web à Besançon" href="/politique-de-confidentialite">Politique de confidentialité</ListLinkElement>
                </List>
            </Div>
        </footer>
    )
}