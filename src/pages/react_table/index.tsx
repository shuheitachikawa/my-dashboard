import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import {
  useTable,
  useBlockLayout, // Resizeに必要
  useResizeColumns,
  Column,
  useSortBy,
  usePagination,
  useRowSelect,
  useColumnOrder
} from 'react-table';

interface User {
  name: string;
  age: string;
}

const TableView = styled.div`
  border-spacing: 0;
  border: 1px solid black;
  display: inline-block;
  max-width: 100%;
  overflow-x: auto;

  .thead {
  }

  .tbody {
    overflow-y: auto;
    overflow-x: hidden;
    height: 200px;
  }

  .tr {
    :last-child {
      .td {
        border-bottom: 0;
      }
    }
  }

  .th,
  .td {
    margin: 0;
    padding: 0.5rem;
    border-bottom: 1px solid black;
    border-right: 1px solid black;

    :last-child {
      border-right: 0;
    }
    .resizer {
      display: inline-block;
      background: blue;
      width: 10px;
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      transform: translateX(50%);
      z-index: 1;
      ${'' /* prevents from scrolling while dragging on touch devices */}
      touch-action:none;

      &.isResizing {
        background: red;
      }
    }
  }
`;

export default function TablePage() {
  // const [originalData] = React.useState(data)
  // const [skipPageReset, setSkipPageReset] = React.useState(false)

  // selectのチェックボックス
  const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = React.useRef();
      const resolvedRef = ref || defaultRef;

      React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
      }, [resolvedRef, indeterminate]);

      return (
        <>
          <input type="checkbox" ref={resolvedRef} {...rest} />
        </>
      );
    }
  );

  // // 編集セル
  // const EditableCell = ({
  //   value: initialValue,
  //   row: { index },
  //   column: { id },
  //   updateMyData // This is a custom function that we supplied to our table instance
  // }) => {
  //   // We need to keep and update the state of the cell normally
  //   const [value, setValue] = React.useState(initialValue);

  //   const onChange = (e) => {
  //     setValue(e.target.value);
  //   };

  //   // We'll only update the external data when the input is blurred
  //   const onBlur = () => {
  //     updateMyData(index, id, value);
  //   };

  //   // If the initialValue is changed external, sync it up with our state
  //   React.useEffect(() => {
  //     setValue(initialValue);
  //   }, [initialValue]);

  //   return <input value={value} onChange={onChange} onBlur={onBlur} />;
  // };

  // // Set our editable cell renderer as the default Cell renderer
  // const defaultColumn = {
  //   Cell: EditableCell
  // };

  // const updateMyData = (rowIndex, columnId, value) => {
  //   // We also turn on the flag to not reset the page
  //   setSkipPageReset(true);
  //   setData((old) =>
  //     old.map((row, index) => {
  //       if (index === rowIndex) {
  //         return {
  //           ...old[rowIndex],
  //           [columnId]: value
  //         };
  //       }
  //       return row;
  //     })
  //   );
  // };

  const data = React.useMemo(
    (): User[] => [
      {
        name: '立川',
        age: '31'
      },
      {
        name: '立川',
        age: '31'
      },
      {
        name: '立川',
        age: '12'
      },
      {
        name: '立川',
        age: '100'
      },
      {
        name: '立川',
        age: '12'
      },
      {
        name: '立川',
        age: '100'
      },
      {
        name: '立川',
        age: '12'
      },
      {
        name: '立川',
        age: '100'
      },
      {
        name: '立川',
        age: '12'
      },
      {
        name: '立川',
        age: '100'
      },
      {
        name: '立川',
        age: '12'
      },
      {
        name: '立川',
        age: '100'
      },
      {
        name: '立川修平ああああああああああ',
        age: '1'
      }
    ],
    []
  );

  const columns = React.useMemo(
    (): Column<User>[] => [
      {
        Header: () => {
          return (
            <div className="">
              <div className="">名前</div>
              <div className="">なまえ</div>
            </div>
          );
        },
        accessor: 'name', // accessor is the "key" in the data
        width: 400
        // maxWidth: 400
      },
      {
        Header: '年齢',
        accessor: 'age',
        maxWidth: 4000
      }
    ],
    []
  );

  const initialState = {};

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,

    // pagination
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    allColumns,

    // select(チェックボックス)
    selectedFlatRows,

    // 列並び替え
    setColumnOrder,

    // 列表示非表示
    getToggleHideAllColumnsProps,

    state: { pageIndex, pageSize, selectedRowIds }
  } = useTable(
    {
      columns,
      data
      // defaultColumn,
      // autoResetPage: !skipPageReset,
      // updateMyData
    },
    useSortBy,
    usePagination,
    useRowSelect,
    useColumnOrder,
    useResizeColumns,
    useBlockLayout,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        // Let's make a column for selection
        {
          id: 'selection',
          width: 40,
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllPageRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          )
        },
        ...columns
      ]);
    }
  );

  return (
    <div
      className=""
      style={{
        background: 'white',
        height: '100vh',
        padding: '16px',
        color: 'black'
      }}
    >
      <button onClick={() => setColumnOrder(['age', 'name'])}>オーダー</button>
      <div>
        <input type="checkbox" {...getToggleHideAllColumnsProps()} /> Toggle All
      </div>
      {allColumns.map((column) => (
        <div key={column.id}>
          <label>
            <input type="checkbox" {...column.getToggleHiddenProps()} />{' '}
            {column.Header || column.id}
          </label>
        </div>
      ))}
      <TableView {...getTableProps()}>
        <div className="thead">
          {headerGroups.map((headerGroup) => (
            <div className="tr" {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <div
                  className="th"
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render('Header')}
                  <div
                    {...column.getResizerProps()}
                    className={`resizer ${
                      column.isResizing ? 'isResizing' : ''
                    }`}
                  />
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="tbody" {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <div className="tr" {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <div className="td" {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </TableView>

      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 3, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>

      <div className="">
        {JSON.stringify({
          selectedRowIds
        })}
      </div>
    </div>
  );
}
