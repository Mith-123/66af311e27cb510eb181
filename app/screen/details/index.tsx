import React, { useState } from "react";
import { Container, Content, Label, Text } from "native-base";
import { StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

const Details = (props: any) => {
  const route = useRoute();
  const [data, setData] = useState("");

  React.useEffect(() => {
    const { data } = route.params;
    setData(data);
  }, []);
  return (
    <Container>
      <Content style={{ width: "90%", alignSelf: "center" }}>
        <Label style={style.Text_style}>Name :</Label>
        <Text>{data.name}</Text>
        <Label style={style.Text_style}>Nasa Jpl Url :</Label>
        <Text>{data.nasa_jpl_url}</Text>
        <Label style={style.Text_style}>Potential hazardous :</Label>
        <Text>{data.is_potentially_hazardous_asteroid}</Text>
      </Content>
    </Container>
  );
};

const style = StyleSheet.create({
  Text_style: {
    fontWeight: "bold",
  },
});
export default Details;
