import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  Text,
  Box,
  Heading,
  Grommet,
  Button,
  FormField,
  TextInput,
  ResponsiveContext
} from "grommet";
import { CaretNext, CaretPrevious } from "grommet-icons";
import SpendingForm from "./components/SpendingForm";
import SpendingsTable from "./components/SpendingsTable";
import Moment from "moment";

const DATA = [
  {
    datestamp: "01/20/2019",
    name: "ticket",
    value: 3.2
  },
  {
    datestamp: "01/20/2019",
    name: "magazine",
    value: 30
  },
  {
    datestamp: "01/20/2019",
    name: "pint beer",
    value: 10
  },
  {
    datestamp: "01/20/2019",
    name: "course",
    value: 45
  },
  {
    datestamp: "01/19/2019",
    name: "lol",
    value: 35
  }
];
const AppBar = props => (
  <ResponsiveContext.Consumer>
    {size => (
      <Box
        tag="header"
        align="center"
        justify="between"
        background="linear-gradient(102.77deg, #F8F8F8 -9.18%, #F2F2F2 209.09%)"
        pad={{ left: "medium", right: "small", vertical: "small" }}
        elevation="medium"
        style={{ zIndex: "1" }}
        {...props}
      />
    )}
  </ResponsiveContext.Consumer>
);

class App extends Component {
  state = {
    selectedDate: Moment(),
    monthlyBudget: 1500,
    spendingData: DATA
  };
  calculateMontlySpendings = () => {
    let monthlySpendings = 0;
    const parsedDate = Moment(this.state.selectedDate, "MM-DD-YYYY");
    this.state.spendingData.forEach(spending => {
      if (
        parsedDate.month() === this.state.selectedDate.month() &&
        parsedDate.year() === this.state.selectedDate.year()
      ) {
        monthlySpendings += spending.value;
      }
    });
    console.log(monthlySpendings);
    return monthlySpendings;
  };
  addNewSpending = (value) => {
    const newelement = {
        datestamp: this.state.selectedDate.format("L"),
        name: value.name,
        value: value.value
      };
    this.setState({spendingData:[...this.state.spendingData, newelement]});
  };
  calculateDailyBudget = () => {
    const dailyBudget =
      (this.state.monthlyBudget - this.calculateMontlySpendings()) /
      this.state.selectedDate.daysInMonth();
    return Math.round(dailyBudget);
  };
  spendingsPerDay = () => {
    const finalArray = [];
    this.state.spendingData.forEach(spending => {
      if (spending.datestamp === this.state.selectedDate.format("L"))
        finalArray.push(spending);
    });
    return finalArray;
  };
  render() {
    const { selectedDate } = this.state;
    const { monthlyBudget } = this.state;

    return (
      <Grommet theme={theme} full>
        <Box fill>
            <Box background="brand">
          <Heading level="3" margin="small" alignSelf="center">
            Daily Spender
          </Heading>
          <Box tag="header" align="center" justify="center" direction="row">
            <Button
              icon={<CaretPrevious />}
              margin="small"
              onClick={event =>
                this.setState({
                  selectedDate: selectedDate.subtract(1, "days")
                })
              }
            />
            <Text>{selectedDate.format("LL")}</Text>
            <Button
              icon={<CaretNext />}
              margin="small"
              onClick={event =>
                this.setState({ selectedDate: selectedDate.add(1, "days") })
              }
            />
          </Box>
          </Box>
          <AppBar>
            <SpendingForm addNewSpending={this.addNewSpending} />
          </AppBar>
          <Box align="center" pad="medium" direction="row" justify="center">
            <FormField label="Monthly Budget">
              <TextInput
                value={`${monthlyBudget}`}
                onChange={event =>
                  this.setState({ monthlyBudget: event.target.value })
                }
              />
            </FormField>
            <Heading level="4" alignSelf="center" margin="small">
              Daily Budget: {this.calculateDailyBudget()}
            </Heading>
          </Box>
          <SpendingsTable spendingData={this.spendingsPerDay()} />
        </Box>
      </Grommet>
    );
  }
}

const theme = {
  global: {
    colors: {
      brand: "#00739D"
    },
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px"
    }
  }
};

ReactDOM.render(<App />, document.querySelector("#root"));
