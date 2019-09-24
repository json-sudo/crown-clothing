import React from 'react';
import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';

const WithSpinner = PassedInComponent => {
    const Spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? 
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay> :
            <PassedInComponent {...otherProps} />
    }

    return Spinner
    }
    
export default WithSpinner;