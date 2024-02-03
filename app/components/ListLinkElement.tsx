import Link from "next/link";

interface ListLinkElementProps{
    id?: string;
    className?: string;
    children: React.ReactNode;
    href: string;
    title: string;
}

export default function ListLinkElement(props: ListLinkElementProps){

    return (
        <li id={props.id} className={props.className}><Link href={`${props.href}`} title={props.title}>{props.children}</Link></li>
    )
}