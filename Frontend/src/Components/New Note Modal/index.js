import React, { useState } from 'react'
import {
    FormControlLabel,
    Switch,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    CircularProgress,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        fullWidth: true,
    },
    formControl: {
        width: 450,
        margin: 'auto',
    },
    formButton: {
        maxWidth: 450,
        marginTop: 8,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
        fullWidth: true,
    },
}))

export default function AddCourseModal(props) {
    const [isPrivate, setIsPrivate] = useState(false)

    const togglePriv = () => {
        setIsPrivate(!isPrivate)
    }
    const [isLoading, setIsLoading] = useState(false)
    const [titleValue, settitleValue] = useState('')
    const [detailsValue, setDetailsValue] = useState('')
    const classes = useStyles()
    // const handleAddNote = () =>
    //     createNote(userId, titleValue, detailsValue, setIsLoading, isPrivate).then(
    //         (response) => {
    //             props.onAdd()
    //             props.onClose()
    //         }
    //     )

    return (
        <Dialog open={props.open} onClose={props.onClose}>
            <DialogTitle>Add Note</DialogTitle>
            <FormControlLabel
                control={
                    <Switch
                        checked={isPrivate}
                        onChange={togglePriv}
                        name="isPrivateate"
                        color="primary"
                    />
                }
                label="Private"
                style={{
                    top: 14,
                    right: 0,
                    position: 'absolute',
                }}
            />
            <DialogContent>
                <div className={classes.formControl}>
                    <TextField
                        id="name"
                        InputProps={{
                            classes: {
                                underline: classes.textFieldUnderline,
                                input: classes.textField,
                            },
                        }}
                        value={titleValue}
                        onChange={(e) => settitleValue(e.target.value)}
                        margin="normal"
                        label="Title"
                        type="text"
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        id="details"
                        InputProps={{
                            classes: {
                                underline: classes.textFieldUnderline,
                                input: classes.textField,
                            },
                        }}
                        value={detailsValue}
                        onChange={(e) => setDetailsValue(e.target.value)}
                        margin="normal"
                        label="Details"
                        type="text"
                        variant="outlined"
                        fullWidth
                    />
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose} color="primary">
                    Cancel
                </Button>
                {isLoading ? (
                    <CircularProgress size={24} />
                ) : (
                    // onClick={handleAddNote} ?? this should be added in the bellow button
                    <Button color="primary" autoFocus>
                        Add
                    </Button>
                )}
            </DialogActions>
        </Dialog>
    )
}
