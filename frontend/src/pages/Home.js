import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>
      
      <h2 className='text-2xl font-semibold py-4'>{"Summer Cool items"}</h2>
      <HorizontalCardProduct  c5={"Cargoes"}   heading={"Summer Cool Items"}/>
      <div style={{display:"flex",overflowX:"scroll" , scrollbarWidth:"0px"}}>
      <HorizontalCardProduct  c5={"Shirts"}   heading={"   "}/>
      <HorizontalCardProduct  c5={"Trousers"}   heading={""}/>
      <HorizontalCardProduct  c5={"Denim Jeans"}   heading={""}/>
      <HorizontalCardProduct  c5={"T-Shirts"}   heading={""}/>

      </div>

      
      <h2 className='text-2xl font-semibold py-4'>{"Winter Warm Wear"}</h2>
      <div style={{display:"flex",overflowX:"scroll" , scrollbarWidth:"0px"}}>
      <HorizontalCardProduct  c5={"Scarves"}   heading={"Summer Cool Items"}/>
      <HorizontalCardProduct  c5={"Blazers"}   heading={"   "}/>
      <HorizontalCardProduct  c5={"Shirts"}   heading={""}/>
      <HorizontalCardProduct  c5={"Jackets"}   heading={""}/>
      <HorizontalCardProduct  c5={"Denim Jeans"}   heading={""}/>

      </div>

      {/* <HorizontalCardProduct c1={"Blazers"} c2={"Shirt"} c3={"Denim Jeans"} c4={"Trousers"} c5={"Scarves"}   heading={"Warm winters Wear"}/>  */}

      <VerticalCardProduct category={"Shirts"} heading={"Shirts"}/>
      <VerticalCardProduct category={"T-Shirts"} heading={"T-Shirts"}/>
      <VerticalCardProduct category={"Denim Jeans"} heading={"Denim Jeans"}/>
      <VerticalCardProduct category={"Trousers"} heading={"Trousers"}/>

      <VerticalCardProduct category={"Cargoes"} heading={"Cargoes"}/>
      <VerticalCardProduct category={"Belts"} heading={"Belts"}/>
      <VerticalCardProduct category={"Ties"} heading={"Ties"}/>
      <VerticalCardProduct category={"Shorts"} heading={"Shorts"}/>
      <VerticalCardProduct category={"Blazers"} heading={"Blazers"}/>
      <VerticalCardProduct category={"Bags"} heading={"Bags"}/>
      <VerticalCardProduct category={"Scarves"} heading={"Scarves"}/>
      <VerticalCardProduct category={"Handkerchiefs"} heading={"Handkerchiefs"}/>
    </div>
  )
}

export default Home