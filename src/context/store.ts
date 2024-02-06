import create from 'zustand'
import { MainStateType } from '../../mgtypes/mainstore'
const useMainStore = create<MainStateType>()(
  //   devtools(
  //     persist(
  (set) => ({
    counter: 0,
    increase: (by) => set((state) => ({ counter: (state?.counter || 1) + by })),
  })
  //   {
  //     name: 'main-storage',
  //   },
  //     ),
  //   ),
)

export default useMainStore