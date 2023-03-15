import { ComponentMeta, ComponentStory } from "@storybook/react";

import { useCallback, useEffect } from "react";

import GameOfLifeView, { GameOfLifeProps } from "./index";
import { generateCells } from "../../../core/gameoflife";
// import "./style.stories.css";

import "../../../index.css";

export default {
  title: "Background/GameOfLife",
  component: GameOfLifeView,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  argTypes: {
    width: { control: "number", defaultValue: 50 },
    height: { control: "number", defaultValue: 50 },
    cellInit: { control: "array", defaultValue: [], visible: false},
    numberOfCell: { control: "number", defaultValue: 500 },
    style: {
      control: "object",
      backgroundColor: { control: "color", defaultValue: "white" },
      cellColor: { control: "color", defaultValue: "black" },
    },
    zoom: { control: "number", defaultValue: 10 },
    speed: { control: "number", defaultValue: 50 },
  },
} as ComponentMeta<typeof GameOfLifeView>;

const Template: ComponentStory<typeof GameOfLifeView> = (
  props: GameOfLifeProps
) => {
  props.cellInit = generateCells(props.width, props.height, props.numberOfCell)

  return (<GameOfLifeView {...props} />);
};

export const ExampleStory = Template.bind({});
ExampleStory.args = {
  width: 50,
  height: 50,
  style: {
    backgroundColor: "white",
    cellColor: "black",
  },
  numberOfCell: 500,
  zoom: 10,
  speed: 50,
};
// ExampleStory.args.cellInit = generateCells(ExampleStory.args?.width||50, ExampleStory.args?.height||50, ExampleStory.args.numberOfCell)
ExampleStory.storyName = "Example ButtonSwipe";
