import Styles from './Tickets.module.css'

const Tickets = ({ tickets }) => {
    return (
        <>
            <ul>
                {tickets ? tickets.map((el, i) =>
                    <li key={i}>
                        <h4 className={Styles.Title}>{el.title}</h4>
                        <p className={Styles.Body}>{el.body}</p>
                    </li>) : 'None'}
            </ul>
        </>
    )
}

export default Tickets;