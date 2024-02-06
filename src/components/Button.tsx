import { MainStateType } from "../../mgtypes/mainstore"
import useMainStore from "../context/store"

function Button() {
    const mainStore: MainStateType = useMainStore()
    return (
        <button onClick={() => mainStore?.increase(1)}>Click {mainStore.counter ? mainStore.counter + " Times" : "ME"}</button>
    )
}

export default Button