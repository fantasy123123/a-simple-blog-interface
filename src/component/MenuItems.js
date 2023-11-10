//左端导航栏的下方的导航部分，采用了组件库的组件

import React from 'react';
import {Menu} from '@arco-design/web-react';
import '../css/menuItems.css'
import {
    IconExport,
    IconFile,
    IconList,
    IconNotification,
    IconQuestion,
    IconSettings,
    IconSubscribe
} from '@arco-design/web-react/icon';
const MenuItem = Menu.Item;

const MenuItems=()=>{
    return(
        <Menu
              style={{position:'absolute',
              bottom:"0",
              fontSize:'17px'}}
              defaultOpenKeys={['IMS']}
              defaultSelectedKeys={['IMS']}
        >
            <MenuItem key='IMS'>
                <IconFile />
                博客
            </MenuItem>
            <MenuItem key='messages'>
                <IconNotification />
                消息
            </MenuItem>
            <MenuItem key='helping'>
                <IconQuestion />
                帮助
            </MenuItem>
            <MenuItem key='settings'>
                <IconSettings />
                设置
            </MenuItem>
            <MenuItem key='exit'>
                <IconExport />
                退出
            </MenuItem>
        </Menu>
    )
}

export default MenuItems