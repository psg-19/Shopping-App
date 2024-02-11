import React, { useEffect, useState } from 'react'
import { Spinner } from '../components/Spinner';
import {Product} from  "../components/Product";


export const Home = () => {

  const API_URL = "https://fakestoreapi.com/products";
 
  const[loading ,setLoading]=useState(true);

  const [posts,setPosts]=useState([])

  async function fetchProductData(){
    setLoading(true)
    
    try {
      let res = await fetch(API_URL);

      const data=await res.json();

      setPosts(data)
      
    } catch (error) {
      console.log('errorrrrrrrrrrrrr')
      setPosts([])
    }
// console.log(posts)
    setLoading(false)

  }

  useEffect(()=> {
    fetchProductData()
    
  
  },[])

  return (
    <div>
      
   
      {
        loading ==true ? <Spinner/>:

        (posts.length > 0 ? 
          <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 
          mx-auto space-y-10 space-x-5 min-h-[80vh]'>
           { 
           posts.map((post) => {
             return <Product post={post} key={post.id}/>
            })
            }
          </div>
          :<div className='flex justify-center items-center'>No Data Found</div>)
      }

    </div>
  )
}
