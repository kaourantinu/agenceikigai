interface H1Props{
    id?: string;
    className?: string;
    children: React.ReactNode;
}

export default function H1(props: H1Props){

    return (
        <h1 id={props.id} className={props.className}>
            {props.children}
        </h1>
    )
}