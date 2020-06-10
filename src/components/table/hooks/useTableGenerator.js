import React from 'react'
import { useTable, usePagination } from 'react-table'

const useTableGenerator = props => {
    const { data: _data, columns: _columns, shouldPaginate } = props || {}
    const data = React.useMemo(() => _data, [_data])
    const columns = React.useMemo(() => _columns, [_columns])

    const plugins = []
    if (shouldPaginate) plugins.push(usePagination)

    return useTable(
        { columns, data, initialState: { pageSize: 3, defaultPageSize: 3 } },
        ...plugins
    )
}

export default useTableGenerator
