import React, { Component } from "react";
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
import SpendingForm from "./SpendingForm";
import SpendingsTable from "./SpendingsTable";
import Moment from "moment";




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
  constructor(props) {
    super();
    this.state = {
      selectedDate: Moment(),
      monthlyBudget: 1500,
      spendingData: props.initialData
    };
  }
  

  // calculates spendings in current month
  calculateMontlySpendings = () => {
    let monthlySpendings = 0;

    this.state.spendingData.forEach(spending => {
      const parsedDate = Moment(spending.date, 'MM/DD/YYYY');
      if (
        parsedDate.month() === this.state.selectedDate.month() &&
        parsedDate.year() === this.state.selectedDate.year()
      ) {
        monthlySpendings += Number(spending.value);
      }
    });

    return monthlySpendings;
  };
  
  // adds new spending to DATA array
  addNewSpending = value => { 
    const newelement = {
      key: +Moment(),
      date: this.state.selectedDate.format("L"),
      name: value.name,
      value: Number(value.value)
    };
    this.setState({ spendingData: [...this.state.spendingData, newelement] });
  };

  // calculates Daily Budget UI label
  calculateDailyBudget = () => {
    let daysLeft =
      this.state.selectedDate.daysInMonth() - this.state.selectedDate.date();

    daysLeft = daysLeft === 0 ? 1 : daysLeft;
    let dailyBudget =
      (this.state.monthlyBudget - this.calculateMontlySpendings()) / daysLeft;
    if(dailyBudget < 0) dailyBudget = 0;
    return Math.round(dailyBudget);
  };

  // calculates spendings for selected date
  spendingsPerDay = () => {
    const finalArray = [];
    this.state.spendingData.forEach(spending => {
      if (spending.date === this.state.selectedDate.format("L"))
        finalArray.push(spending);
    });

    return finalArray;
  };
  // MAIN render function for main component
  render() {
    const { selectedDate } = this.state;
    const { monthlyBudget } = this.state;

    return (
      <Grommet theme={theme} full>
        <Box>
          <Box background="linear-gradient(90.77deg, #1f132b,#3a2657 )">
            <Heading level="3" color="white" margin="small" alignSelf="center">
              Daily Spender
            </Heading>
            <Box
              animation="fadeIn"
              tag="header"
              align="center"
              justify="center"
              direction="row"
            >
              <Button
                icon={<CaretPrevious />}
                margin="small"
                color="white"
                id="buttonPrevious"
                onClick={event =>
                  this.setState({
                    selectedDate: selectedDate.subtract(1, "days")
                  })
                }
              />
              <Text color="white">{selectedDate.format("LL")}</Text>
              <Button
                icon={<CaretNext />}
                margin="small"
                color="white"
                id="buttonNext"
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
                id="monthlyBudget"
                onChange={event =>
                  this.setState({ monthlyBudget: event.target.value })
                }
              />
            </FormField>
            <Box direction="column" align="start">
              <Heading level="4" alignSelf="center" margin="small">
                Spent this month: {this.calculateMontlySpendings()}
              </Heading>
              <Heading level="4" alignSelf="center" margin="small">
                Daily Available Budget: {this.calculateDailyBudget()}
              </Heading>
            </Box>
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
      brand: "#3a2657"
    },
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px"
    }
  }
};

export default App;
