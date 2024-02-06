interface StrongProps{
    id?: string;
    className?: string;
    children: React.ReactNode;
}

export default function Strong(props: StrongProps){

    return (
        <strong id={props.id} className={props.className}>
            {props.children}
        </strong>
    )
}