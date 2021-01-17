import React from 'react'
import { Typography, Grid, Button, } from '@material-ui/core';
import { motion } from 'framer-motion'
import { homeAnimation } from './animation'
import useStyles from './styles';

export default function WelcomePage({ history }) {
    const classes = useStyles();
    return (
        <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={homeAnimation}
        >
            <Grid container spacing={2} alignItems="center" justify="center" style={{ height: '100vh'}}>
                <Grid item xs={0} lg={6} />

                <Grid item xs={10} lg={3} className={classes.hero}>
                    <Typography variant="h6"  align="left">
                        Modern Expense Tracker,
                                 <br />
                        Record Your Daily Transactions
                        <br />
                         Using Voice Recognition!
                       
                      </Typography>
                        <Button variant="contained" color="secondary" onClick={() => history.push("dashboard")}
                        >Get Started
                         </Button>
                </Grid>
            </Grid>
        </motion.div>
    )
}
