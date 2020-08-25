import React from "react";
import { Form } from "antd";
import { Data } from "./Data/formData";
import FormItem from "./FormItem";
import "antd/dist/antd.css";
import "./Form.css";

const DynamicForm = () => {
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  // const field = JSON.parse(Data)
  console.log(Data.fields)

  return (
    <div className="FormContainer">
      <Form scrollToFirstError {...formItemLayout} style={{ width: '80%' }}>
        {Data.fields.map((item, index) => (
          <FormItem item={item} key={index} />
        ))}
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <button type="submit" value="Submit" className="submitButton">
            Submit
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DynamicForm;
