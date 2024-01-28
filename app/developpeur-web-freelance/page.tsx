import { Metadata } from "next";
import Div from "../components/Div";
import H1 from "../components/H1";

export const metadata: Metadata = {
    title: "Corentin Tournier - Développeur web freelance à Besançon",
    description: "Développeur web freelance et spécialisé dans le référencement naturel (SEO), j'aide les entreprises et les indépendants à se rendre visible sur Internet.",
  };

export default function Page(){

    return (
        <Div>
            <H1>Développeur Web Freelance</H1>
        </Div>
    )
}