'use client';

import Tabs from '@/app/components/Tabs'
import React, { useState } from 'react'
import ExampleTabs from './part/ExampleTabs';
import UseTabs from './part/UseTabs';
import PropsTabs from './part/PropsTabs';

function TabsScreen() {
    const [tabs, setTabs] = useState(["Example", "Code", "Props"])
    const [tabsSelected, setTabsSelected] = useState("Example")

    return (
        <>
            <div className="p-10 w-full">
                <Tabs tabs={tabs} tabsSelected={tabsSelected} setTabsSelected={setTabsSelected}/>
                <div className='border-2 border-gray-500 rounded-md w-full h-full mt-2 p-5'>
                    {
                        tabsSelected == "Example" && <ExampleTabs/>
                    }
                    {
                        tabsSelected == "Code" && <UseTabs/>
                    }
                    {
                        tabsSelected == "Props" && <PropsTabs/>
                    }
                </div>
            </div>
        </>
    )
}

export default TabsScreen