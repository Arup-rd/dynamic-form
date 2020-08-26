import React, { useState } from "react";
import { Form, Table, Tag } from "antd";
import { Data } from "./Data/formData";
import FormItem from "./FormItem";
import "antd/dist/antd.css";
import "./Form.css";
import Modal from "antd/lib/modal/Modal";

const DynamicForm = () => {

  const [visible, setvisible] = useState(false)
  const [columns, setColumns] = useState([])
  const [data, setData] = useState([])

  const { Column } = Table

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



  const onFinish = values => {
    setvisible(true)
    setData([...data, values])
    setColumns(Object.keys(values))
  };

  const onCancel = () => {
    setvisible(false)
  }


  return (
    <div className="FormContainer">
      <Form scrollToFirstError {...formItemLayout} style={{ width: '80%' }} onFinish={onFinish}>
        {Data.fields.map((item, index) => (
          <FormItem item={item} key={index} />
        ))}
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <button type="submit" value="Submit" className="submitButton">
            Submit
          </button>
        </Form.Item>
      </Form>
      <Modal
        title="Input Information"
        visible={visible}
        onCancel={onCancel}
        onOk={onCancel}
        bodyStyle={{ overflowX: 'auto' }}

      >
        <Table dataSource={data} rowKey={(item, index) => index} pagination={false}>
          {columns.map((item, index) => <Column
            title={item}
            dataIndex={item}
            key={index}
            render={tags => Array.isArray(tags) ? (
              <>
                {tags.map(tag => (
                  <Tag key={tag} color="blue" key={tag}>
                    {tag}
                  </Tag>
                ))}
              </>
            ) : tags}
          />)}
        </Table>
      </Modal>

    </div >
  );
};

export default DynamicForm;
