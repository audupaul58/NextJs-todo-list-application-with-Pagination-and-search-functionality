import React from 'react'
import Section1 from './section1/section1';
import LatestPost from './Latest_Post/latestPost';
import PopularPost from './popular_post/popularPost';
import Cathegories from './cathegories/cathegories'; 

const main = () => {
  return (
    <main>
        <Section1/>
        <LatestPost/>
        <PopularPost/>
        <Cathegories/>
    </main>
  )
}

export default main