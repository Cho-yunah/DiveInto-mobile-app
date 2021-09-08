import { combineReducers } from 'redux';
import reservationReducer from '@/src/legacy/lib/redux/reducers/reservationReducer';
import studentMyListReducer from '@/src/legacy/lib/redux/reducers/studentMyListReducer';
import {loginReducer} from '@/src/legacy/lib/redux/reducers/loginReducer';

const rootReducer = combineReducers({
  reservationReducer,
  studentMyListReducer,
  loginReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
