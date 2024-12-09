'use client';

import React, { useState } from 'react'
import Tabs from '@/app/components/Tabs'

function ExampleTabs() {
    const [tabs, setTabs] = useState(["Tabs-1", "Tabs-2", "Tabs-3"])
    const [tabsSelected, setTabsSelected] = useState("Tabs-1")

  return (
    <div className='flex flex-col justify-center items-center h-full w-full'>
        <Tabs tabs={tabs} tabsSelected={tabsSelected} setTabsSelected={setTabsSelected}/>
        <div className='mt-10'>
              {
                  tabsSelected == "Tabs-1" && <h1 className='text-6xl'>Tabs-1</h1>
              }
              {
                  tabsSelected == "Tabs-2" && <h1 className='text-6xl'>Tabs-2</h1>
              }
              {
                  tabsSelected == "Tabs-3" && <h1 className='text-6xl'>Tabs-3</h1>
              }
          </div>
    </div>
  )
}

export default ExampleTabs