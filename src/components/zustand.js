import { create } from 'zustand'

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  decreasePopulation: () => set((state) => ({ bears : state.bears - 1})),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}))


function ZustandStore() {

    function BearCounter() {
        const bears = useStore((state) => state.bears)
        return <h1>{bears} bears around here...</h1>
    }
      
    function Controls() {
        const increasePopulation = useStore((state) => state.increasePopulation)
        const decreasePopulation = useStore((state) => state.decreasePopulation)
        return (
            <div>
                <button onClick={increasePopulation}>one up</button>
                <button onClick={decreasePopulation}>Level Down</button>
            </div>
        )
    }

    return (
        <div>
            <BearCounter />
            <Controls />
        </div>
    )
      
}

export default ZustandStore;