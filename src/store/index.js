import createStore from 'storeon';

import control from './reducers/control';

export const store = createStore([control]);
