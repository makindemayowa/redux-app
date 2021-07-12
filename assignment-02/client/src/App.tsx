import React from 'react';
import { Row, Col } from 'reactstrap';
import { Dispatch } from "redux"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { getWidgets } from "./store/actionCreators"
import SlotCard from './components/SlotCard'
import './app.scss';

function App() {
  const dispatch: Dispatch<any> = useDispatch();
  const slotWidgets: readonly ISlotWidget[] = useSelector(
    (state: IApplicationState) => state.widgets.slotWidgets,
    shallowEqual
  )

  const loadWidgets = React.useCallback(
    () => dispatch(getWidgets()),
    [dispatch]
  );

  React.useEffect(() => {
    loadWidgets();
  }, [loadWidgets]);

  return (
    <div className="pt-4 px-3">
      <Row>
          {
            slotWidgets.map((slotWidget) =>
              <Col sm="12" md="6" lg="4" className="mb-4" key={slotWidget.fareId}>
                <SlotCard slotWidget={slotWidget}/>
              </Col>
            )
          }
      </Row>
    </div>
  );
}

export default App;
