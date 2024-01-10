import * as React from 'react';
import Header from './header';

export default function Nav() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <>
            <Header open={open} toggleDrawer={toggleDrawer} />
        </>
    );
}
