import React from 'react';
import { render as rtRender, screen, RenderOptions } from '@testing-library/react';
import { createStore, Dispatch, Store } from 'redux';
import { Provider } from 'react-redux';
import App from '../App';

interface ReduxRenderOptions extends RenderOptions {
  nextState?: any;
  store?: Store<any>;
  dispatch?: Dispatch<any>;
};

function render(
  ui: React.ReactElement,
  {
    nextState,
    store = createStore(() => nextState, {}),
    dispatch,
    ...renderOptions
  }: ReduxRenderOptions = {},
) {
  if (dispatch) store.dispatch = dispatch;
  function Wrapper({ children }: { children: React.ReactNode[] }) {
    return <Provider store={store}>{children}</Provider>;
  }
  // @ts-ignore
  return rtRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// override react-testing-library render method
export { render };

const mockWidget = {
  "bigTitle": "Spain",
  "smallTitle": "Sandy beaches and delicious food",
  "image": "https://picsum.photos/id/1023/3955/2094",
  "fareId": "1"
};

const mockFare = {
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
};


test('renders slot cards', async () => {
  const dispatch = jest.fn();
  render(<App />,       {
    nextState: {
      widgets: {
        slotWidgets: [mockWidget]
      },
      fares: {
        default: mockFare
      }
    },
    dispatch,
  });

  const cardElement = await screen.findAllByTestId("slot-card");
  expect(cardElement.length).toEqual(1);

  const cardImage = await screen.findByTestId("card-image");
  expect(cardImage.style.background).toEqual(`url(${mockWidget.image})`);
  
  const destinationAirportName = await screen.findByTestId("destination-airport-name");
  expect(destinationAirportName.innerHTML).toEqual(`,&nbsp;${mockFare.destination.airportName}`);
});
