import Div from "../Div";
import styles from './Header.module.css'
import Link from "next/link";
import Image from "next/image";
import LinkButton from "../LinkButton";
import { IoMenu } from "react-icons/io5";
import List from "../List";
import ListLinkElement from "../ListLinkElement";

export default function Header(){

    return (
        <header id={styles.header}>
            <Div id={styles.logocontainer} className={styles.headersidecontainer}>
                <Link href="/" title="Logo de l'agence ikigai, agence web à Besançon">
                    <Image src='/logo-ikigai-blanc.svg' alt="Logo de l'agence ikigai, agence web à Besançon" title="Logo de l'agence ikigai, agence web à Besançon" width={300} height={96} />
                </Link>
            </Div>
            <Div id={styles.buttoncontainer} className={styles.headersidecontainer}>
                <LinkButton href="/contact" title='Demande de devis gratuit' className="button whitebutton">Devis gratuit</LinkButton>
                <input type="checkbox" id={styles.menucheckbox}/>
                <label htmlFor={styles.menucheckbox} id={styles.checkbox}>
                    <IoMenu size='60%'/>
                </label>
                <Div id={styles.mainmenu}>
                    <Div id={styles.menu}>
                        <nav>
                            <List>
                                <ListLinkElement href='/creation-site-internet' className={styles.listelement} title='Création de site internet'>Création de site internet</ListLinkElement>
                                <ListLinkElement href='/creation-site-internet' className={styles.listelement} title='Référencement naturel (SEO)'>Référencement naturel</ListLinkElement>
                                <ListLinkElement href='/creation-site-internet' className={styles.listelement} title='Formateur digital Besançon'>Formation au digital</ListLinkElement>
                                <ListLinkElement href='/creation-site-internet' className={styles.listelement} title='Demande de devis gratuit'>Contact & Demande de devis</ListLinkElement>
                            </List>
                        </nav>
                    </Div>
                    <Div id={styles.menudescription}>
                        <Link href="/" title="Logo de l'agence ikigai, agence web à Besançon">
                            <Image src='/logo-ikigai-blanc.svg' alt="Logo de l'agence ikigai, agence web à Besançon" title="Logo de l'agence ikigai, agence web à Besançon" width={300} height={96} />
                        </Link>
                    </Div>
                </Div>
            </Div>
        </header>
    )
}