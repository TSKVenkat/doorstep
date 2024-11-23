import React, { useRef } from 'react';
import Spline from '@splinetool/react-spline';

const SplineComponent = () => {
    const splineRef = useRef(null);

    const handleLoad = (spline) => {
        splineRef.current = spline;
        console.log('Spline Loaded:', splineRef?.current);
    };
    

    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <Spline
                scene="https://prod.spline.design/iSb0WrwuRDGTHdcq/scene.splinecode"
                onLoad={handleLoad}
            />
        </div>
    );
};

export default SplineComponent;
