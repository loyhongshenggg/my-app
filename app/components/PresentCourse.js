import { Card } from "@paraboly/react-native-card";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";

const PresentCourse = (props) => {
  // const props1 = {
  //   percent: 60, // is require
  //   colorSlice: "#00a1ff",
  //   colorCircle: "#00a1ff",
  //   fontColor: "#365b74",
  //   fontSize: "1.6rem",
  //   fontWeight: 400,
  //   size: 200,
  //   stroke: 10,
  //   strokeBottom: 5,
  //   speed: 60,
  //   cut: 0,
  //   rotation: -90,
  //   opacity: 10,
  //   fill: "#00897B",
  //   unit: "%",
  //   textPosition: "0.35em",
  //   animationOff: false,
  //   strokeDasharray: "10,1",
  //   inverse: false,
  //   round: false,
  //   number: true,
  //   linearGradient: ["#ffff00", "brown"]
  // };
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