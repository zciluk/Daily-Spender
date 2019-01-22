import React, { Component } from "react";
import { Box, FormField, Button, Form } from "grommet";
import { Add } from "grommet-icons";
import propTypes from 'prop-types';
class SpendingForm extends Component {
  onSubmit = value => {
    this.props.addNewSpending(value);
  };

  render() {
    return (
      <Box
        direction="column"
        align="center"
        pad={{ left: "medium", right: "small", vertical: "small" }}
        style={{ zIndex: "1" }}
      >
        <Form onSubmit={({ value }) => this.onSubmit(value)}>
          <FormField name="name" placeholder="Name" required />
          <FormField
            name="value"
            placeholder="Value"
            required
            validate={{
              regexp: /^[0-9]*$/,
              message: "only numbers are acceptable"
            }}
          />
          <Button
            type="submit"
            icon={<Add />}
            margin="small"
            alignSelf="center"
            label="Add spending"
            name="submit"
            onClick={() => {}}
          />
        </Form>
      </Box>
    );
  }
}
SpendingForm.propTypes = {
  addNewSpending: propTypes.func
};


export default SpendingForm;
