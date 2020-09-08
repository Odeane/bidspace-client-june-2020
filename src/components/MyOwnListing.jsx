import React, {useEffect, useState} from 'react'
import axios from 'axios'

const MyOwnListing = () => {
  const [mySingleListing, setMySingleListing] = useState({})

  useEffect(() => {
    getMySingleListing()
  }, [])

const getMySingleListing = async () =>{
  let response = await axios.get(`account/listings/${id}`)
  setMySingleListing(response.data.listing)
}


  return (
    <div>
      
    </div>
  )
}

export default MyOwnListing
