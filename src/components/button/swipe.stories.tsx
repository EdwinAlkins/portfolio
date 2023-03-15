
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ButtonSwipe, {ButtonSwipeProps} from './swipe';

import "../../index.css"

export default {
  title: 'ButtonSwipe',
  component: ButtonSwipe,
  argTypes: {
    text: {control: 'text', defaultValue: 'Hello World', description: 'Text to display on the button'},
  },
} as ComponentMeta<typeof ButtonSwipe>;


const Template: ComponentStory<typeof ButtonSwipe> = (props: ButtonSwipeProps) => <ButtonSwipe {...props} />;

export const ExampleStory = Template.bind({});
ExampleStory.storyName = "Example ButtonSwipe";