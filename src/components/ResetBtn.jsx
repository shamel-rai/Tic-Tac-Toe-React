import styles from './resetBtn.module.css';
export default function ResetBtn({ setData, setLock, titleRef, boxes }) {
    function reset() {
        setLock(false)
        setData = [
            "", "", "", "", "", "", "", "", "",
        ]
        titleRef.current.innerHTML = "Tic-Tac-Toe In <span> React</span>"
        boxes.map((e) => {
            e.current.innerHTML = "";
        })
    }
    return (
        <div className={styles.btnContainer}>
            <button className={styles.resetBtn} onClick={() => { reset() }}>
                Reset
            </button>
        </div>
    )
}