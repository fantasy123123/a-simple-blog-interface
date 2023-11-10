import {Avatar, Space} from "@arco-design/web-react";
import { useRef, useEffect } from 'react';
import { Form, Input, Button, Message } from '@arco-design/web-react';
const TextArea = Input.TextArea;

const FormItem = Form.Item;
const noLabelLayout = {
    wrapperCol: {
        span: 17,
        offset: 5,
    },
};
const EditPersonalInformation=({ data, getNewInformation })=>{
    const formRef = useRef();
    useEffect(() => {
        formRef.current.setFieldsValue({
            rate: 5,
        });
    }, []);

    let nameInput;
    let collegeInput;
    let classInput;
    let studentNumberInput;
    let telephoneInput;
    function telephoneInputInitialValue() {
        if (data[4]) {
            return data[4].value;
        } else {
            return '';
        }
    }
    return(
        <div style={{position:"absolute",
        top:'5%',
        fontSize:'22px',}}>
        <Space size='large' style={{paddingLeft:'130.5px'}}>
            <Avatar size={84}>
                <img
                    alt='avatar'
                    src='/avatar.img'
                />
            </Avatar>
        </Space>

            <div style={{ width:'400px',marginTop:'20px' }}>
                <Form
                    ref={formRef}
                    autoComplete="off"
                    size={'large'}
                    scrollToFirstError
                >
                    <FormItem
                        label="账号"
                        field="账号"
                        initialValue={data[0].value}
                        disabled={true}
                        rules={[{ required: true }]}
                    >
                        <Input
                            style={{ width: '220px' }}
                            ref={ref => (nameInput = ref)}
                        />
                    </FormItem>

                    <FormItem
                        label="昵称"
                        field="昵称"
                        initialValue={data[1].value}
                        rules={[{ required: true }]}
                    >
                        <Input
                            style={{ width: '220px' }}
                            ref={ref => (collegeInput = ref)}
                        />
                    </FormItem>

                    <FormItem
                        label="邮箱"
                        field="邮箱"
                        initialValue={data[2].value}
                        rules={[{ required: true }]}
                    >
                        <Input
                            style={{ width: '220px' }}
                            ref={ref => (classInput = ref)}
                        />
                    </FormItem>

                    <FormItem
                        label="电话"
                        field="电话"
                        initialValue={data[3].value}
                        rules={[{ required: true }]}
                    >
                        <Input
                            style={{ width: '220px' }}
                            ref={ref => (studentNumberInput = ref)}
                        />
                    </FormItem>

                    <FormItem
                        label="个性签名"
                        field="个性签名"
                        initialValue={telephoneInputInitialValue()}
                    >
                        <TextArea
                            autoSize={{maxRows:3}}
                            maxLength={30}
                            style={{ width: '220px' }}
                            ref={ref => (telephoneInput= ref)}
                        />
                    </FormItem>

                    <FormItem {...noLabelLayout}>
                        <Button
                            onClick={async () => {
                                if (formRef.current) {
                                    try {
                                        await formRef.current.validate();
                                        Message.info('校验通过，提交成功！');
                                        if (telephoneInput.dom.value.trim() === '') {
                                            getNewInformation({
                                                '账号': nameInput.dom.value,
                                                '昵称': collegeInput.dom.value,
                                                '邮箱': classInput.dom.value,
                                                '联系方式': studentNumberInput.dom.value,
                                            });
                                        } else {
                                            getNewInformation({
                                                '账号': nameInput.dom.value,
                                                '昵称': collegeInput.dom.value,
                                                '邮箱': classInput.dom.value,
                                                '联系方式': studentNumberInput.dom.value,
                                                '个性签名': telephoneInput.dom.value.trim(),
                                            });
                                        }
                                    } catch (_) {
                                        console.log(formRef.current.getFieldsError());
                                        Message.error('校验失败，请检查字段！');
                                    }
                                }
                            }}
                            type="primary"
                            style={{ marginRight: 24 }}
                        >
                            提交
                        </Button>
                        <Button
                            onClick={() => {
                                formRef.current.resetFields();
                            }}
                        >
                            重置
                        </Button>
                    </FormItem>
                </Form>
            </div>
        </div>
    )
}

export default EditPersonalInformation