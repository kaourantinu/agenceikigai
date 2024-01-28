interface SectionProps{
    id?: string;
    className?: string;
    children: React.ReactNode;
}

export default function Section(props: SectionProps){

    return (
        <section id={props.id} className={props.className}>
            {props.children}
        </section>
    )
}