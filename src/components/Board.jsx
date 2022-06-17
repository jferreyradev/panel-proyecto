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

    const [tickets, setTickets] = useState([])

    useEffect(() => {
        const getInitData = async () => {
            const ts = await fetch('./assets/data.json')
            const ticketsJSON = await ts.json()
            setData(ticketsJSON)
        }
        getInitData()
        //setTickets(data.filter(ticket => ticket.lane === lane.id))
    }, [])

    const onDragStart = (e, id)=>{
        e.dataTransfer.setData('id', id)
        console.log(e, id)
    }

    const onDrop = (e, laneId)=>{
        const id = e.dataTransfer.getData('id')
        console.log(laneId)
        console.log('fin')
    }

    return (
        <div className={styles.BoardWrapper}>
            {lanes.map(lane =>
                <Lane
                    key={lane.id}
                    title={lane.title}
                    dragStart={onDragStart}
                    onDrop={onDrop}
                    tickets={data.filter(ticket => ticket.lane ===
                        lane.id)}
                />)
            }
        </div>
    )
}

export default Board