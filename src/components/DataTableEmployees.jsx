import DataTable from 'react-data-table-component';
import { columns } from '../utils/userDataTable';
import { useEffect, useState } from 'react';
import { tableCustomStyles } from './customStyle';

function DataTableEmployees({ employees }) {
    const [data, setData] = useState(employees);
    const [search, setSearch] = useState('');

    useEffect(() => {
        if (search.length > 0) {
            const result = employees.filter((item) => {
                return item.firstname.toLowerCase().match(search.toLocaleLowerCase()) || item.lastname.toLowerCase().match(search.toLocaleLowerCase());
            });
            setData(result);
        } else {
            setData(employees);
        }
    }, [search]);

    return (
        <DataTable
            columns={columns}
            data={data}
            noDataComponent={`Aucune correspondance pour ${search}`}
            pagination
            paginationRowsPerPageOptions={[10, 25, 50, 100]}
            fixedHeader
            highlightOnHover
            subHeader
            subHeaderComponent={
                <input
                    className="flex h-9 rounded-md w-full border bg-card border-border px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            }
            customStyles={tableCustomStyles}
        />
    );
}
export default DataTableEmployees;
