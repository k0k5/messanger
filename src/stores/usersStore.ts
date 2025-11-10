import {create} from "zustand";

export type UserType = {
    id: string,
    name: string,
    isOnline: string,
    avatar: string
}

interface UsersStore {
    users: UserType[]
    addUser: (newUser: any) => void
}

export const useUser = create<UsersStore>((set)=>({

    users: [{id: '1b0b1dfa-911e-478f-b3cc-c2ed8a2e8776',//-------2
            name: 'User1',
            avatar: './src/assets/avatars/avatar1.jpg',
            isOnline: 'Online'},

            {id: '1a131e54-b761-494a-b993-6d5dfd470d4e',//--------
            name: 'User2',
            avatar: './src/assets/avatars/avatar2.jpg',
            isOnline: 'Last seen recently'},
            
            {id: 'e39d9899-8b8c-414d-958b-804cb918de7b',
            name: 'User3',
            avatar: './src/assets/avatars/avatar3.jpg',
            isOnline: 'Last seen recently'},
            
            {id: '615a91b8-fbb5-4e8d-b1c2-f27babb07579',
            name: 'User4',
            avatar: './src/assets/avatars/avatar4.jpg',
            isOnline: 'Online'},],

    addUser: (newUser)=> {
        set(
            state=> ({...state, users:[...state.users, newUser]})
        )
    }
}))