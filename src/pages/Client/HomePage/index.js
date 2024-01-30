import clsx from 'clsx';

import styles from './HomePage.module.scss';

import Banner from './Banner';
function HomePage(props) {
    return (
        <div className="bg-gray-100 w-screen">
            <Banner />
        </div>
    );
}

export default HomePage;
