import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Jumbotron from "./Jumbotron";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Jumbotron",
  Component: Jumbotron,
} as ComponentMeta<typeof Jumbotron>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Jumbotron> = (args) => (
  <Jumbotron {...args} />
);

export const Jumbotron1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Jumbotron1.args = {
  heading: "Jumbotron",
  Content: <p>This is a paragraph.</p>,
};

export const Jumbotron2 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Jumbotron2.args = {
  heading: "Jumbotron",
  description: "This is a description",
  Content: <p>This is a paragraph.</p>,
};
