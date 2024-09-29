import EmployeeService from '../services/employee-service';
import { dateFormat } from './formatDate';

export const columns = [
    {
        selector: (row) => row.firstname,
        sortable: true,
        wrap: true,
        name: 'FirstName',
    },
    {
        selector: (row) => row.lastname,
        sortable: true,
        wrap: true,
        name: 'LastName',
    },
    {
        selector: (row) => row.dateOfBirth,
        format: (row) => dateFormat(row.dateOfBirth),
        sortable: true,
        wrap: true,
        name: 'Birth',
    },
    {
        selector: (row) => row.street,
        sortable: true,
        wrap: true,
        name: 'Street',
        grow: 1.3,
    },
    {
        selector: (row) => row.city,
        sortable: true,
        wrap: true,
        name: 'City',
    },
    {
        selector: (row) => row.state,
        sortable: true,
        wrap: true,
        name: 'State',
        grow: 1.1,
    },
    {
        selector: (row) => row.zipCode,
        sortable: true,
        wrap: true,
        name: 'ZipCode',
    },
    {
        selector: (row) => row.startDate,
        format: (row) => dateFormat(row.startDate),
        sortable: true,
        wrap: true,
        name: 'StartDate',
    },
    {
        selector: (row) => row.department,
        sortable: true,
        wrap: true,
        name: 'Department',
        grow: 1.2,
    },
    {
        cell: (row) => (
            <button
                className="whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-destructive hover:text-destructive/80 h-6 px-3 bg-background"
                onClick={() => EmployeeService.delete(row.id)}
            >
                Delete
            </button>
        ),
        ignoreRowClick: false,
        button: 'true',
        name: 'Actions',
    },
];
