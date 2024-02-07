import useMainStore from "../context/store"
import { MainStateType } from "../mgtypes/mainstore"

function Button() {
    const mainStore: MainStateType = useMainStore()
    return (
        <button onClick={() => mainStore?.increase(1)}>Click {mainStore.counter ? mainStore.counter + " Times" : "ME"}</button>
    )
}

export default Button