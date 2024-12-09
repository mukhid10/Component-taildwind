'use client';

import Tabs from '@/app/components/Tabs'
import React, { useState } from 'react'
import ExampleTable from './part/ExampleTable';
import CodeTable from './part/CodeTable';
import PropsTable from './part/PropsTable';

function TableScreen() {
    const [tabs, setTabs] = useState(["Example", "Code", "Props"])
    const [tabsSelected, setTabsSelected] = useState("Example")

    return (
        <>
            <div className="p-10 w-full">
                <Tabs tabs={tabs} tabsSelected={tabsSelected} setTabsSelected={setTabsSelected}/>
                <div className='border-2 border-gray-500 rounded-md w-full h-full mt-2 p-5'>
                    {
                        tabsSelected == "Example" && <ExampleTable/>
                    }
                    {
                        tabsSelected == "Code" && <CodeTable/>
                    }
                    {
                        tabsSelected == "Props" && <PropsTable/>
                    }
                </div>
            </div>
        </>
    )
}

export default TableScreen