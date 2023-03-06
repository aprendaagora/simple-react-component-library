import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import List from "./List";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/List",
  component: List,
} as ComponentMeta<typeof List>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

const items1 = ["Apple", "Banana", "Orange"];
export const List1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
List1.args = {
  items: items1,
  renderItem: (item) => <li>{item}</li>,
};
