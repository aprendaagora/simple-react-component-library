import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./Input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof Input> = (args) => {
  const [value, setValue] = useState(args.value ?? "");

  return (
    <>
      <Input
        {...args}
        onChange={(...params: any[] | any) => {
          args.onChange(...params);
          setValue(params[0]);
        }}
        value={value}
      />
      <pre style={{ marginTop: 10 }}>{JSON.stringify({ value }, null, 2)}</pre>
    </>
  );
};

export const InputText = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InputText.args = {
  type: "text",
};

export const InputPassword = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InputPassword.args = {
  type: "password",
};

export const InputEmail = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InputEmail.args = {
  type: "email",
};

export const InputCheckbox = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InputCheckbox.args = {
  type: "checkbox",
};

export const InputNumber = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InputNumber.args = {
  type: "number",
};

export const InputNumberWith10Max = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InputNumberWith10Max.args = {
  type: "number",
  max: 10,
};
