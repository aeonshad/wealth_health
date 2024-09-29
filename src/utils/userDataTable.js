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
        name: 'StatDate',
    },
    {
        selector: (row) => row.department,
        sortable: true,
        wrap: true,
        name: 'Department',
    },
];
