
import { Spinner } from '@heroui/react';
import React from 'react';

const loadingPage = () => {
    return (
         <div className='flex justify-center items-center h-screen'>
            <Spinner color="success" size="xl" />
         </div>
    );
};

export default loadingPage;