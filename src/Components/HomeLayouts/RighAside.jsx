import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from '../FindUs';
import QZones from '../QZones';
import AddSection from '../AdSection'

const RighAside = () => {
    return (
        <div className='space-y-8'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <QZones></QZones>
            <AddSection></AddSection>
        </div>
    );
};

export default RighAside;