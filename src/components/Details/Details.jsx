import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

import useStyles from './styles';


const DetailsCard = ({ title, subheader }) => {
  const classes = useStyles();

  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title={title} subheader={subheader} />
      <CardContent>
        <Typography variant="h5">Total 100</Typography>
        {/* <Doughnut /> */}
      </CardContent>
    </Card>
  );
};

export default DetailsCard;
