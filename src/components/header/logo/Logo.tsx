import { Link } from 'react-router-dom';
import MarvelLogo from '@/assets/images/marvel-logo.svg';
import { logo } from './logo.module.scss';

export const Logo = () => {
    return (
        <Link to="/" >
            <span className={logo}>
                <img src={MarvelLogo} alt="Marvel Logo" />
            </span>
        </Link>
    );
}