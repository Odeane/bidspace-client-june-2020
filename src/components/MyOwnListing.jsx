import React, { useEffect, useState } from "react";
import axios from "axios";
import { Item, Label, Button, Card } from "semantic-ui-react";

const MyOwnListing = (props) => {
  const listingId = props.match.params.id;
  const [mySingleListing, setMySingleListing] = useState({});
  const [images, setImages] = useState([]);
  const [biddings, setBiddings] = useState([]);
  const [message, setMessage] = useState("");


  useEffect(() => {
    getMySingleListing();
  }, []);

  const getMySingleListing = async () => {
    const headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"));
    let response = await axios.get(`account/listings/${listingId}`, {
      headers: headers,
    });

    setMySingleListing(response.data.listing);
    setImages(response.data.listing.images);
    setBiddings(response.data.listing.biddings);
  };

  const handleBidding = async (event) => {
    let biddingParams, responseMessage, response;
    let stat = event.target.dataset.cy
    var pattern = /[a-z]/g;
    let status = stat.match(pattern).join('')

    const headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"));
    const bidId = event.target.id;

    try {
      biddingParams = {
        status: status,
      };
      let response = await axios.put(
        `biddings/${bidId}`,
        { params: biddingParams },
        { headers: headers }
      );
      getMySingleListing()
      responseMessage = response.data.message;
    } catch (error) {
      responseMessage = response.data.error;
    } finally {
      setMessage(responseMessage);
    }
  };

  let myListingContent = (
    <>
      <Item.Group divided>
        <Item
          data-cy={`listing-${mySingleListing.id}`}
          data-id={mySingleListing.id}
        >
          {images.map((url) => (
            <Item.Image data-cy="image" src={url} alt="listing image" />
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
                <>
                  <Card.Group>
                    <Card>
                      <div data-cy={`bid-${bid.id}`}>
                        <h4>Incoming offer from: <em>{bid.user.email}</em></h4>
                        <h3>Amount: {bid.bid} SEK</h3>
                      </div>
                      <Card.Content extra>
                        <div className="ui two buttons">
                          {bid.status === 'pending' ?
                            (
                              <>
                                <Button
                                  id={bid.id}
                                  onClick={handleBidding}
                                  data-cy={`accepted-${bid.id}`}
                                  basic
                                  color="green"
                                >
                                  Approve
                                </Button>
                                <Button
                                  id={bid.id}
                                  onClick={handleBidding}
                                  data-cy={`rejected-${bid.id}`}
                                  basic color="red">
                                  Decline
                                </Button>
                              </>
                            ) :
                            (
                              <h1 style={{ color: bid.status === 'accepted' ? 'green' : 'red' }}>This bid is {bid.status}</h1>
                            )
                          }
                        </div>
                      </Card.Content>
                    </Card>
                  </Card.Group>
                </>
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
      <h3 data-cy="message">{message}</h3>
    </div>
  );
};

export default MyOwnListing;
