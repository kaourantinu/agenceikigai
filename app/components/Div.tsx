import { MutableRefObject } from "react";

interface DivProps{
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    ref?: MutableRefObject<null>;
}

export default function Div(props: DivProps){

    return (
        <div id={props.id} className={props.className} style={props.style} ref={props.ref}>
            {props.children}
        </div>
    )
}