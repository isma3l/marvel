import MarvelLogo from '@/assets/images/marvel-logo.svg';
import { logo } from './logo.module.scss';

type LogoProps = {
    onClick: () => void;
}

export const Logo = ({ onClick }: LogoProps) => {
    return (
        <span className={logo} onClick={onClick}>
            <img src={MarvelLogo} alt="Marvel Logo" />
        </span>
    );
}