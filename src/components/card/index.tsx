import { PropsWithChildren } from "react";

export interface CardProps extends PropsWithChildren<any> {
    title: string;
    description: string;
    image: string;
}

function Card(props: CardProps) {
    return (
        <div className="card">
            <span className="card_title">{props.title}</span>
            <img alt="" src={props.image} className="card_img" />
            <span className="card_description">{props.description}</span>
        </div>
    )
}

Card.defaultProps = {
    title: "Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est dui, dictum in pretium eget, consectetur faucibus dolor. Curabitur neque enim, efficitur nec ante a, dictum sodales lacus. Integer ut lobortis nisi, vulputate posuere neque. Morbi dictum mauris sed ex convallis, et molestie libero pulvinar.",
    image: "https://picsum.photos/200/200",
};

export default Card;