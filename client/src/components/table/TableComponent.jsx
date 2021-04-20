import React from "react";
import MUIDataTable from "mui-datatables";

export default function TableComponent(props) {
    const { data, title, columns,options } = props;
    function deleteMovie(RowsDeleted, data) {
        const ids = RowsDeleted.data.map(d => d.dataIndex);
        console.log(data,ids);
        // removeMovie(params._id).then(res => alert(res))
    }

    return (
        <MUIDataTable
            title={title}
            options={options}
            data={data}
            columns={columns}
        />
    )
}
