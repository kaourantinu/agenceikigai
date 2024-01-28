interface DivProps{
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

export default function Div(props: DivProps){

    return (
        <div id={props.id} className={props.className} style={props.style}>
            {props.children}
        </div>
    )
}