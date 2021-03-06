import React, { useState } from 'react'
import './Banner.css'
import {Button} from '@material-ui/core';
import Search from './Search';
function Banner() {
    const[showSearch, setShowSearch] = useState(false);

  return (
    <div className = 'banner'>
        <div className= 'banner__search'>
            {showSearch && <Search/>}

            <Button onClick = {()=> setShowSearch(!showSearch)}
            className = 'banner__searchButton'
            variant='outlined' >
                 {showSearch ? 'Hide' : 'Search Dates'}
                 </Button>
        </div>
        <div className= 'banner__info'>
            <h1> Let your curiosity do the booking </h1>
            <h5> </h5>
            <Button variant = 'outlined'> Explore Nearby </Button>
        </div>
    </div>
  )
}

export default Banner