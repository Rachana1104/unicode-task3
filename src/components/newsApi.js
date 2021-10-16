import React, {useState, useEffect} from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import {Link} from 'react-router-dom'
import Pagination from '@mui/material/Pagination';
import { Button, CardActionArea, CardActions } from '@mui/material';


const NewsApi = () => {
const[page, setPage]= useState(1);
const [newsData, setNewsData] = useState([]);


console.log(newsData);

    useEffect(() => {
      // var list=[]
    (async () => {
      let userData;
      try {
        const response = await fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json");
        userData = (await response.json());
        // list=response.data.articles;
        console.log(userData)
        

      } catch (error) {
        console.log(error);
        userData = [];
      }
      setNewsData(userData.articles);
      
    })();
  }, []);

  function handleChange (event,value) {
    console.log(value);
    setPage(value);
  }

return (
      
<div><h1>Top News for the Day</h1>
        
<div className="cards-container">
<Pagination className="pagination" count={20} color="secondary" page={page} onChange={handleChange} />
<Box sx={{ flexGrow: 5}} className="box">

<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
{newsData.slice((page-1) * 3,page * 3).map((user, index) => {
  return (
    
      <Grid item xs={2} sm={4} md={4} key={index}>

      {/* return ( */}
  
      <>
    
          <Card sx={{ maxWidth: 345 }} className="card" >
              <CardActionArea>
                  <CardMedia
                      component="img"
                      height="140"
                      
                      image={user.urlToImage}
                      alt="this is an image"
        />

                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {user.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {user.author}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {user.publishedAt}
                        </Typography>

                        </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" href={user.url}>
                  
                    LEARN MORE
                  
                  </Button>
                </CardActions>
            </Card>
    
    </>
  {/* ); */}
  
            
        
          </Grid>
    
    
    
    
)
})}
</Grid>
    </Box>  
</div>


    </div> 
    
    )
}


export default NewsApi

