interface H2Props{
    id?: string;
    className?: string;
    children: React.ReactNode;
}

export default function H2(props: H2Props){

    return (
        <h2 id={props.id} className={props.className}>
            {props.children}
        </h2>
    )
}