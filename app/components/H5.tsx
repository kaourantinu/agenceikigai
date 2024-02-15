interface H5Props{
    id?: string;
    className?: string;
    children: React.ReactNode;
}

export default function H5(props: H5Props){

    return (
        <h5 id={props.id} className={props.className}>
            {props.children}
        </h5>
    )
}