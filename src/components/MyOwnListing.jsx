import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Item, Label } from "semantic-ui-react";

const MyOwnListing = (props) => {
  const listingId = props.match.params.id;
  let id = listingId;
  const [mySingleListing, setMySingleListing] = useState({})
  const [images, setImages] = useState([]);

  useEffect(() => {
    getMySingleListing()
  }, [])

  const getMySingleListing = async () => {
  let response = await axios.get(`account/listings/${id}`)
    setMySingleListing(response.data.listing)
    setImages(response.data.listing.images);
}

  let myListingContent = (
    <>
      <Item.Group divided>
        <Item
          data-cy={`listing-${mySingleListing.id}`}
          data-id={mySingleListing.id}
        >
          {images.map((url) => (
            <Item.Image data-cy="image" src={url.url} alt="listing image" />
          ))}
          <Item.Content>
            <Item.Header data-cy="lead">{mySingleListing.lead}</Item.Header>
            <Item.Meta data-cy="address">{mySingleListing.address}</Item.Meta>
            <Item.Description data-cy="description">
              {mySingleListing.description}
            </Item.Description>
            <Item.Extra>
              <Label data-cy="scene">{mySingleListing.scene}</Label>
              <Label data-cy="category">{mySingleListing.category}</Label>
              <Label data-cy="price">{mySingleListing.price}</Label>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </>
  );

  return (
    <div>
      <h1>{myListingContent}</h1>
    </div>
  )
}

export default MyOwnListing
