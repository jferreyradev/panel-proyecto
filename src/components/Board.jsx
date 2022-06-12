import { useEffect, useState } from "react";
import Lane from "./Lane"
import styles from "./Board.module.css"

const lanes = [
    { id: 1, title: "Pendiente" },
    { id: 2, title: "En progreso" },
    { id: 3, title: "Para revisión" },
    { id: 4, title: "Hecho" }
]

const Board = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        const getInitData = async () => {
            const ts = await fetch('./assets/data.json')
            const ticketsJSON = await ts.json()
            setData(ticketsJSON)
        }
        getInitData()
    }, [])

    return (
        <div className={styles.BoardWrapper}>
            {lanes.map(lane =>
                <Lane
                    key={lane.id}
                    title={lane.title}
                    tickets={data.filter(ticket => ticket.lane ===
                        lane.id)}
                />)
            }
        </div>
    )
}

export default Board