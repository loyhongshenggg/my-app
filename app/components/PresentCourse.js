import { Card } from "@paraboly/react-native-card";

const PresentCourse = (props) => {
  return (
    <Card
      title={props.title}
      iconName={props.iconName}
      iconType= {props.icon}
      description={props.description}
      iconBackgroundColor = {props.color}
     />

  )
}



export default PresentCourse