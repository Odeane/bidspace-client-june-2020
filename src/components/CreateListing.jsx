import React from "react";
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
  return (
    <>
        <Container id="listing">
          <Form>
            <Form.Group data-cy="listing-form">
              <div id="icons">
              <h2>Rent my space</h2>
              <Form.Field>
                <button>
                  {" "}
                  <Icon id="car" size="huge" name="car"></Icon>
                </button>
              </Form.Field>

              <Form.Field>
                <div>
                  <button>
                    <Icon
                      id="indoors"
                      size="huge"
                      name="warehouse"
                      value="indoors"
                    ></Icon>{" "}
                  </button>
                  <br />
                  indoors
                </div>
              </Form.Field>

              <Form.Field>
                <div>
                  <button>
                    {" "}
                    <Icon
                      id="outdoors"
                      size="huge"
                      name="tree"
                      value="outdoors"
                    ></Icon>{" "}
                  </button>
                  <br />
                  outdoors
                </div>
              </Form.Field>
            </div>

            <Form.Field
              control={TextArea}
              data-cy="lead"
              placeholder="Lead"
              id="lead"
              name="lead"
              label="Lead"
            />
          </Form.Group>
          <Form.Field
            control={TextArea}
            data-cy="description"
            placeholder="Description"
            name="description"
            label="Description"
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

          <Button data-cy="button" type="submit">Submit Listing</Button>
        </Form>
      </Container>
    </>
  );
};
export default CreateListing;