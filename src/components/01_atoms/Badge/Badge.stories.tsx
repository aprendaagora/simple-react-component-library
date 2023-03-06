import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Badge from "./Badge";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Badge",
  component: Badge,
} as ComponentMeta<typeof Badge>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Badge1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Badge1.args = {
  text: "Notifications",
};

export const Badge2 = Template.bind({});
Badge2.args = {
  text: "Friends",
  count: 100,
};

export const Badge3 = Template.bind({});
Badge3.args = {
  text: "Sales",
  count: 50,
  bgColor: "blue",
};
