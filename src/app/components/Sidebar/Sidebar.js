'use client'

import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import * as Icon from "@tabler/icons-react";
import { data } from './data';
import { useRouter } from 'next/navigation';


function CSidebar() {
    const router = useRouter()

    const [filter, setFilter] = useState({
        parent: "About Boiler Plat",
        child: null,
        exampelComponent: "addComponent"
    })

    const IconRender =({ name })=>{
        const IconComponent = Icon[name];
        return IconComponent ? <IconComponent  /> : null;
    }
    

  return (
    <div>
        <Sidebar className='h-screen sticky top-0 bottom-0 left-0' backgroundColor='rgb(255,	127,	0, 0.8)'>
            <Menu
                    menuItemStyles={{
                    button: ({ level, active, disabled, hovered }) => {
                    if (level === 0)
                        return {
                        fontWeight:"600",
                        "&:hover": {
                            backgroundColor: "#FFF !important",
                        },
                        };
                    
                    if (level === 1)
                        return {
                        fontWeight:"600",
                        backgroundColor: "rgb(255,	127,	0, 0.5) !important",
                        "&:hover": {
                            backgroundColor: "#FFF !important",
                            },
                    };
                    },
                }}
            >
            {
                data?.sidebar && data.sidebar.map((item, index)=>(
                    <React.Fragment key={index}>
                    {
                        item?.parent ? 
                        <SubMenu key={item.title} label={item?.title} 
                        icon={<IconRender name={item?.icon} size={24} color="black" />}
                        active={true}
                        >
                            {
                                item?.child && item.child.map((childItem, childIndex)=>(
                                    
                                        <MenuItem key={`${item.title}-${childIndex}`}
                                        active={childItem?.title == filter?.child ? true : false}
                                        onClick={() => router.push(childItem?.href)}
                                        > {childItem?.title} </MenuItem>
                                
                                ))
                            }
                        </SubMenu> : 
                        <MenuItem 
                        key={item.title}
                        icon={<IconRender name={item?.icon} size={24} color="black" />}
                        active={true}
                        onClick={() => router.push(item?.href)}
                        > {item?.title} </MenuItem>
                    }
                    </React.Fragment>
                ))
            }
            </Menu>
        </Sidebar>
    </div>
  )
}

export default CSidebar