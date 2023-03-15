import "./hollow.scss";
import { PropsWithChildren } from "react";


export interface ButtonHollowProps extends PropsWithChildren<any> {
  text: string;
}

function ButtonHollow(props: ButtonHollowProps) {
  return (
    <button className="button_hollow">
      <span>{props.text}</span>
    </button>
  );
}

ButtonHollow.defaultProps = {
  text: "Hello World",
};

export default ButtonHollow;
