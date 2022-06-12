import styles from "./Lane.module.css"

const Lane = ({ id, title, tickets }) => {

    return (
        <div className={styles.LaneWrapper}>
            <h3 className={styles.Title}>{title}</h3>
            {tickets ? tickets.map((el, i) =>
                <div className={styles.TicketWrapper} key={i}>
                    <h4>{el.title}</h4>
                    <p >{el.body}</p>
                </div>) : 'None'}
        </div>
    )
}

export default Lane;