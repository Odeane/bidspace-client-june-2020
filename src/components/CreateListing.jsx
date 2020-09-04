import React, { useState } from "react";
import axios from "axios";
import {
  Icon,
  Form,
  TextArea,
  Input,
  Label,
  Container,
  Button,
} from "semantic-ui-react";

const CreateListing = () => {
  const [message, setMessage] = useState("");
  const [renderListingForm, setRenderListingForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedScene, setSelectedScene] = useState("");

  const categoryOption = [{ key: "p", text: "Parking", value: "parking" }];

  const sceneOptions = [
    { key: "i", text: "Indoors", value: "indoor" },
    { key: "o", text: "Outdoors", value: "outdoor" },
  ];

  const submitListing = async (event) => {
    event.preventDefault();
    let responseMessage, listingParams, response;
    let { category, scene, lead, description, address, price } = event.target;
    const headers = JSON.parse(localStorage.getItem("J-tockAuth-storage"));

    try {
      listingParams = {
        category: category.value,
        scene: scene.value,
        lead: lead.value,
        description: description.value,
        address: address.value,
        price: price.value,
      };
      response = await axios.post(
        "http://localhost:3000/api/v1/listings",
        { listing: listingParams },
        { headers: headers }
      );

      responseMessage = response.data.message;
    } catch (error) {
      responseMessage = response.data.error;
    } finally {
      setMessage(responseMessage);
    }
  };
  const handleCategoryClick = (value) => {
    setSelectedCategory(value);
  };

  const handleSceneChange = (value) => {
    setSelectedScene(value);
  };

  return (
    <>
      <Container id="listing">
        <Form onSubmit={submitListing}>
          <Form.Group data-cy="listing-form">
            <h2>Rent my space</h2>
            <Form.Select
              onChange={(event, data) => {
                handleCategoryClick(data.value);
              }}
              options={categoryOption}
              placeholder="Parking"
              id="parking"
              name="parking"
              label="Category"
            />

            <Form.Select
              onChange={(event, data) => {
                handleSceneChange(data.value);
              }}
              options={sceneOptions}
              placeholder="Indoors or Outdoors"
              id="scene"
              name="scene"
              label="Scene"
            />

            <Form.Field
              control={TextArea}
              data-cy="lead"
              placeholder="Lead"
              id="lead"
              name="lead"
              label="Lead"
            />

            <Form.Field
              control={TextArea}
              data-cy="description"
              placeholder="Description"
              name="description"
              label="Description"
              id="description"
            />

            <Form.Field
              control={TextArea}
              data-cy="address"
              placeholder="Address"
              name="address"
              label="Address"
            />
         
          <Input
            data-cy="price"
            size="mini"
            labelPosition="right"
            type="text"
            placeholder="Minium desired price"
          >
            <Label basic>SEK</Label>
            <input />
            <Label>.00</Label>
          </Input>{" "}
          <br /> <br />
          
          <Form.Group>
            <Input id="image-upload" name="image" type="file" />
          </Form.Group>
          <Button data-cy="button" type="submit">
            Submit Listing
          </Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};
export default CreateListing;
