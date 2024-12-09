'use client';

import Tabs from '@/app/components/Tabs'
import React, { useState } from 'react'
import ExampleInput from './part/ExampleInput';
import CodeInput from './part/CodeInput';
import PropsInput from './part/PropsInput';



function ButtonScreen() {
    const [tabs, setTabs] = useState(["Example", "Code", "Props"])
    const [tabsSelected, setTabsSelected] = useState("Example")

    return (
        <>
            <div className="p-10 w-full">
                <Tabs tabs={tabs} tabsSelected={tabsSelected} setTabsSelected={setTabsSelected}/>
                <div className='border-2 border-gray-500 rounded-md w-full h-full mt-2 p-5'>
                    {
                        tabsSelected == "Example" && <ExampleInput/>
                    }
                    {
                        tabsSelected == "Code" && <CodeInput/>
                    }
                    {
                        tabsSelected == "Props" && <PropsInput/>
                    }
                </div>
            </div>
        </>
    )
}

export default ButtonScreen;