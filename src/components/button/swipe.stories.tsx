
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ButtonSwipe from './swipe';

import "../../index.css"

export default {
  title: 'ButtonSwipe',
  component: ButtonSwipe,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof ButtonSwipe>;


const Template: ComponentStory<typeof ButtonSwipe> = ({text}) => <ButtonSwipe text={text} />;

export const ExampleStory = Template.bind({});
ExampleStory.args = {
  text: 'Hello World',
};
ExampleStory.storyName = "Example ButtonSwipe";