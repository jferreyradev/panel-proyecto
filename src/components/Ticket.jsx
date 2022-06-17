import styles from './Ticket.module.css'

const Ticket = ({ id, title, body, onDragStart, onDrop }) => {
    return (
        <div className={styles.Wrapper}
            draggable key={id}
            onDragStart={e => onDragStart(e, i)}
            onDrop={e => onDrop(e, i)} >
            <h4 className={styles.Title}>{title}</h4>
            <p className={styles.Body}>{body}</p>
        </div>
    )
}

export default Ticket;