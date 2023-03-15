import { ComponentMeta, ComponentStory } from '@storybook/react';

import Card, {CardProps} from './index';

import "../../index.css"

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    title: {control: 'text', defaultValue: 'Title', description: 'Text to display on the button'},
    description: {control: 'text', defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est dui, dictum in pretium eget, consectetur faucibus dolor. Curabitur neque enim, efficitur nec ante a, dictum sodales lacus. Integer ut lobortis nisi, vulputate posuere neque. Morbi dictum mauris sed ex convallis, et molestie libero pulvinar. Morbi mi elit, placerat vel risus eget, dictum tincidunt arcu. Nam ac feugiat felis. Sed suscipit varius ultrices.', description: 'Text to display on the button'},
  },
} as ComponentMeta<typeof Card>;


const Template: ComponentStory<typeof Card> = (props: CardProps) => <Card {...props} />;

export const ExampleStory = Template.bind({});
ExampleStory.storyName = "Example Card";