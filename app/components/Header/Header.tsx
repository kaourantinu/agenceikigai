"use client"

import Div from "../Div";
import styles from './Header.module.css'
import Link from "next/link";
import Image from "next/image";
import LinkButton from "../LinkButton";
import List from "../List";
import ListLinkElementMenu from "../ListLinkElement";
import { useRef, useState } from "react";

export default function Header(){

    const menubutton = useRef<any>(null);

    function removeCheck() {
        if (menubutton.current) {
            menubutton.current.control.checked = false;
        }
    }

    return (
        <header id={styles.header}>
            <Div id={styles.logocontainer} className={styles.headersidecontainer}>
                <Link href="/" title="Agence ikigai, agence web à Besançon">
                    <Image src='/logo-ikigai-blanc.svg' alt="Agence ikigai, agence web à Besançon" title="Agence ikigai, agence web à Besançon" width={300} height={96} />
                </Link>
            </Div>
            <Div id={styles.buttoncontainer} className={styles.headersidecontainer}>
                <LinkButton target="_blank" href="mailto:contact@ikigaifreelance.com?subject=Demande de devis" title='Demande de devis gratuit' className="button whitebutton">Devis gratuit</LinkButton>
                <input type="checkbox" id={styles.menucheckbox}/>
                <label htmlFor={styles.menucheckbox} id={styles.checkbox} ref={menubutton}>
                </label>
                <Div id={styles.mainmenu}>
                    <Div id={styles.menu}>
                        <nav>
                            <List>
                                <ListLinkElementMenu href='/developpeur-web-freelance' className={styles.listelement} title='Développeur web freelance à Besançon' onClick={removeCheck}>Création de site internet</ListLinkElementMenu>
                                <ListLinkElementMenu href='/agence-seo' className={styles.listelement} title='Agence SEO à Besançon' onClick={removeCheck}>Référencement naturel</ListLinkElementMenu>
                                <ListLinkElementMenu href='/formation-wordpress-elementor' className={styles.listelement} title='Formation WordPress Elementor' onClick={removeCheck}>Formation au digital</ListLinkElementMenu>
                                <ListLinkElementMenu href='mailto:contact@ikigaifreelance.com?subject=Demande de devis' className={styles.listelement} title='Demande de devis gratuit'>Demande de devis</ListLinkElementMenu>
                            </List>
                        </nav>
                    </Div>
                    <Div id={styles.menudescription}>
                        <Link href="/" title="Agence ikigai, agence web à Besançon" onClick={removeCheck}>
                            <Image src='/logo-ikigai-blanc.svg' alt="Agence ikigai, agence web à Besançon" title="Agence ikigai, agence web à Besançon" width={300} height={96} />
                        </Link>
                    </Div>
                </Div>
            </Div>
        </header>
    )
}