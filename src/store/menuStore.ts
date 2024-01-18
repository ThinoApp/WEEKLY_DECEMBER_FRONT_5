import {create} from "zustand";


interface IActiveMenu {
    id: number;
    value: string;
}

interface IMenuStore {
    activeMenu: IActiveMenu;
    setActiveMenu: (value: IActiveMenu) => void;
} 

const useMenuStore = create<IMenuStore>()((set) => ({
    activeMenu: {
        id: 0,
        value: "Productivity"
    },
    setActiveMenu: (value: IActiveMenu) => {
        set((state) => ({
            ...state,
            activeMenu: value
        }))
    }
}))

export default useMenuStore;