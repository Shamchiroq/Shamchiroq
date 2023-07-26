import React from 'react'
import { Button, Form, Input, Modal } from 'antd';
import { history } from '../../utils/history';

export default function TestModal({ isModalOpen, ok, cancel, test, setTest }) {
  const onFinish = (values) => {
    console.log('Success:', values);
    history.push("/test/process");
    setTest(!test)

  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Modal 
    className='!w-[400px]'
    title="Psixologik test" 
    open={isModalOpen}  
    onCancel={cancel}
    footer={null}
    >
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout='vertical'
      >
        <Form.Item
        className='mb-3'
          label="Ismingiz"
          name="name"
          rules={[
            {
              required: true,
              message: 'Iltimos ismingizni kiriting!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Yoshingiz"
          name="age"
          rules={[
            {
              required: true,
              message: 'Iltimos yoshingizni kiriting!',
            },
          ]}
        >
          <Input/>
        </Form.Item>
        <Form.Item className="flex justify-end">
          <Button size='large' className='greenBtn ms-3' htmlType='submit'>Testni boshlash</Button>
        </Form.Item>
      </Form>
    </Modal>
  ) 
}
