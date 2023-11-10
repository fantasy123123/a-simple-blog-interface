
import {Affix, Layout} from "@arco-design/web-react";
import PersonalInformation from "./PersonalInformation";
import MenuItems from "./MenuItems";
import Contents from "./Contents";

const Sider = Layout.Sider;
const Content = Layout.Content;
const Background=()=>{
    return (
        <div className='layout-basic-demo'>
            <Layout style={{ position:'absolute',height: '100%',width:'100%' }}>
                <Layout>
                    <Sider style={{
                        position:'absolute',
                        height: '100%',
                        width:'20%',
                    }}
                    >
                        <Affix>
                            <PersonalInformation/>
                            <MenuItems/>
                        </Affix>
                    </Sider>
                    <Content style={{
                        position:'absolute',
                        height: '100%',
                        width:'80%',
                        right:'0',
                        backgroundColor:'#F2F3F5',
                    }}>
                        <Contents/>
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default Background