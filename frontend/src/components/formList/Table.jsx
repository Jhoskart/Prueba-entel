import { TableWrapper, TableHeader, TableHeaderCell, TableRow, TableCell } from "./StyledFormList"

function Table({ headers, rows }) {
    return (
        <TableWrapper>
            <TableHeader>
                {headers.map((header, index) => (
                    <TableHeaderCell key={index}>{header}</TableHeaderCell>
                ))}
            </TableHeader>
            {rows.map((row, index) => (
                <TableRow key={index}>
                    {row.map((cell, index) => (
                        <TableCell key={index}>{cell}</TableCell>
                    ))}
                </TableRow>
            ))}
        </TableWrapper>
    );
}

export default Table;