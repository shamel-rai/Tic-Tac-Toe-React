import styles from './board.module.css';
import circle from '../assets/circle.png';
import cross from '../assets/cross.png';


export default function Board({ lock, setCount, count, setLock, titleRef, data, setData, boxes }) {
    const toggle = (e, num) => {
        if (lock || data[num]) {
            return 0;
        }

        const newData = [...data];
        if (count % 2 === 0) {
            e.target.innerHTML = `<img src='${cross}' alt='cross' />`;
            newData[num] = "x";
        } else {
            e.target.innerHTML = `<img src='${circle}' alt='circle' />`;
            newData[num] = "o";
        }
        setData(newData);
        setCount(count + 1);
        checkFunction(newData);
    };

    const checkFunction = (newData) => {
        if (newData[0] === newData[1] && newData[1] === newData[2] && newData[2] !== "") {
            won(newData[2]);
        } else if (newData[3] === newData[4] && newData[4] === newData[5] && newData[5] !== "") {
            won(newData[5]);
        } else if (newData[6] === newData[7] && newData[7] === newData[8] && newData[8] !== "") {
            won(newData[8]);
        } else if (newData[0] === newData[3] && newData[3] === newData[6] && newData[6] !== "") {
            won(newData[6]);
        } else if (newData[1] === newData[4] && newData[4] === newData[7] && newData[7] !== "") {
            won(newData[7]);
        } else if (newData[2] === newData[5] && newData[5] === newData[8] && newData[8] !== "") {
            won(newData[8]);
        } else if (newData[0] === newData[4] && newData[4] === newData[8] && newData[8] !== "") {
            won(newData[8]);
        } else if (newData[2] === newData[4] && newData[4] === newData[6] && newData[6] !== "") {
            won(newData[6]);
        }
    };

    const won = (winner) => {
        setLock(true);
        if (winner === "x") {
            titleRef.current.innerHTML = `Congratulations, <img src='${cross}' alt='cross' /> Wins`;
        } else {
            titleRef.current.innerHTML = `Congratulations, <img src='${circle}' alt='circle' /> Wins`;
        }
    };

    return (
        <div className={styles.boardContainer}>
            <div className={styles.board}>
                <div className={styles.row1}>
                    <div className={styles.boxes} ref={boxes[0]} onClick={(e) => toggle(e, 0)}></div>
                    <div className={styles.boxes} ref={boxes[1]} onClick={(e) => toggle(e, 1)}></div>
                    <div className={styles.boxes} ref={boxes[2]} onClick={(e) => toggle(e, 2)}></div>
                </div>
                <div className={styles.row2}>
                    <div className={styles.boxes} ref={boxes[3]} onClick={(e) => toggle(e, 3)}></div>
                    <div className={styles.boxes} ref={boxes[4]} onClick={(e) => toggle(e, 4)}></div>
                    <div className={styles.boxes} ref={boxes[5]} onClick={(e) => toggle(e, 5)}></div>
                </div>
                <div className={styles.row3}>
                    <div className={styles.boxes} ref={boxes[6]} onClick={(e) => toggle(e, 6)}></div>
                    <div className={styles.boxes} ref={boxes[7]} onClick={(e) => toggle(e, 7)}></div>
                    <div className={styles.boxes} ref={boxes[8]} onClick={(e) => toggle(e, 8)}></div>
                </div>
            </div>
        </div>
    );
}
