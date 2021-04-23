import React, { useEffect, useState } from 'react'
import './notes.css'
import Viewable from '../Cards/Viewable'
import { getNotes } from '../../utils/api'
import Header from '../Header'

const Notes = () => {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes().then((response) => {
            setNotes(response.notes)
        })
    }, [])

    return (
        <div>
            <Header />
            <div className="notesCards">
                {notes &&
                    notes.map((note) => {
                        return (
                            <Viewable
                                title={note.title}
                                content={note.content}
                            ></Viewable>
                        )
                    })}
            </div>
        </div>
    )
}

export default Notes
