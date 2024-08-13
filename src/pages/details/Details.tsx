import { useParams } from "react-router-dom";
import { Spinner } from "@/components";
import { ComicList } from "./components/comicList";
import { HeroBanner } from './components/heroBanner';
import { useGetDetailsHero } from "@/hooks";
import { Status } from "@/types";
import * as styles from './details.module.scss';

const Details = () => {
    const { heroId } = useParams();
    const { hero, comics, status } = useGetDetailsHero(Number(heroId));
    
    if (status === Status.ERROR) return (<h1>Intentalo mas tarde. Ocurrió un error.</h1>);

    return (
        <section className={styles.details}>
            { status === Status.PENDING ?
                <Spinner />
                : (<>
                    <HeroBanner hero={hero} />
                    <ComicList comics={comics}/>
                    </>
                )                 
            }
        </section>
    );
}

export default Details;