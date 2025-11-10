import {create} from "zustand";

export type DialogType = {
    id: string,
    userId: string,
    lastMess?: string,
    lastMessId?: string
}

interface DialogsStore {
    dialogs: DialogType[]
    addDialog: (newDialoge:any) => void
}

export const useDialog = create<DialogsStore>((set)=> ({
    dialogs: [  {id: 'c139f80d-3d09-4291-a9d9-a6e92628bc39',//---------2
                userId: "1b0b1dfa-911e-478f-b3cc-c2ed8a2e8776", ///u1
                lastMess: 'text',
                lastMessId:'2eb6c069-1bc4-4e98-9bf9-2dbb28beb075'},
                
                {id: '390da09a-8820-40be-ae1d-88024eed54c0',//---------
                userId: "1a131e54-b761-494a-b993-6d5dfd470d4e", //u2
                lastMess: 'text',
                lastMessId:'9b90359e-02bb-40a0-acc9-2496fb2f05b2'},
                
                {id: '02d3d7a4-798a-40f2-892b-5ac33b2691f5',
                userId: "e39d9899-8b8c-414d-958b-804cb918de7b", //u3
                lastMess: 'text',
                lastMessId:'eeba751e-5014-4492-a146-8b106a6d6f36'},
                
                {id: '0ba46ee7-ea7c-4a27-8416-d7685e19e7ed',//---------
                userId: "615a91b8-fbb5-4e8d-b1c2-f27babb07579", //u4
                lastMess: 'text',
                lastMessId:'e2e8940d-c1d0-424a-8d1b-d46b8ccbbafd'},],
                
    addDialog:(newDialog)=> {
        set(
            state=>({...state, dialogs:[...state.dialogs, newDialog]})
        )}
}))
