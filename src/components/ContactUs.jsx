import React from "react";
import { Container, Header, Icon, List, Image } from "semantic-ui-react";

const ContactUs = () => {
  return (
    <>
      <Header as="h1" textAlign="center" icon>
        <Icon name="mail" />
        Contact Us
      </Header>{" "}
      <br />
      <Container Align="center">
        <List>
          <List.Item>
            <List.Content>
              <Icon id="contact" name="users" />
              BidSpace AB
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Icon name="marker" />
              Stockholm, Sweden
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Icon name="mail" />
              mail@bidspace.com
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Icon name="linkify" />
              bidspace.com
            </List.Content>
          </List.Item>
        </List>{" "}
        <br /> <br />
        <List horizontal>
          <List.Item>
            <Image
              avatar
              src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
            />
            <List.Content>
              <List.Header>Alex</List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <Image
              avatar
              src="https://react.semantic-ui.com/images/avatar/small/christian.jpg"
            />
            <List.Content>
              <List.Header>Viktor</List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <Image
              avatar
              src="https://react.semantic-ui.com/images/avatar/large/chris.jpg"
            />
            <List.Content>
              <List.Header>Odeane</List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <Image
              avatar
              src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
            />
            <List.Content>
              <List.Header>Felix</List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <Image
              avatar
              src="https://react.semantic-ui.com/images/avatar/small/molly.png"
            />
            <List.Content>
              <List.Header>Sima</List.Header>
            </List.Content>
          </List.Item>
        </List>
      </Container>
    </>
  );
};

export default ContactUs;