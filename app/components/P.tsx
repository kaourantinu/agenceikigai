interface PProps{
    id?: string;
    className?: string;
    children: React.ReactNode;
}

export default function P(props: PProps){

    return (
        <p id={props.id} className={props.className}>
            {props.children}
        </p>
    )
}