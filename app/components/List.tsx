interface ListProps{
    id?: string;
    className?: string;
    children: React.ReactNode;
}

export default function List(props: ListProps){

    return (
        <ul id={props.id} className={props.className}>
            {props.children}
        </ul>
    )
}