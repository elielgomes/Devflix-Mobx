import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLocalObservable, observer } from "mobx-react-lite";
import { Store } from "../../store";

const Details: React.FC = () => {

    const store = useLocalObservable(() => new Store());

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        store.actionGetMovie(`${id}`);
    },[])

    return(
        <>
        {store.movie &&
            <span>{store.movie.title}</span>
        }
        </>
    )
}

export default observer(Details);