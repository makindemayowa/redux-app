interface ISlotWidget {
    bigTitle: string;
    smallTitle: string;
    image: string;
    fareId: string;
}

interface IFare {
    airlineName: string;
    departureDate: string;
    returnDate: string;
    price: number;
    time: string;
    departure: {
        airportName: string;
        cityName: string;
    };
    destination: {
        airportName: string;
        cityName: string;
    };
};

type WidgetAction = {
    type: string;
    slotWidgets: ISlotWidget[];
};

type WidgetsState = {
    slotWidgets: ISlotWidget[]
};

type FareAction = {
    type: string;
    fareId: string;
    fare: IFare;
};

type FareState = {
    [id: string]: IFare
};

interface IApplicationState {
    fares: FareState;
    widgets: WidgetsState;
};

type DispatchType = (args: WidgetAction | FareAction) => WidgetAction | FareAction;
