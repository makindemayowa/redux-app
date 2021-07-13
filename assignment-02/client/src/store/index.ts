import configureStore from './configurestore';

const initialState = {
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
}

const store = configureStore(initialState);

export default store;
