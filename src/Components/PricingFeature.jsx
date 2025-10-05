import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeature = ({feature}) => {
    return (
        <p className='flex mt-2.5'><CircleCheckBig className='mr-3' /> {feature}</p>
    );
};

export default PricingFeature;