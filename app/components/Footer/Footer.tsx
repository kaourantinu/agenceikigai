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
                    <Link href="/" title="Agence ikigai, agence web à Besançon">
                        <Image src='/logo-ikigai-blanc.svg' alt="Agence ikigai, agence web à Besançon" title="Agence ikigai, agence web à Besançon" width={300} height={96} />
                    </Link>
                    <P>Agence web à Besançon gérée par un développeur web freelance, nous vous rendons visible sur le web avec des sites internet optimisés.</P>
                </Div>
                <Div id={styles.footermenu}>
                    <P>Nos expertises</P>
                    <List className={styles.infolist}>
                        <ListLinkElement href='/developpeur-web-freelance' title='Développeur web freelance à Besançon'>Création de site internet</ListLinkElement>
                        <ListLinkElement href='/agence-seo' title='Agence seo Besançon'>Référencement naturel (SEO)</ListLinkElement>
                        <ListLinkElement href='/formation-wordpress-elementor' title='Formation WordPress Elementor'>Formation au digital</ListLinkElement>
                        <ListLinkElement href="mailto:contact@ikigaifreelance.com?subject=Demande de devis" title='Demande de devis gratuit'>Demande de devis gratuit</ListLinkElement>
                    </List>
                </Div>
                <Div id={styles.footercontact}>
                    <P>Contact</P>
                    <List className={styles.infolist}>
                        <ListLinkElement title="Localisation d'ikigai, agence web à Besançon" href="https://maps.app.goo.gl/cJ9Dz4mSuExCRDq97" rel="external nofollow noopener noreferrer" target="_blank">Besançon, Doubs, Franche-Comté</ListLinkElement>
                        <ListLinkElement title="Numéro de téléphone d'ikigai, agence web à Besançon" href="tel:+33761413061">07 61 41 30 61</ListLinkElement>
                        <ListLinkElement title="Adresse mail d'ikigai, agence web à Besançon" href="mailto:contact@ikigaifreelance.com" rel="external nofollow noopener noreferrer" target="_blank">contact@ikigaifreelance.com</ListLinkElement>
                    </List>
                    <List id={styles.socialmedias}>
                        <ListLinkElement title="Compte Facebook d'ikigai, agence web à Besançon" href="https://www.facebook.com/profile.php?id=100084150312537" rel="external nofollow noopener noreferrer" target="_blank">Facebook</ListLinkElement>
                        <ListLinkElement title="Compte Instagram d'ikigai, agence web à Besançon" href="https://www.instagram.com/ikigaifreelance/" rel="external nofollow noopener noreferrer" target="_blank">Instagram</ListLinkElement>
                        <ListLinkElement title="Compte LinkedIn d'ikigai, agence web à Besançon" href="https://www.linkedin.com/company/ikigai-freelance/" rel="external nofollow noopener noreferrer" target="_blank">LinkedIn</ListLinkElement>
                    </List>
                </Div>
            </Div>
            <Div id={styles.secondfooter}>
                <P>Copyright © {currentYear} Agence ikigai</P>
                <List>
                    <ListLinkElement title="Mentions légales d'ikigai, agence web à Besançon" href="/mentions-legales">Mentions légales</ListLinkElement>
                    <ListLinkElement title="Politique de confidentialité d'ikigai, agence web à Besançon" href="/politique-de-confidentialite">Politique de confidentialité</ListLinkElement>
                    <ListLinkElement title="Conditions générales de vente d'ikigai, agence web à Besançon" href="/conditions-generales-de-vente">Conditions générales de vente</ListLinkElement>
                </List>
            </Div>
        </footer>
    )
}