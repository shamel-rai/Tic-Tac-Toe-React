import styles from './ticTacToe.module.css';
export default function TicTacToe({ titleRef }) {

    return (
        <div className={styles.container}>
            <h1 className={styles.title} ref={titleRef}> Tic-Tac-Toe In <span> React</span></h1>

        </div>
    )
}