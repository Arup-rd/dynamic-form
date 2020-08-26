import React from "react";
import ReactHtmlParser from "react-html-parser";
import "antd/dist/antd.css";
import { Form, Input, Select, Radio } from "antd";

const FormItem = (props) => {
  const item = props.item;

  if (item.type === "info_html") return ReactHtmlParser(item.content);
  else if (item.type === "email") return <EmailField item={item} />;
  else if (item.type === "text") return <TextField item={item} />;
  else if (item.type === "multi-select") return <MultiSelectField item={item} />
  else if (item.type === "select")
    return <SelectField item={item} />;
  else if (item.type === "radio") return <RadioField item={item} />;
  else return <Input />;
};

const EmailField = (data) => {
  const item = data.item;
  return (
    <Form.Item
      name={item.name}
      label={item.label}
      rules={[
        {
          type: item.type,
          message: "The input is not valid E-mail!",
        },
        {
          required: item.required,
          message: item.validation_message,
        },
      ]}
    >
      <Input />
    </Form.Item>
  );
};

const TextField = (data) => {
  const item = data.item;
  return (
    <Form.Item
      name={item.name}
      label={item.label}
      rules={[
        {
          required: item.required,
          message: item.validation_message,
        },
      ]}
    >
      <Input />
    </Form.Item>
  );
};

const MultiSelectField = (data) => {
  const item = data.item;
  return (
    <Form.Item
      name={item.name}
      label={item.label}
      rules={[
        {
          required: item.required,
          message: item.validation_message,
        },
      ]}
    >
      <Select placeholder={item.placeholder} mode="tags">
        {Object.keys(item.options[0]).map((option, index) => (
          <Select.Option value={option} key={index}>
            {option}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
};

const SelectField = (data) => {
  const item = data.item;
  return (
    <Form.Item
      name={item.name}
      label={item.label}
      rules={[
        {
          required: item.required,
          message: item.validation_message,
        },
      ]}
    >
      <Select placeholder={item.placeholder}>
        {Object.keys(item.options[0]).map((option, index) => (
          <Select.Option value={option} key={index}>
            {option}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
};

const RadioField = (data) => {
  const item = data.item;
  return (
    <Form.Item
      name={item.name}
      label={item.label}
      rules={[
        {
          required: item.required,
          message: item.validation_message,
        },
      ]}
    >
      <Radio.Group>
        {Object.keys(item.options[0]).map((option, index) => (
          <Radio
            style={{
              display: "block",
              height: "30px",
              lineHeight: "30px",
            }}
            key={index}
            value={option}
            checked
          >
            {option}
          </Radio>
        ))}
      </Radio.Group>
    </Form.Item>
  );
};

export default FormItem;
