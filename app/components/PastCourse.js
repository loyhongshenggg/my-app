import { Card } from "@paraboly/react-native-card";
import { useNavigation } from '@react-navigation/core';


const PastCourse = (props) => {
  const navigation = useNavigation();
  return (
    <Card
      title={props.title}
      iconName={props.iconName}
      iconType= {props.icon}
      bottomRightText= {props.expiry}
      description= {props.description}
      onPress={() => {navigation.navigate("certificate")}}
      iconBackgroundColor = {props.color}
      />
  )
}


export default PastCourse