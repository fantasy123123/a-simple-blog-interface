import {Avatar, Descriptions, Space} from "@arco-design/web-react";
import '../css/personalDetailInformation.css'
const ShowPersonalInformation=({ data })=>{
    return(
        <div style={{position:"absolute",
        top:'5%',
        left:'15%',
        right:'15%',
        fontSize:'22px',
    }}>
        <Space size='large' style={{paddingLeft:'80px'}}>
            <Avatar size={84}>
                <img
                    alt='avatar'
                    src='/avatar.img'
                />
            </Avatar>
        </Space>
        <div>
            <br/>
            <Descriptions
                column={1}
                data={data}
                style={{ marginBottom: 20}}
                labelStyle={{ paddingRight: 36 }}
                size={'large'}
            />
        </div>
        </div>)
            }
export default ShowPersonalInformation
