import  create  from 'zustand'

export interface MainStateType {
  counter: number
  increase: (by: number) => void
}

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