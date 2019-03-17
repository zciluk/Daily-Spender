import Moment from 'moment';

const testDate = 1548889200000; // Jan 31 2019 00:00 - Fixed date for snapshot testing. This date is also set to test edge case (in calculateDailyBudget()) with last day of the month, and to check values calculations during month change

const exampleDate = Moment(testDate).format("L");
Moment.now = function() {
    return testDate;
}
//sample data
const DATA = [
    {
        key: 0,
        date: exampleDate,
        name: "ticket",
        value: 3.2
      },
      {
        key: 1,
        date: exampleDate,
        name: "magazine",
        value: 30
      },
      {
        key: 2,
        date: exampleDate,
        name: "pint beer",
        value: 10
      },
      {
        key: 3,
        date: exampleDate,
        name: "course",
        value: 45
      },
      {
        key: 4,
        date: exampleDate,
        name: "lol",
        value: 35
      }
  ];

  export default DATA;