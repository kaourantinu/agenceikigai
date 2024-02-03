interface ListElementProps{
    id?: string;
    className?: string;
    children: React.ReactNode;
}

export default function ListElement(props: ListElementProps){

    return (
        <li id={props.id} className={props.className}>{props.children}</li>
    )
}