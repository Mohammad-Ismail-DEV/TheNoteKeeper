import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import './header.css'
import { Link } from 'react-router-dom'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { makeStyles } from '@material-ui/core/styles'
import NewNoteModal from '../New Note Modal'
import { signOut } from '../../utils/api'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
    addButton: {
        position: 'absolute',
        right: '372px',
        height: '2.5em',
        width: '2.5em',
    },
    logoutButton: {
        top: '10px',
        right: '0px',
        height: '2.5em',
        width: '2.5em',
    },
})

const Header = () => {
    const classes = useStyles()
    const history = useHistory()

    const [isOpenNewNoteModal, setIsOpenNewNoteModal] = useState(false)

    const handleLogout = () => {
        signOut(history)
    }
    const openNewNoteModal = () => {
        setIsOpenNewNoteModal(true)
    }
    const closeNewNoteModal = () => {
        setIsOpenNewNoteModal(false)
    }
    return (
        <>
            <div className="main-body">
                <div className="text">
                    <h1>THE NOTE KEEPER</h1>
                </div>
                <div className="buttons">
                    <div>
                        <AddCircleIcon
                            className={classes.addButton}
                            onClick={openNewNoteModal}
                        />
                    </div>
                    <div>
                        <Link to="/notes" className="links">
                            <Button
                                style={{ fontSize: 32, fontWeight: 'bold' }}
                                color="black"
                            >
                                Notes
                            </Button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/profile" className="links">
                            <Button
                                style={{ fontSize: 32, fontWeight: 'bold' }}
                                color="black"
                            >
                                Profile
                            </Button>
                        </Link>
                    </div>
                    <ExitToAppIcon
                        onClick={handleLogout}
                        className={classes.logoutButton}
                    />
                </div>
            </div>
            <NewNoteModal
                open={isOpenNewNoteModal}
                onClose={closeNewNoteModal}
                // onAdd={refreshNotes}
            />
        </>
    )
}

export default Header
