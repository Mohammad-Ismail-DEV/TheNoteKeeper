import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core'
import classNames from 'class-names'
import './style.css'
const useStyles = makeStyles({
    root: {
        height: 'fit-content',
        marginTop: '15px',
        marginBottom: '15px',
    },
    title: {
        fontSize: 14,
    },
})

export default function Viewable(props) {
    const classes = useStyles()
    const [showComments, setShowComments] = useState(false)
    const toggleComments = () => setShowComments(!showComments)
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
                        comment1
                    </div>
                    <div
                        className={classNames({
                            comment: true,
                            hidden: !showComments,
                        })}
                    >
                        comment1
                    </div>
                    <div
                        className={classNames({
                            comment: true,
                            hidden: !showComments,
                        })}
                    >
                        comment1
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
