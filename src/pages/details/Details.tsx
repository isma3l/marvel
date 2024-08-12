import { useParams } from "react-router-dom";
import { HeroBanner, Spinner } from "@/components";
import { useGetDetailsHero } from "@/hooks";

const Details = () => {
    const { heroId } = useParams();
    const id = Number(heroId);
    const { hero, comics, isLoading } = useGetDetailsHero(id);
    
    return (
        <section>
            { isLoading 
                ? <Spinner />
                : <HeroBanner hero={hero} />
            }
        </section>
    );
}

export default Details;