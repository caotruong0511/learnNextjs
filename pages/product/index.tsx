import { GetStaticProps } from 'next'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type productProps = {
  products:any[]
}

const Index = ({products}: productProps) => {
    // const [product,setproduct] = useState <any[]>([])
    // useEffect(()=>{
    //     fetch("http://localhost:3001/products")
    //     .then((respon)=>respon.json())
    //     .then((data)=>setproduct(data))
    // },[])

  return (
    <div>{products.map((item)=>(
       <div key={item.id}>
        <Link href={`/product/${item.id}`}>{item.name}</Link>
      </div>
    ))}</div>
  )
  }
  // <div>{products.map(item => (
  //   <div key={item.id}><Link href={`/products/${item.id}`}>{item.name}</Link></div>
  // ))}</div>
  export const getStaticProps: GetStaticProps<productProps> = async (context) => {
    console.log('getStaticProps');
    const response = await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products`);
    const data = await response.json();
  
    return {
      props: {
        products: data
      }
    }
}


export default Index