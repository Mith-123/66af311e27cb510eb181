import React, { useState } from "react";
import {
  Container,
  Content,
  Form,
  Label,
  Input,
  Button,
  Item,
  Text,
} from "native-base";
import { Keyboard, ActivityIndicator, Alert } from "react-native";
import { ApiConfig } from "../../api";
import { useNavigation } from "@react-navigation/native";

const Home = (props: any) => {
  const apiKey = "nj5gfL3GxhdXWg0DjqfgoWB4i30Bxg0ePa5nAIfu";
  const [id, setId] = useState("");
  const [hideLoader, setHideLoader] = useState(true);

  const navigation = useNavigation();

  const searchAstroid = (id: any) => {
    setHideLoader(false);
    new ApiConfig()
      .getJSON(
        "https://api.nasa.gov/neo/rest/v1/neo/" +
          id +
          "?api_key=nj5gfL3GxhdXWg0DjqfgoWB4i30Bxg0ePa5nAIfu"
      )
      .then((res: any) => {
        console.log("------res--->", res);
        setHideLoader(true);
        navigation.navigate("Details", {
          data: res.data,
        });
      })
      .catch((Error) => {
        console.log("-----Error--->", Error);
        setHideLoader(true);
        alert("asteroid not found");
      });
  };

  const random = () => {
    setHideLoader(false);
    new ApiConfig()
      .getJSON("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY")
      .then((res: any) => {
        let id =
          res.data.near_earth_objects[
            Math.floor(Math.random() * res.data.near_earth_objects.length)
          ].id;
        searchAstroid(id);
        setHideLoader(true);
      })
      .catch((Error) => {
        console.log("-----Error--->", Error);
        setHideLoader(true);
      });
  };

  return (
    <Container>
      <Content style={{ width: "90%", alignSelf: "center" }}>
        <Form>
          <Item floatingLabel>
            <Label>Enter your asteroid id</Label>
            <Input
              value={id}
              onChangeText={(txt) => {
                setId(txt.trim());
              }}
            />
          </Item>
        </Form>

        <Button
          style={{ alignSelf: "center", marginVertical: "10%" }}
          disabled={id.length == 0 ? true : false}
          onPress={() => searchAstroid(id)}
        >
          <Text>Search Asteroid</Text>
        </Button>

        <Button style={{ alignSelf: "center" }} onPress={() => random()}>
          <Text>Random Asteroid</Text>
        </Button>
        {!hideLoader ? (
          <ActivityIndicator size={"large"} color={"gray"} />
        ) : null}
      </Content>
    </Container>
  );
};

export default Home;
