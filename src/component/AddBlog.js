import {Button} from "@arco-design/web-react";
import { useRef, useEffect} from 'react';
import {
    Form,
    Input,
    Checkbox,
    Message,
} from '@arco-design/web-react';
const FormItem = Form.Item;
const TextArea = Input.TextArea;
const formItemLayout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 16,
    },
};
const noLabelLayout = {
    wrapperCol: {
        span: 20,
        offset: 8,
    },
};

function getNowTime(){
    function addZero(s){
        return s<10? ('0'+s):s;
    }
    let date=new Date();
    let year=date.getFullYear();
    let month=date.getMonth()+1;
    let day=date.getDate();
    let hour=date.getHours();
    let minute=date.getMinutes();

    return year+'/'+month+'/'+day+' '+addZero(hour)+':'+addZero(minute);
}

function randomID(){
    let date=new Date();
    let year=date.getFullYear();
    let month=date.getMonth()+1;
    let day=date.getDate();
    let hour=date.getHours();
    let minute=date.getMinutes();
    let second=date.getSeconds();

    return year+'/'+month+'/'+day+' '+hour+':'+minute+':'+second;
}

const AddBlog=({getNewBlog})=>{
    const formRef = useRef();
    useEffect(() => {
        formRef.current.setFieldsValue({
            rate: 5,
        });
    }, []);

    let titleInput;
    let authorInput;
    let contentInput;

    return (
                    <div style={{marginTop:'50px'}}>
                        <Form
                            ref={formRef}
                            autoComplete='off'
                            {...formItemLayout}
                            size={'large'}
                        >

                            <FormItem label='作者' field='作者' initialValue='dk睡不醒.' rules={[{ required: true }]}>
                                <Input disabled={true} style={{backgroundColor:'white',width:'200px'}}  ref={ref => (authorInput = ref)}/>
                            </FormItem>
                            <br/>
                            <FormItem label='标题' field='标题' rules={[{ required: true }]}>
                                <Input style={{backgroundColor:'white'}} maxLength={50}  placeholder='请输入......（最大字数：50字）'  ref={ref => (titleInput = ref)}/>
                            </FormItem>
                            <br/>
                            <FormItem label='内容' field='内容' rules={[{ required: true }]}>
                                <TextArea placeholder='请输入......' autoSize={{minRows:15}} style={{backgroundColor:'white'}}  ref={ref => (contentInput = ref)}/>
                            </FormItem>

                            <FormItem
                                {...noLabelLayout}
                                field='readme'
                                triggerPropName='checked'
                                rules={[{ type: 'boolean', true: true }]}
                            >
                                <Checkbox>我已阅读并同意
                                    <a
                                    href={'https://www.bilibili.com/video/BV1PM411376e/?spm_id_from=333.337.search-card.all.click'}
                                    style={{textDecoration:'none',color:'blue'}}
                                    >
                                        《我不玩原神！》
                                    </a>
                                    协议。
                                </Checkbox>
                            </FormItem>
                            <FormItem {...noLabelLayout}>
                                <Button
                                    onClick={async () => {
                                        if (formRef.current) {
                                            try {
                                                await formRef.current.validate();
                                                Message.info('校验通过，提交成功！');
                                                const newBlog={
                                                    'author':authorInput.dom.value,
                                                    'avatar':'/avatar.img',
                                                    'title':titleInput.dom.value,
                                                    'content':contentInput.dom.value,
                                                    'time':getNowTime(),
                                                    'like':0,
                                                    'star':0,
                                                    'view':0,
                                                    'ifLike':false,
                                                    'ifStar':false,
                                                    'key':randomID(),
                                                }
                                                getNewBlog(newBlog);
                                            } catch (_) {
                                                console.log(formRef.current.getFieldsError());
                                                Message.error('校验失败，请检查字段！');
                                            }
                                        }
                                    }}
                                    type='primary'
                                    style={{ marginRight: 24 }}
                                >
                                    提交
                                </Button>
                            </FormItem>
                        </Form>
    </div>)
}

export default AddBlog