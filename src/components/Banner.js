import React, { useState } from 'react'
import '../style/Banner.css'
import { Button } from '@material-ui/core'
import Search from '../components/Search'
import {useNavigate} from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate();
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className='banner'>
            <div className="banner_search">
                {showSearch && <Search/>}
                <Button className='banner_search_btn'
                variant='outlined'
                onClick={()=> setShowSearch(!showSearch)} >
                    {showSearch ? "Hide Search" : "Search Dates"}
                </Button>
            </div>
            
            <div className="banner_info">
                <h1>Get out and stretch your imagination</h1>

                <h5>Plan a differnet kind of getway
                    to uncover the hidden gems near you
                </h5>

                <Button onClick={()=> navigate('/search')} variant='outlined'>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
