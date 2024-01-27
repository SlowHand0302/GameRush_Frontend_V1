import clsx from 'clsx';

import styles from './Layout.module.scss';

import Header from './Header';
import Footer from './Footer';

function Layout(props) {
    const { children } = props;

    return (
        <>
            <Header />
            <div className="wrapper">{children}</div>
            <Footer />
        </>
    );
}

export default Layout;
