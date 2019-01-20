import React from "react";
import { DataTable, Text, Box } from "grommet";
const SpendingsTable = props => {
  const columns = [
    {
      property: "name",
      header: <Text>Name</Text>,
      primary: true,
      footer: "Total"
    },
    {
      property: "value",
      header: "Value",
      align: "end",
      aggregate: "sum",
      footer: { aggregate: true }
    }
  ];
  return (
    <Box
      alignSelf="center"
      width="large"
      round
      margin="small"
      border={{ color: "brand", side: "all", size: "medium" }}
    >
      {!Array.isArray(props.spendingData) || !props.spendingData.length ? (
        <Text alignSelf="center">There are no spendings for selected day.</Text>
      ) : (
        <DataTable margin="medium" columns={columns} data={props.spendingData} sortable />
      )}
    </Box>
  );
};

export default SpendingsTable;
