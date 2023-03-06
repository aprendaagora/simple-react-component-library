import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Navbar from "./Navbar";
import Button from "../../01_atoms/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

const routes = [
  {
    route: "home",
    text: "Home",
  },
];
export const Sidemenu1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Sidemenu1.args = {
  Logo: <Button text="Logo" />,
  routes: routes,
  renderItem: (item) => <span>{item.text}</span>,
};
