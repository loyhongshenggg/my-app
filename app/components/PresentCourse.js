import { Card } from "@paraboly/react-native-card";


const PresentCourse = (props) => {
  return (
    <Card
      title={props.title}
      iconName={props.iconName}
      iconType= {props.icon}
      topRightText="50/301"
      bottomRightText="30 km"
      description="Lorem ipsum dolor sit."
      onPress={() => {}}
      iconBackgroundColor = {props.color}
     />
  )
}

// classic-computer
// Foundation safety-cone
// FontAwesome5 truck 

export default PresentCourse