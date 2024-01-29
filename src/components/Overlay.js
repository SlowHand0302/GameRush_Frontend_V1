import clsx from 'clsx';

import styles from './Overlay.module.scss';

function Overlay({ children, onClick }) {
    return <div className={clsx(styles.overlay)} onClick={onClick}>{children}</div>;
}

export default Overlay;
