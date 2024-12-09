'use client';

import Tabs from '@/app/components/Tabs'
import React, { useState } from 'react'
import ExampleCheckBox from './part/ExampleCheckBox';
import CodeCheckbox from './part/CodeCheckbox';
import PropsCheckbox from './part/PropsCheckbox';

function CheckBoxScreen() {
    const [tabs, setTabs] = useState(["Example", "Code", "Props"])
    const [tabsSelected, setTabsSelected] = useState("Example")

    return (
        <>
            <div className="p-10 w-full">
                <Tabs tabs={tabs} tabsSelected={tabsSelected} setTabsSelected={setTabsSelected}/>
                <div className='border-2 border-gray-500 rounded-md w-full h-full mt-2 p-5'>
                    {
                        tabsSelected == "Example" && <ExampleCheckBox/>
                    }
                    {
                        tabsSelected == "Code" && <CodeCheckbox/>
                    }
                    {
                        tabsSelected == "Props" && <PropsCheckbox/>
                    }
                </div>
            </div>
        </>
    )
}

export default CheckBoxScreen;