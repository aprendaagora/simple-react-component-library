import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from "./Card";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Card1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Card1.args = {
  heading: "Card",
  description: "This is a description",
  tailwind: "w-[400px]",
};
