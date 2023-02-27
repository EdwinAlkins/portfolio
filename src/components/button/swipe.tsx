import "./swipe.scss";
import {PropsWithChildren} from "react";

export interface ButtonSwipeProps extends PropsWithChildren<any>{
  text: string;
}

function ButtonSwipe(props: ButtonSwipeProps) {
  return <button className="button_slide slide_right parallelogram"> {props.text} </button>;
}

ButtonSwipe.defaultProps = {
  text: "Hello World",
};

export default ButtonSwipe;
