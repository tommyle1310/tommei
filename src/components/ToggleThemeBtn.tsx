import React from 'react';
import { Toggle } from '@ui-kitten/components';
import { useTheme } from '../hooks/useTheme';

const ToggleTheme = (): React.ReactElement => {

    const [checked, setChecked] = React.useState(false);
    const { toggleTheme } = useTheme(); // Use the custom hook

    const onCheckedChange = (isChecked: boolean): void => {
        setChecked(isChecked);
        toggleTheme()
    };

    return (
        <Toggle
            status='success'
            appearance='default'
            checked={checked}
            onChange={onCheckedChange}
        >
            {`Checked: ${checked}`}
        </Toggle>
    );
};

export default ToggleTheme