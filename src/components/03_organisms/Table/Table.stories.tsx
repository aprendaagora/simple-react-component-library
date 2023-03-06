import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Table from "./Table";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Table",
  component: Table,
} as ComponentMeta<typeof Table>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

const headers1 = ["Fruit", "Brands", "Country"];
const data1 = [
  [3, "Ferrari", "Brazil"],
  [1, "Ford", "France"],
  [2, "Nike", "Netherlands"],
  [4, "Harvard", "USA"],
  [7, "Apple", "China"],
  [6, "Honda", "Japan"],
  [8, "Nestle", "Colombia"],
  [5, "IKEA", "Argentina"],
  [9, "Samsung", "Spain"],
  [10, "Tik Tok", "Thailand"],
];
export const Table1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Table1.args = {
  data: data1,
  headers: headers1,
};

export const Table2 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Table2.args = {
  data: data1,
  headers: headers1,
  orderingHeaders: ["Fruit", "Country"],
};
