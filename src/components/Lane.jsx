import styles from "./Lane.module.css"
import Ticket from "./Ticket";

const Lane = ({ id, title, tickets, dragStart, onDrop }) => {

    return (
        <div className={styles.LaneWrapper}>
            <h3 className={styles.Title}>{title}</h3>
            {
                tickets ? tickets.map((el, i) =>
                    <Ticket id={i} title={el.title} body={el.body}
                    onDragStart={dragStart} onDrop={onDrop}  />)
                    : 'None'
            }
        </div>
    )
}

export default Lane;