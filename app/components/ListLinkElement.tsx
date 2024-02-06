import Link from "next/link";

interface ListLinkElementProps{
    id?: string;
    className?: string;
    children: React.ReactNode;
    href: string;
    title: string;
    rel?: string;
}

export default function ListLinkElement(props: ListLinkElementProps){

    return (
        <li id={props.id} className={props.className}><Link href={`${props.href}`} title={props.title} rel={props.rel}>{props.children}</Link></li>
    )
}