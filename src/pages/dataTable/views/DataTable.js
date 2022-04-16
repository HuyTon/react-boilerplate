import React, { useState } from 'react';
import { generateData } from '../../../utils/data/data-generation';
import styled from 'styled-components';

const useSortableData = (items, config = null) => {    
    const [sortConfig, setSortConfig] = React.useState(config);

    const sortedItems = React.useMemo(() => {
        let sortableItems = [...items]; console.log('sortableItems', sortableItems);

        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
        ) {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return { items: sortedItems, requestSort, sortConfig };
};

const DataTable = (props) => {
    const data = generateData(10);
    const columns = ["investment", "commitmentdate", "marketvalue"];    

    const [cols, setCols] = useState(columns);
    const [rows, setRows] = useState(data);
    const [dragOver, setDragOver] = useState("");

    const handleDragStart = e => {
        const { id } = e.target;
        const idx = cols.indexOf(id);
        e.dataTransfer.setData("colIdx", idx);
    };

    const handleDragOver = e => e.preventDefault();
    const handleDragEnter = e => {
        const { id } = e.target;
        setDragOver(id);
    };

    const handleOnDrop = e => {
        const { id } = e.target;
        const droppedColIdx = cols.indexOf(id);
        const draggedColIdx = e.dataTransfer.getData("colIdx");
        const tempCols = [...cols];

        tempCols[draggedColIdx] = cols[droppedColIdx];
        tempCols[droppedColIdx] = cols[draggedColIdx];
        setCols(tempCols);
        setDragOver("");
    };
    const { items, requestSort, sortConfig } = useSortableData(data);
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    return (
        <Table>
        <thead>
          <tr>
            {cols.map(col => (
              <StyledTh
                id={col}
                key={col}
                draggable
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDrop={handleOnDrop}
                onDragEnter={handleDragEnter}
                dragOver={col === dragOver}
              >
                <button
                  type="button"
                  onClick={() => requestSort({ col })}
                  className={getClassNamesFor({ col })}>
                  {col}
                </button>
              </StyledTh>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.id}>
              {Object.entries(row).map(([k, v], idx) => (
                <Cell key={v} dragOver={cols[idx] === dragOver}>
                  {row[cols[idx]]}
                </Cell>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>       
    );
};

const Table = styled.table`
  border-collapse: collapse;
`;

const Cell = styled.td`
  font-size: 14px;
  text-align: left;
  text-transform: capitalize;
  vertical-align: center;
  padding: 20px;
  border-bottom: 2px solid #eef0f5;
  text-transform: lowercase;
  border-left: ${({ dragOver }) => dragOver && "3px solid green"};
`;

const StyledTh = styled.th`
  white-space: nowrap;
  color: #716f88;
  letter-spacing: 1.5px;
  font-weight: 600;
  font-size: 14px;
  text-align: left;
  text-transform: capitalize;
  vertical-align: middle;
  padding: 20px;
  border-bottom: 2px solid #eef0f5;
  text-transform: uppercase;
  border-left: ${({ dragOver }) => dragOver && "3px solid green"};
`;


export default DataTable;