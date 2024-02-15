import { Metadata } from "next";
import Div from "../components/Div";
import H1 from "../components/H1";
import H2 from "../components/H2";
import styles from "../mentions-legales/page.module.css"

export const metadata: Metadata = {
    title: "Politique de confidentialité d'ikigai, agence web à Besançon",
    description: "Politique de confidentialité d'ikigai, agence web à Besançon.",
    authors: [
        {name: "Corentin Tournier", url: "https://ikigaifreelance.com/developpeur-web-freelance"},
        {name: "Agence ikigai", url: "https://ikigaifreelance.com"}
    ],
    publisher: "Agence ikigai",
    alternates: { 
        canonical: "https://ikigaifreelance.com/politique-de-confidentialite" 
    },
    openGraph: {
        type: "website",
        url: "https://ikigaifreelance.com/politique-de-confidentialité",
        title: "Politique de confidentialité d'ikigai, agence web à Besançon",
        description: "Politique de confidentialité d'ikigai, agence web à Besançon.",
        siteName: "ikigai : Agence web à Besançon - Création de site internet",
    },
    robots: { index: true, follow: true }
  };

export default function Page(){

    return(
        <main id={styles.main}>
            <Div id={styles.titlediv}>
                <H1 id={styles.title}>Politique de confidentialité</H1>
            </Div>
            <Div id={styles.textarea}>
                Le site web Ikigai Freelance est détenu par Corentin Tournier, qui est un contrôleur de données de vos données personnelles.

                Nous avons adopté cette politique de confidentialité, qui détermine la manière dont nous traitons les informations collectées par Ikigai Freelance, qui fournit également les raisons pour lesquelles nous devons collecter certaines données personnelles vous concernant. Par conséquent, vous devez lire cette politique de confidentialité avant d&apos;utiliser le site web de Ikigai Freelance.

                Nous prenons soin de vos données personnelles et nous nous engageons à en garantir la confidentialité et la sécurité.
                <h2>Les informations personnelles que nous collectons :</h2>
                Lorsque vous visitez le Ikigai Freelance, nous recueillons automatiquement certaines informations sur votre appareil, notamment des informations sur votre navigateur web, votre adresse IP, votre fuseau horaire et certains des cookies installés sur votre appareil. En outre, lorsque vous naviguez sur le site, nous recueillons des informations sur les pages web ou les produits individuels que vous consultez, sur les sites web ou les termes de recherche qui vous ont renvoyé au site et sur la manière dont vous interagissez avec le site. Nous désignons ces informations collectées automatiquement par le terme &quot;informations sur les appareils&quot;. En outre, nous pourrions collecter les données personnelles que vous nous fournissez (y compris, mais sans s&apos;y limiter, le nom, le prénom, l&apos;adresse, les informations de paiement, etc.) lors de l&apos;inscription afin de pouvoir exécuter le contrat.
                <h2>Pourquoi traitons-nous vos données ?</h2>
                Notre priorité absolue est la sécurité des données des clients et, à ce titre, nous ne pouvons traiter que des données minimales sur les utilisateurs, uniquement dans la mesure où cela est absolument nécessaire pour maintenir le site web. Les informations collectées automatiquement sont utilisées uniquement pour identifier les cas potentiels d&apos;abus et établir des informations statistiques concernant l&apos;utilisation du site web. Ces informations statistiques ne sont pas autrement agrégées de manière à identifier un utilisateur particulier du système.

                Vous pouvez visiter le site web sans nous dire qui vous êtes ni révéler d&apos;informations, par lesquelles quelqu&apos;un pourrait vous identifier comme un individu spécifique et identifiable. Toutefois, si vous souhaitez utiliser certaines fonctionnalités du site web, ou si vous souhaitez recevoir notre lettre d&apos;information ou fournir d&apos;autres détails en remplissant un formulaire, vous pouvez nous fournir des données personnelles, telles que votre e-mail, votre prénom, votre nom, votre ville de résidence, votre organisation, votre numéro de téléphone. Vous pouvez choisir de ne pas nous fournir vos données personnelles, mais il se peut alors que vous ne puissiez pas profiter de certaines fonctionnalités du site web. Par exemple, vous ne pourrez pas recevoir notre bulletin d&apos;information ou nous contacter directement à partir du site web. Les utilisateurs qui ne savent pas quelles informations sont obligatoires sont invités à nous contacter via corentin.tournier@ikigaifreelance.com.
                <h2>Vos droits :</h2>
                Si vous êtes un résident européen, vous disposez des droits suivants liés à vos données personnelles :
                <ul>
                    <li>Le droit d&apos;être informé.</li>
                    <li>Le droit d&apos;accès.</li>
                    <li>Le droit de rectification.</li>
                    <li>Le droit à l&apos;effacement.</li>
                    <li>Le droit de restreindre le traitement.</li>
                    <li>Le droit à la portabilité des données.</li>
                    <li>Le droit d&apos;opposition.</li>
                    <li>Les droits relatifs à la prise de décision automatisée et au profilage.</li>
                </ul>
                Si vous souhaitez exercer ce droit, veuillez nous contacter via les coordonnées ci-dessous.

                En outre, si vous êtes un résident européen, nous notons que nous traitons vos informations afin d&apos;exécuter les contrats que nous pourrions avoir avec vous (par exemple, si vous passez une commande par le biais du site), ou autrement pour poursuivre nos intérêts commerciaux légitimes énumérés ci-dessus. En outre, veuillez noter que vos informations pourraient être transférées en dehors de l&apos;Europe, y compris au Canada et aux États-Unis.
                <h2>Liens vers d&apos;autres sites web :</h2>
                Notre site web peut contenir des liens vers d&apos;autres sites web qui ne sont pas détenus ou contrôlés par nous. Sachez que nous ne sommes pas responsables de ces autres sites web ou des pratiques de confidentialité des tiers. Nous vous encourageons à être attentif lorsque vous quittez notre site web et à lire les déclarations de confidentialité de chaque site web susceptible de collecter des informations personnelles.
                <h2>Sécurité de l&apos;information :</h2>
                Nous sécurisons les informations que vous fournissez sur des serveurs informatiques dans un environnement contrôlé et sécurisé, protégé contre tout accès, utilisation ou divulgation non autorisés. Nous conservons des garanties administratives, techniques et physiques raisonnables pour nous protéger contre tout accès, utilisation, modification et divulgation non autorisés des données personnelles sous son contrôle et sa garde. Toutefois, aucune transmission de données sur Internet ou sur un réseau sans fil ne peut être garantie.
                <h2>Divulgation légale :</h2>
                Nous divulguerons toute information que nous collectons, utilisons ou recevons si la loi l&apos;exige ou l&apos;autorise, par exemple pour nous conformer à une citation à comparaître ou à une procédure judiciaire similaire, et lorsque nous pensons de bonne foi que la divulgation est nécessaire pour protéger nos droits, votre sécurité ou celle d&apos;autrui, enquêter sur une fraude ou répondre à une demande du gouvernement.
                <h2>Informations de contact :</h2>
                Si vous souhaitez nous contacter pour comprendre davantage la présente politique ou si vous souhaitez nous contacter concernant toute question relative aux droits individuels et à vos informations personnelles, vous pouvez envoyer un courriel à corentin.tournier@ikigaifreelance.com.
            </Div>
        </main>
    )
}