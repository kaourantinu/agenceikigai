interface H4Props{
    id?: string;
    className?: string;
    children: React.ReactNode;
}

export default function H4(props: H4Props){

    return (
        <h4 id={props.id} className={props.className}>
            {props.children}
        </h4>
    )
}