import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Alert from "./Alert";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const AlertPrimary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AlertPrimary.args = {
  text: "This is a primary alert",
  type: "primary",
  closeButton: true,
};

export const AlertSuccess = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AlertSuccess.args = {
  text: "This is a success alert",
  type: "success",
  closeButton: true,
};

export const DangerSuccess = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DangerSuccess.args = {
  text: "This is a danger alert",
  type: "danger",
  closeButton: true,
};

export const SecondarySuccess = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SecondarySuccess.args = {
  text: "This is a secondary alert",
  type: "secondary",
  closeButton: true,
};

export const LightSuccess = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LightSuccess.args = {
  text: "This is a light alert",
  type: "light",
  closeButton: true,
};

export const DarkSuccess = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DarkSuccess.args = {
  text: "This is a dark alert",
  type: "dark",
  closeButton: true,
};
