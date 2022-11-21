//Dependencies.
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

//CSS.
import './App.css';

//AsyncThunk Function.
import { getLorem } from './features/lorem/loremSlice';

const MainApplication = () => {
    //https://www.youtube.com/watch?v=Oc14xbizA2o
    //16:05.

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLorem());
      return () => {
        
      };
    }, [])

    return (
        <div>
            <h1>MAIN APPLICATION.</h1>
        </div>
    )
}

export default MainApplication
