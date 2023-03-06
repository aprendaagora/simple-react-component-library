import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Sidemenu from "./Sidemenu";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Sidemenu",
  component: Sidemenu,
} as ComponentMeta<typeof Sidemenu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Sidemenu> = (args) => (
  <Sidemenu {...args} />
);

const menuSections = [
  {
    heading: "Components",
    routes: [
      { route: "more", text: "Learn more" },
      { route: "about", text: "About" },
    ],
    renderItem: (item: any) => <span>{item.text}</span>,
  },
];

export const Sidemenu1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Sidemenu1.args = {
  menuSections: menuSections,
};
