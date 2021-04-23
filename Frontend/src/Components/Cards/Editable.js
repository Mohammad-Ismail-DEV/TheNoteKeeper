import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import DeleteIcon from '@material-ui/icons/Delete'
import { Button } from '@material-ui/core'
import classNames from 'class-names'
import './style.css'

const useStyles = makeStyles({
    root: {
        position: 'relative',
        marginTop: '15px',
        marginBottom: '0px',
    },
    title: {
        fontSize: 14,
    },
    buttons: {
        position: 'absolute',
        right: '0px',
        top: '0px',
        display: 'flex',
        marginTop: '4px',
        alignSelf: 'center',
        padding: '10px',
        gap: '5px',
    },
})

export default function Editable(props) {
    const classes = useStyles()
    const [showComments, setShowComments] = useState(false)
    const toggleComments = () => setShowComments(!showComments)

    // const handleDeleteComment = () => {
    //     deleteComment(id)
    //     refreshComments()
    // }
    // const handleDeleteNote = () => {
    //     deleteNote(id)
    //     refreshNotes()
    // }

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography
                    className={classes.title}
                    color="textPrimary"
                    gutterBottom
                >
                    {props.title}
                </Typography>
                <Typography variant="body2" component="p" color="textSecondary">
                    {props.content}
                </Typography>
                <Button size="small" onClick={toggleComments}>
                    View Comments
                </Button>
                <div
                    className={classNames({
                        comments: true,
                        visible: showComments,
                    })}
                >
                    <div
                        className={classNames({
                            comment: true,
                            hidden: !showComments,
                        })}
                    >
                        <div>comment1</div>
                        <DeleteIcon
                            // onClick={handleDeleteNote}
                            size="small"
                        ></DeleteIcon>
                    </div>
                    <div
                        className={classNames({
                            comment: true,
                            hidden: !showComments,
                        })}
                    >
                        <div>comment1</div>
                        <DeleteIcon
                            // onClick={handleDeleteNote}
                            size="small"
                        ></DeleteIcon>
                    </div>
                    <div
                        className={classNames({
                            comment: true,
                            hidden: !showComments,
                        })}
                    >
                        <div>comment1</div>
                        <DeleteIcon
                            // onClick={handleDeleteNote}
                            size="small"
                        ></DeleteIcon>
                    </div>
                </div>
            </CardContent>
            <CardActions className={classes.buttons}>
                <DeleteIcon
                    // onClick={handleDeleteComment}
                    size="small"
                ></DeleteIcon>
            </CardActions>
        </Card>
    )
}
