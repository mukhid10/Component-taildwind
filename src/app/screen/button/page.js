'use client';

import Tabs from '@/app/components/Tabs'
import React, { useState } from 'react'
import ExampleButton from './part/ExampleButton';
import CodeButton from './part/CodeButton';
import PropsButton from './part/PropsButton';


function ButtonScreen() {
    const [tabs, setTabs] = useState(["Example", "Code", "Props"])
    const [tabsSelected, setTabsSelected] = useState("Example")

    return (
        <>
            <div className="p-10 w-full">
                <Tabs tabs={tabs} tabsSelected={tabsSelected} setTabsSelected={setTabsSelected}/>
                <div className='border-2 border-gray-500 rounded-md w-full h-full mt-2 p-5'>
                    {
                        tabsSelected == "Example" && <ExampleButton/>
                    }
                    {
                        tabsSelected == "Code" && <CodeButton/>
                    }
                    {
                        tabsSelected == "Props" && <PropsButton/>
                    }
                </div>
            </div>
        </>
    )
}

export default ButtonScreen;