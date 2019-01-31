import React from "react";
import { DataTable, Text, Box } from "grommet";
import propTypes from 'prop-types';
const SpendingsTable = props => {
  const columns = [
    {
      property: "name",
      header: <Text>Name</Text>,
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
      alignContent="stretch"
      width="large"
      round
      animation="fadeIn"
      margin="small"
      border={{ color: "brand", side: "all", size: "medium" }}
    >
      {!Array.isArray(props.spendingData) || !props.spendingData.length ? (
        <Text alignSelf="center">There are no spendings for selected day.</Text>
      ) : (
        <DataTable
          margin="medium"
          primaryKey="key"
          columns={columns}
          data={props.spendingData }
          sortable
        />
      )}
    </Box>
  );
};

// PropTypes
SpendingsTable.propTypes = {
  spendingData: propTypes.array
};
SpendingsTable.defaultProps = {
  spendingData: []
};
export default SpendingsTable;
