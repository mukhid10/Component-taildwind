import React from 'react'
import DataTable from 'react-data-table-component';

function ExampleTable() {
    const customStyles = {
        headCells: {
            style: {
                background: "rgb(255,	127,	0, 0.8)",
                fontWeight: "bold",
                fontSize: "16px"
            },
        },
    };

    const dummuData = [
        {
            name : "Jhon Doe",
            age : "23",
            hoby : "Football",
            address: "Bandung"
        },
        {
            name : "Alex Doe",
            age : "27",
            hoby : "Basket Ball",
            address: "Jakarta"
        },
        {
            name : "Martin Doe",
            age : "30",
            hoby : "Volley Ball",
            address: "Yogyakarta"
        }
    ]

  return (
    <div className='flex flex-col justify-center items-center h-full w-full'>
        <DataTable
        className="datatable-custom"
        responsive
        // noHeader
        striped
        persistTableHead
        customStyles={customStyles}
        // progressComponent={<TableSkeleton count={5} />}
        // progressPending={loading}
        data={dummuData || []}
        noDataComponent={<h5 className='mt-3'>No data can be displayed yet, please set a filter to display data.</h5>}
        columns={[
            {
                name: 'NO',
                cell: (_, index) =>  index,
                grow: 0,
                // center: true,
                width: '70px',
            },
            {
                name: 'NAME',
                // width: '260px',
                cell: (row) => row?.name,
            },
            {
                name: 'AGE',
                // width: '180px',
                // center: true,
                cell: (row) => row?.age,
            },
            {
                name: 'HOBY',
                // right: true,
                // width: '170px',
                cell: (row) => row?.hoby,
            },
            {
                name: 'ADRESS',
                // right: true,
                // width: '190px',
                cell: (row) => row?.address,
            },
        ]}
    />
    </div>
  )
}

export default ExampleTable