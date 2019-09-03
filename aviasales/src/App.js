import React, { Component } from 'react';
import Filtres from './components/Filtres';
import Ticket from './components/Ticket';

class App extends Component {

  getSearchId = async (e) => {
    e.preventDefault();
    const apiUrlSearchId = await fetch('https://front-test.beta.aviasales.ru/search')
      .then((response) => {
        return response.json();
      });
    this.getTickets(apiUrlSearchId.searchId);
  };

  getTickets = async (searchId) => {
    const ticketsApi = await fetch (`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
      .then((response) => {
        return response.json();
      });
    let tickets=[];
    for (let i=0; i<5; i++) {
    tickets.push(ticketsApi.tickets[i])
    }
    console.log(tickets)
  };

  render() {
    return (
      <div>
        <Filtres/>
        <Ticket/>
      </div>
    );
  }
}

export default App;