import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Box, Heading, Grommet, Calendar, FormField, TextInput, Button} from 'grommet';


const AppBar = (props) => (
    <Box
        tag='header'
        direction='row'
        align='center'
        justify='between'
        background='brand'
        pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        elevation='medium'
        style={{ zIndex: '1' }}
        {...props}
     />
   );
class App extends Component  {
    state = {
        selectedDate: new Date(),
        text: '',
        dailyBudget: 0,
        monthlyBudget: 1500
    }
    onSelectSingle= (selectedDate) => {
        this.setState({selectedDate: selectedDate});
    }
    render() {
        const { selectedDate } = this.state;
        const { text } = this.state;
        const { monthlyBudget } = this.state;
    return (
        <Grommet theme={theme} full>         
                <Box fill>
                    <AppBar>
                    <Heading level='3' margin='none'>Daily Spender</Heading>
                    <FormField label='Monthly Budget'>
                        <TextInput value={`${monthlyBudget }`} onChange={event => this.setState({ monthlyBudget: event.target.value })} />
                    </FormField>
                    
                    </AppBar>
                    <Heading level='4' margin='none'>Daily Budget: {this.state.dailyBudget}</Heading>
                    <Calendar
                        date={selectedDate}
                        onSelect={this.onSelectSingle}
                        size='small'
                        />
                    <Box align='center' justify='between' direction='row'>
                        <form onSubmit={event => event.preventDefault()}>
                        <FormField label='Spending item'>
                        <TextInput />
                        </FormField>
                        <TextInput
                        value={text}
                        placeholder='Value'
                        onChange={event => this.setState({ text: event.target.value })}
                        />
                        <Button type='submit' label='Submit' primary={true} />
                        </form>
                    </Box>    

                </Box>         
        </Grommet>
        );
    };
}
    
    const theme = {
        global: {
            colors: {
                //brand: '#228BE6'
            },
            font: {
                family: 'Roboto',
                size: '14px',
                height: '20px',
          },
        },
      };
      

ReactDOM.render(<App />, document.querySelector('#root'));