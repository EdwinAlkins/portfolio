import "./swipe.scss";
import { PropsWithChildren } from "react";


export interface ButtonSwipeProps extends PropsWithChildren<any> {
  text: string;
}

function ButtonSwipe(props: ButtonSwipeProps) {
  return (
    <button className="button_slide slide_right parallelogram">
      <span>{props.text}</span>
    </button>
  );
}

ButtonSwipe.defaultProps = {
  text: "Hello World",
};

export default ButtonSwipe;
