import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Heading from "./Heading";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Heading",
  component: Heading,
} as ComponentMeta<typeof Heading>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Heading1 = Template.bind({});
// More on args:
Heading1.args = {
  text: "This is a heading 1",
  level: 1,
};

export const Heading2 = Template.bind({});
Heading2.args = {
  text: "This is a heading 2",
  level: 2,
};

export const Heading3 = Template.bind({});
Heading3.args = {
  text: "This is a heading 3",
  level: 3,
};

export const Heading4 = Template.bind({});
Heading4.args = {
  text: "This is a heading 4",
  level: 4,
};

export const Heading5 = Template.bind({});
Heading5.args = {
  text: "This is a heading 5",
  level: 5,
};

export const Heading6 = Template.bind({});
Heading6.args = {
  text: "This is a heading 6",
  level: 6,
};
