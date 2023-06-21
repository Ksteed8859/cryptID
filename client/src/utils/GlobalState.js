import React, { createContext, useContext } from 'react';
import { useCryptidReducer } from './reducers'

const Context = createContext();
const { Provider } = Context;

const CryptidProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useCryptidReducer({
        cryptids: [],
    });

    return <Provider value={[state, dispatch]} {...props} />;
};

const useCryptidContext = () => {
    return useContext(Context);
};

export { CryptidProvider, useCryptidContext };