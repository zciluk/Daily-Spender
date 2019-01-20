import React, { Component } from "react";
import { Box, FormField, Button, Form } from "grommet";
import { Add } from "grommet-icons";

class SpendingForm extends Component {
  onSubmit = (value) => {
    this.props.addNewSpending(value);
  }


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
            validate={{ regexp: /^[0-9]*$/, message: "only numbers are acceptable" }}
          />
          <Button
            type="submit"
            icon={<Add />}
            margin={{ "bottom": "large", "top": "small"}}
            alignSelf="center"
            label="Add spending"
            onClick={() => {}}
          />
        </Form>
      </Box>
    );
  }
}

export default SpendingForm;
