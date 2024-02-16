import {FC} from "react";

import {ICar} from "../../interfases/carInterface";
import {ISetState} from "../../types/setStateType";
import {carService} from "../../services/carService";
interface IProps{
    car:ICar
    setCarForUpdate:ISetState<ICar>,
    changeTrigger:()=>void
}
const Car: FC<IProps> = ({car, setCarForUpdate,changeTrigger}) => {

    const {id, year, price, brand} = car;
     const deleteById =async ()=>{
         await carService.deleteById(id)
         changeTrigger()

     }
    return (
        <div>
             <div>id:{id}</div>
             <div>year:{year}</div>
             <div>price:{price}</div>
             <div>brand:{brand}</div>
            <button onClick={()=>setCarForUpdate(car)}>update</button>
            <button onClick={deleteById}>delete</button>
        </div>
    );
};

export {Car};