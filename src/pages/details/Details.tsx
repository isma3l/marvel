import { useParams } from "react-router-dom";
import { ComicList, HeroBanner, Spinner } from "@/components";
import { useGetDetailsHero } from "@/hooks";
import { Status } from "@/types";
import * as styles from './details.module.scss';

const Details = () => {
    const { heroId } = useParams();
    const { hero, comics, status } = useGetDetailsHero(Number(heroId));
    
    if (status === Status.ERROR) return (<h1>Intentalo mas tarde. Ocurrió un error.</h1>);

    return (
        <section className={styles.details}>
            { status === Status.PENDING 
                ? <Spinner />
                :<>
                    <HeroBanner hero={hero} />
                    <ComicList comics={comics}/>
                </>                 
            }
        </section>
    );
}

export default Details;