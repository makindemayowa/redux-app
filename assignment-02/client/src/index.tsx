import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import './index.css';
import App from './App';

const store = configureStore({
    widgets: { slotWidgets: [] },
    fares: { default: {
      airlineName: "Ryanair",
      departureDate: "2021-06-22T11:00:00+00:00",
      returnDate: "2021-06-24T11:25:00+00:00",
      price: 16,
      time: "Found 4 hour ago",
      departure: {
          airportName: "",
          cityName: "Eindhoven"
      },
      destination: {
          airportName: "Costa Dorada",
          cityName: "Barcelona"
      }
    }
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
