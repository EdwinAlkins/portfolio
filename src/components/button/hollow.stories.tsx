import { ComponentMeta, ComponentStory } from "@storybook/react";

import ButtonHollow, { ButtonHollowProps } from "./hollow";

import "../../index.css";

export default {
  title: "ButtonHollow",
  component: ButtonHollow,
  argTypes: {
    text: {
      control: "text",
      defaultValue: "Hello World",
      description: "Text to display on the button",
    },
  },
} as ComponentMeta<typeof ButtonHollow>;

const Template: ComponentStory<typeof ButtonHollow> = (
  props: ButtonHollowProps
) => <ButtonHollow {...props} />;

export const ExampleStory = Template.bind({});
ExampleStory.storyName = "Example ButtonHollow";
