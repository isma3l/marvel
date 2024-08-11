import * as styles from './spinner.module.scss';

export const Spinner = () => {
    return (
        <div className={styles.content}>
            <div className={styles.content__spinner} aria-label='loading' />
        </div>
    );
}

