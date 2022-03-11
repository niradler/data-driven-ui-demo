import React from "react";
import {
    List,
    Table,
    useTable,
    Typography,
} from "@pankod/refine-antd";
import { capitalize } from "./dataProvider";

export const DataPage = ({ name }) => {

    const { Title } = Typography;
    const { tableProps } = useTable();
    return (
        <div>
            <Title
                style={{
                    textAlign: "center",
                    fontSize: "2rem",
                    fontWeight: 600,
                    padding: "1rem",
                    color: "#67be23",
                }}
            >
                {capitalize(name)}
            </Title>

            <List>
                <Table {...tableProps} rowKey="id">
                    {Object.keys(Array.isArray(tableProps?.dataSource) ? tableProps.dataSource[0] : {}).map((key) => (
                        <Table.Column dataIndex={key} title={capitalize(key)} />
                    ))}
                </Table>
            </List>
        </div>
    );
};

export default DataPage;