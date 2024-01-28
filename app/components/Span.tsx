interface SpanProps{
    id?: string;
    className?: string;
    children: React.ReactNode;
    color: string;
}

export default function Span(props: SpanProps){

    return (
        <span id={props.id} className={props.className} style={{color: props.color}}>
            {props.children}
        </span>
    )
}