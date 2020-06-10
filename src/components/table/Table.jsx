import React from 'react'
import { Icon as SemanticIcon, Menu as SemanticMenu, Table as SemanticTable } from 'semantic-ui-react'

import useTableGenerator from './hooks/useTableGenerator'

const Table = ({ data, columns, shouldPaginate }) => {
    const {
        // basic properties
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,

        // pagination properties
        canPreviousPage,
        nextPage,
        previousPage,
    } = useTableGenerator({ data, columns, shouldPaginate })

    const tableProps = getTableProps()
    const tableBodyProps = getTableBodyProps()

    return (
        <SemanticTable {...tableProps}>
            <TableHeader headerGroups={headerGroups} />
            <TableBody tableBodyProps={tableBodyProps} rows={rows} prepareRow={prepareRow} />

            {shouldPaginate && (
                <SemanticTable.Footer>
                    <SemanticTable.Row>
                        <SemanticTable.HeaderCell colSpan="3">
                            <SemanticMenu floated="right" pagination>
                                <SemanticMenu.Item disabled={!canPreviousPage} as="a" icon onClick={previousPage}>
                                    <SemanticIcon name="chevron left" />
                                </SemanticMenu.Item>

                                <SemanticMenu.Item disabled={!canPreviousPage} as="a" icon onClick={nextPage}>
                                    <SemanticIcon name="chevron right" />
                                </SemanticMenu.Item>
                            </SemanticMenu>
                        </SemanticTable.HeaderCell>
                    </SemanticTable.Row>
                </SemanticTable.Footer>
            )}
        </SemanticTable>
    )
}

const TableHeader = ({ headerGroups }) => {
    return (
        <SemanticTable.Header>
            {headerGroups.map(headerGroup => {
                const headerGroupProps = headerGroup.getHeaderGroupProps()
                return (
                    <SemanticTable.Row {...headerGroupProps}>
                        {headerGroup.headers.map(column => {
                            const headerProps = column.getHeaderProps()

                            return (
                                <SemanticTable.HeaderCell {...headerProps}>
                                    {column.render('Header')}
                                </SemanticTable.HeaderCell>
                            )
                        })}
                    </SemanticTable.Row>
                )
            })}
        </SemanticTable.Header>
    )
}

const TableBody = ({ tableBodyProps, rows, prepareRow }) => {
    return (
        <SemanticTable.Body {...tableBodyProps}>
            {rows.map((row, i) => {
                prepareRow(row)
                const rowProps = row.getRowProps()

                return (
                    <SemanticTable.Row {...rowProps}>
                        {row.cells.map(cell => {
                            const cellProps = cell.getCellProps()

                            return <SemanticTable.Cell {...cellProps}>{cell.render('Cell')}</SemanticTable.Cell>
                        })}
                    </SemanticTable.Row>
                )
            })}
        </SemanticTable.Body>
    )
}

export default Table