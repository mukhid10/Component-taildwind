import React, { useState } from 'react'
import { IconCopy } from '@tabler/icons-react'
import CopyToClipboard from 'react-copy-to-clipboard'

function UseTabs() {
  const [copy, setCopy] = useState(false)

  return (
    <div className='p-10 pt-4 bg-black rounded-md'>
        <div className='flex justify-end mb-6'>
            <CopyToClipboard 
                text={`
                    function Tabs() {
                        const [tabs, setTabs] = useState(["Example", "Use", "Props"])
                        const [tabsSelected, setTabsSelected] = useState("Example")
                    
                    return (
                        <div className='flex'>
                            {
                                tabs.length !== 0 && tabs.map((item, index)=>(
                                    <div key={index+3} 
                                        className={w-20 text-center border-b-4 font-medium cursor-pointer 
                                                    condition(ternary) ? 'border-orange-500' : 'border-gray-500'}} 
                                        onClick={()=>setTabsSelected(item)}           
                                        >
                                        {item}
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
    
                export default Tabs
                `}
                onCopy={() => setCopy(true)}
                >
                {
                    copy ?
                    <IconCopy className='cursor-pointer' color='gray'/> :
                    <IconCopy className='cursor-pointer' color='#FFF'/>
                }
            </CopyToClipboard>
        </div>
        <span className='text-white'>
            {`
                function Tabs() {
                    const [tabs, setTabs] = useState(["Example", "Use", "Props"])
                    const [tabsSelected, setTabsSelected] = useState("Example")
                
                return (
                    <div className='flex'>
                        {
                            tabs.length !== 0 && tabs.map((item, index)=>(
                                <div key={index+3} 
                                    className={w-20 text-center border-b-4 font-medium cursor-pointer 
                                                condition(ternary) ? 'border-orange-500' : 'border-gray-500'}} 
                                    onClick={()=>setTabsSelected(item)}           
                                    >
                                    {item}
                                </div>
                            ))
                        }
                    </div>
                )
            }

            export default Tabs
            `}
        </span>
    </div>
  )
}

export default UseTabs