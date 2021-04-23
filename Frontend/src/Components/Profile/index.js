import { React, useEffect, useState } from 'react'
import './profile.css'
import ProfilePic from './Profile Pic.jpg'
import Editable from '../Cards/Editable'
import { getNotes } from '../../utils/api'
import Header from '../Header'

const Profile = () => {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes().then((response) => {
            setNotes(response.notes)
        })
    }, [])

    return (
        <div>
            <Header />
            <div className="profileBody">
                <div className="info">
                    <img src={ProfilePic} className="profilePic" />
                    <h2 className="titles">Bio:</h2>
                    <h3 className="p-text">
                        Hello my name is Mohamad and this is a test run
                    </h3>
                    <h2 className="titles">Contact Info:</h2>
                    <h3 className="p-text">
                        Email: mohamad.ismail.dev@gmail.com
                    </h3>
                    <h3 className="p-text">Mobile Number: + 961 71 338 138</h3>
                </div>
                <div className="userfeed">
                    {notes &&
                        notes.map((note) => {
                            return (
                                <Editable
                                    title={note.title}
                                    content={note.content}
                                ></Editable>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}

export default Profile
