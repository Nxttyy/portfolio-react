
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Ultra, Inter, Jersey_10 } from "next/font/google";


const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 445 }} className='m-5 bg-gray-950' >
      <CardMedia
        sx={{ height: 140 }}
        image="/banana.jpeg"
        title="green iguana"
      />
      <CardContent className='text-start'>
        <Typography gutterBottom  component="div">
          <p className={`${inter.className} text-3xl font-extrabold `} style={{'color':"#E84023"}}>Lizard</p>
        </Typography>
        <Typography variant="body2" className='text-gray-400'>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}