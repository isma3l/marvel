import { useParams } from "react-router-dom";
import { ComicList, HeroBanner, Spinner } from "@/components";
import { useGetDetailsHero } from "@/hooks";
import * as styles from './details.module.scss';

const Details = () => {
    const { heroId } = useParams();
    const { hero, comics, isLoading } = useGetDetailsHero(Number(heroId));
    
    return (
        <section className={styles.details}>
            { isLoading 
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