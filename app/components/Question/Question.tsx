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
        <label htmlFor={`accordion${props.questionNumber}`}>
            <span className="icon"></span><H3>{props.question}</H3>
        </label>
        <P className={styles.answer}>{props.answer}</P>
    </div>
    )
}