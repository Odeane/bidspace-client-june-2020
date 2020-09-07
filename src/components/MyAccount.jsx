import React, {useEffect, useState} from 'react'
import axios from 'axios'

const MyAccount = () => {
  const [myListing, setMyListing] = useState([]);

  useEffect(() => {
    getListing()
  }, [])

  const getListing = async () => {
    let response = await axios.get('/account')
    setMyListing(response.data.listings)
  }


  return (
    <div>
      <h1>My  Account</h1>
    </div>
  )
}

export default MyAccount
