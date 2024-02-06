import Link from "next/link";

interface LinkButtonProps{
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    href: string;
    title: string;
    target?: string;
}

export default function LinkButton(props: LinkButtonProps){

    return (
        <Link id={props.id} className={props.className} href={`${props.href}`} title={props.title} target={`${props.target}`}>
            {props.children}
        </Link>
    )
}