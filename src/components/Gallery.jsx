import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import {des1, des2, des3, des4, des5} from '../assets';


function srcset(image, size, rows = 1, cols = 1) {
  return {

    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const itemData = [
  {
    img: des2,
    title: 'design1',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    rows: 2,
    cols: 2,
  
  },
  {
    img: des1,
    title: 'design2',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    img: des3,
    title: 'design3',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    img: des5,
    title: 'design4',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    cols: 2,
  },
];

export default function Gallery() {
  return (
    
    <ImageList
      sx={{ width: "100%", height: "100%" }}
      variant="quilted"
      cols={4}
      rowHeight={320}
      
    >
      {itemData.map((item) => (
        // <div className="container">
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          
          <img
            {...srcset(item.img, 320, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
          
          <ImageListItemBar
              title={item.title}
              subtitle={<span>{item.text}</span>}
            />
            <div class="overlay">
          
            </div>
            <div class="overlay1">
          
            </div>
            <div class="overlay2">
          
            </div>
            <div class="overlay3">
          
            </div>

         
        </ImageListItem>
        // </div>
       
      ))}
    </ImageList>
    
     
  );
}


