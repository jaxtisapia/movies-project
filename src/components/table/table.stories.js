import React from 'react'
import { Table } from './'

export default {
    title: 'Tables',
}

export const basicTable = () => (
    <Table data={data} columns={columns} />
)

export const withPagination = () => (
    <Table data={data} columns={columns} shouldPaginate/>
)

const data = [
    { model: 'Optima', release: { year: 1992, month: 1 }, company: 'Kia' },
    { model: 'Sorento', release: { year: 2003, month: 12 }, company: 'Kia' },
    { model: 'Camry', release: { year: 2004, month: 6 }, company: 'Toyota' },
    { model: 'Kicks', release: { year: 2018, month: 1 }, company: 'Nissan' },
    {
        model: 'Highlander',
        release: { year: 2002, month: 5 },
        company: 'Toyota',
    },
    {
        model: 'CLA 200',
        release: { year: 2017, month: 3 },
        company: 'Mercedes Benz',
    },
]

const columns = [
    { Header: 'Car Model', accessor: 'model' },
    { Header: 'Year Released', accessor: 'release.year' },
    { Header: 'Month Released', accessor: 'release.month' },
    { Header: 'Company', accessor: 'company' },
]
