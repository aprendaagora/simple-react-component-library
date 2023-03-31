import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FormGroup from "./FormGroup";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/FormGroup",
  component: FormGroup,
} as ComponentMeta<typeof FormGroup>;

const Template: ComponentStory<typeof FormGroup> = (args) => {
  const [value, setValue] = useState(args.value ?? "");

  return (
    <>
      <FormGroup
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

const TemplateCheckbox: ComponentStory<typeof FormGroup> = (args) => {
  const [value, setValue] = useState(args.value ?? false);

  return (
    <>
      <FormGroup
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

export const FormGroup1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FormGroup1.args = {
  value: "",
  label: "Input label",
  name: "input_name",
  placeholder: "Input placeholder",
  className: "",
};

export const FormGroupCheckbox = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FormGroupCheckbox.args = {
  value: false,
  type: "checkbox",
  label: "Checkbox input",
  name: "input_name",
};
