import {useEffect, useState} from "react";
import {ICar} from "../../interfases/carInterface";
import {carService} from "../../services/carService";

const Cars = () => {
    const [cars, setCars] = useState<ICar[]>([])

    useEffect(() => {
        carService.getAll().then(({data})=>setCars(data))
    }, []);
    return (
        <div>

        </div>
    );
};

export {Cars};