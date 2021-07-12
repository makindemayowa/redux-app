import React from 'react';
import { Container, Card, CardBody } from 'reactstrap';
import moment from 'moment';
import { Dispatch } from "redux"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import planeRight from '../assets/aeroplane-right.png';
import planeLeft from '../assets/aeroplane-left.png';
import { getFare } from '../store/actionCreators';
import './slotcard.scss';

function SlotCard({ slotWidget }: { slotWidget: ISlotWidget }) {
    const dispatch: Dispatch<any> = useDispatch();
    const fare: IFare = useSelector(
      (state: IApplicationState) => state.fares[slotWidget.fareId] ?? state.fares.default,
      shallowEqual
    );
    const loadFare = React.useCallback(
        () => dispatch(getFare(slotWidget.fareId)),
        [dispatch, slotWidget.fareId]
    );

    React.useEffect(() => {
        loadFare();
    }, [loadFare]);

  return (
    <Container className="slot-card" data-testid="slot-card">
      <Card>
        <div className="card-image" data-testid="card-image" style={{backgroundImage: `url(${slotWidget.image})`}}>
            <div className="card-image-overlay" />
            <div className="card-image-overlay-content d-flex column align-items-center">
                <div>
                    <p className="slot-card-text body-text">
                        {slotWidget.smallTitle}
                    </p>
                    <p className="slot-card-text header-text">
                        {slotWidget.bigTitle}
                    </p>
                </div>
                <div className="slot-card-text">
                    <span className="">
                        from
                    </span>
                    <br/>
                    <span className="">
                        <span className="price-currency">€</span><span className="price">{fare.price}</span><sup className="price-subscript">*</sup> 
                    </span>
                    <br/>
                    <hr className="yellow-underline" />
                </div>
            </div>
        </div>
        <CardBody className="px-2">
            <div className="d-flex column align-items-center mb-1">
                <div className="plane-icon-container">
                    <img className="aeroplane-icon" src={planeRight} alt="" />
                </div>
                <p className="mt-0 mb-0">
                    {
                        fare.departure.cityName &&
                        <span className="bold-text-dark">{fare.departure.cityName}</span>
                    }
                    {
                        fare.departure.airportName &&
                        <span className="bold-text-dark">,&nbsp;{fare.departure.airportName}</span>
                    }
                    <span className="bold-text-light">&nbsp; • {moment(fare.departureDate).format("MMM DD")}</span>
                </p>
            </div>
            <div className="d-flex align-items-center mb-1">
                <div className="plane-icon-container">
                    <img className="aeroplane-icon" src={planeLeft} alt="" />
                </div>
                <p className="mt-0 mb-0">
                    {
                        fare.destination.cityName &&
                        <span className="bold-text-dark">{fare.destination.cityName}</span>
                    }
                    {
                        fare.destination.airportName &&
                        <span className="bold-text-light" data-testid="destination-airport-name">,&nbsp;{fare.destination.airportName}</span>
                    }
                    <span className="bold-text-light">&nbsp; • {moment(fare.returnDate).format("MMM DD")}</span>
                </p>
            </div>
            <div className="d-flex align-items-center mb-1">
                <div className="plane-icon-container"></div>
                <p className="mt-0 mb-0 bold-text-lighter">
                    <span>{fare.time}</span>
                    <span>&nbsp; • {fare.airlineName}</span>
                </p>
            </div>
        </CardBody>
      </Card>
    </Container>
  );
}

export default SlotCard;
