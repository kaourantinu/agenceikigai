import Link from "next/link";
import { MouseEventHandler } from "react";

interface ListLinkElementProps{
    id?: string;
    className?: string;
    children: React.ReactNode;
    href: string;
    title: string;
    rel?: string;
    target?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export default function ListLinkElement(props: ListLinkElementProps){

    return (
        <li id={props.id} className={props.className}><Link href={`${props.href}`} title={props.title} rel={props.rel} target={props.target} onClick={props.onClick}>{props.children}</Link></li>
    )
}