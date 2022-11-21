//Dependencies.
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//CSS.
import './App.css';

//AsyncThunk Function.
import { getLorem } from './features/lorem/loremSlice';

const MainApplication = () => {
    //https://www.youtube.com/watch?v=Oc14xbizA2o
    //16:25.

    const [apiData, setapiData] = useState([])

    const dispatch = useDispatch();
    const data = useSelector(state => state.data);

    useEffect(() => {
        dispatch(getLorem())
            .then(result => setapiData([...apiData, ...result.payload]))
            .catch(err => console.error({ err, errorCode: err.code, errorMessage: err.message }));
      return () => {
        
      };
    }, [])

    useEffect(() => {
        console.log({ apiData });
      return () => {
        
      };
    }, [apiData])

    return (
        <div style={{padding: '1.5%'}}>
            <h1>MAIN APPLICATION.</h1>
            <section>
                <h3>API DATA</h3>
                {
                    apiData.map((val, ind) => (
                        <h3 key={ind} style={{ color: ind%2== 1 ? 'fuchsia': 'black' }}>{val}.</h3>
                    ))
                }
            </section>
        </div>
    )
}

export default MainApplication
