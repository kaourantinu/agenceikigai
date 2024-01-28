interface DecorativeRoundProps{
    id: string;
}

export default function DecorativeRound(props: DecorativeRoundProps){

    return (
        <svg id={props.id} width="642" height="642" viewBox="0 0 642 642" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="321" cy="321" r="321" fill="url(#paint0_linear_426_18)"/>
            <circle cx="321" cy="321" r="320.5" stroke="white" strokeOpacity="0.05"/>
            <defs>
            <linearGradient id="paint0_linear_426_18" x1="538" y1="83" x2="118" y2="567" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FC6A3B"/>
            <stop offset="0.325" stopColor="#111111" stopOpacity="0"/>
            <stop offset="0.465" stopColor="#111111" stopOpacity="0"/>
            <stop offset="0.8" stopColor="#111111" stopOpacity="0"/>
            <stop offset="1" stopColor="#FC6A3B" stopOpacity="0.98"/>
            </linearGradient>
            </defs>
        </svg>
    )
}