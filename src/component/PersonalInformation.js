//左边导航栏的个人信息部分
import {Button} from '@arco-design/web-react';
import ShowPersonalInformation from "./ShowPersonalInformation";
import '../css/personalDetailInformation.css'
import {useState} from "react";
import EditPersonalInformation from "./EditPersonalInformation";
import axios from "axios";

    let temp;
    axios.get('http://127.0.0.1:5000/user').then(
        response=>{
             return  response.data
        },
        error=>{
            return {}
        }
    ).then((result)=>{temp=result});

function PersonalInformation(){
    const [person, setPerson] = useState({
        '账号':"111111",
        '昵称':"dk睡不醒.",
        '邮箱':'1455045838@qq.com',
        '电话':"19167012617",
        '个性签名':'这是个性签名'
    });

    const data = [];
    Object.keys(person).forEach(key => {
        data.push({ label: key, value: person[key] });
    });

    // 展示个人信息还是编辑个人信息
    const [ifShowInformation, setIfShowInformation] = useState(true);

    // 按钮状态
    const [buttonMessage, setButtonMessage] = useState('编辑个人信息');
    const [buttonStatus, setButtonStatus] = useState('');

    // 获取修改后的信息
    // @ts-expect-error
    function getNewInformation(value) {
        setPerson(value);
        setIfShowInformation(true);
        setButtonMessage('编辑个人信息');
        setButtonStatus('');
    }

    function Show() {
        if (ifShowInformation) {
            return <ShowPersonalInformation data={data} />;
        } else {
            return null;
        }
    }

    function Edit() {
        if (ifShowInformation) {
            return null;
        } else {
            return (
                <EditPersonalInformation
                    data={data}
                    getNewInformation={getNewInformation}
                />
            );
        }
    }

    return (
        <div>
            <Show />
            <Edit />

            <Button
                status={buttonStatus}
                type={"primary"}
                size={"large"}
                style={{height:'40px',fontSize:'17px',position:'absolute',top:'65%',left:'20%',width:'200px'}}
                long
                onClick={() => {
                    if (ifShowInformation) {
                        setIfShowInformation(false);
                        setButtonMessage('取消编辑个人信息');
                        setButtonStatus('danger');
                    } else {
                        setIfShowInformation(true);
                        setButtonMessage('编辑个人信息');
                        setButtonStatus('');
                    }
                }}
            >
                {buttonMessage}
            </Button>
        </div>
    )
}

export default PersonalInformation;