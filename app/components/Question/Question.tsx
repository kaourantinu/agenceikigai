import styles from './question.module.css'
import H3 from "../H3";
import P from "../P";

interface QuestionProps{
    id?: string;
    className?: string;
    question?: string;
    answer?: string;
    questionNumber: string;
}

export default function Question(props: QuestionProps){

    return (
    <div className={styles.question}>
        <input type="checkbox" id={`accordion${props.questionNumber}`}/>
        <label htmlFor={`accordion${props.questionNumber}`} id={styles.questionlabel}>
            <H3>{props.question}</H3>
            <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z"/></svg>
        </label>
        <P className={styles.answer}>{props.answer}</P>
    </div>
    )
}