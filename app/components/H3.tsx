interface H3Props{
    id?: string;
    className?: string;
    children: React.ReactNode;
}

export default function H3(props: H3Props){

    return (
        <h3 id={props.id} className={props.className}>
            {props.children}
        </h3>
    )
}