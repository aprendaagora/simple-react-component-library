import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Collapsible from "./Collapsible";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Collapsible",
  component: Collapsible,
} as ComponentMeta<typeof Collapsible>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Collapsible> = (args) => (
  <Collapsible {...args} />
);

export const Collapsible1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Collapsible1.args = {
  heading: "Collapsible",
  Content: <p>This is a paragraph.</p>,
};
