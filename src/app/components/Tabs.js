
function Tabs({tabs, tabsSelected, setTabsSelected}) {
    // const [tabs, setTabs] = useState(["Example", "Use", "Props"])
    // const [tabsSelected, setTabsSelected] = useState("Example")
    
    return (
        <div className='flex'>
            {
                tabs.map((item, index)=>(
                    <div key={index+3} 
                        className={`w-20 text-center border-b-4 font-medium cursor-pointer 
                                    ${item == tabsSelected ? 'border-orange-500' : 'border-gray-500'}`} 
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