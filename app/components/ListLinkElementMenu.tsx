import Link from "next/link";
import { useRouter } from 'next/router'

interface ListLinkElementMenuProps{
    id?: string;
    className?: string;
    children: React.ReactNode;
    href: string;
    title: string;
    rel?: string;
    target?: string;
}

export default function ListLinkElementMenu(props: ListLinkElementMenuProps){

    const router = useRouter()

    return (
        <li id={props.id} className={props.className}><Link href={`${props.href}`} title={props.title} rel={props.rel} target={props.target} onClick={() => router.reload()}></Link></li>
    )
}