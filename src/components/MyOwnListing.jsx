import React, { useEffect, useState } from "react";
import axios from "axios";
import { Item, Label, Button, Card } from "semantic-ui-react";

const MyOwnListing = (props) => {
  const listingId = props.match.params.id;
  let id = listingId;
  const [mySingleListing, setMySingleListing] = useState({});
  const [images, setImages] = useState([]);
  const [biddings, setBiddings] = useState([]);

  useEffect(() => {
    getMySingleListing();
  }, []);

  const getMySingleListing = async () => {
    const headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"));
    let response = await axios.get(`account/listings/${id}`, {
      headers: headers,
    });
    setMySingleListing(response.data.listing);
    setImages(response.data.listing.images);
    setBiddings(response.data.listing.biddings);
  };

  const acceptBidding = async (event) => {
    id = event.target.dataset.cy
    let response = await axios.put(`biddings/${id}`);
  };

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
              {biddings.map((bid) => (
                <Card.Group>
                  <Card>
                    <div data-cy={`bid-${bid.id}`}>
                      <h3>{bid.bid}</h3>
                    </div>
                    <Card.Content extra>
                      <div className="ui two buttons">
                        <Button
                          onClick={acceptBidding}
                          data-cy={bid.id}
                          basic
                          color="green"
                        >
                          Approve
                        </Button>
                        <Button data-cy="decline" basic color="red">
                          Decline
                        </Button>
                      </div>
                    </Card.Content>
                  </Card>
                </Card.Group>
              ))}
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
  );
};

export default MyOwnListing;
