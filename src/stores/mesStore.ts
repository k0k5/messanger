import {create} from "zustand";

export type MessageType = {
    id: string,
    text: string,
    dialogsId: string,
    senderId: string,
    sendTime: string,
    date: string
}

interface MessagesStore {
    messages: MessageType[]
    addMessage: (newMessage: any) => void
}

export const useMessage = create<MessagesStore>((set)=> ({
        messages: [{id: "2eb6c069-1bc4-4e98-9bf9-2dbb28beb075", 
                    text: "ibsoiipofghfghfh  rty oihop dfs s", date: "10.8.1990",
                    sendTime:'12:40',
                    senderId: "1b0b1dfa-911e-478f-b3cc-c2ed8a2e8776", //59
                    dialogsId:"c139f80d-3d09-4291-a9d9-a6e92628bc39"}, //36
                  
                    {id: "e2e8940d-c1d0-424a-8d1b-d46b8ccbbafd",
                    text: "ghfdhddjdgd", date: "10.8.1990",
                    sendTime:'12:40',
                    senderId: "615a91b8-fbb5-4e8d-b1c2-f27babb07579",//54
                    dialogsId:"0ba46ee7-ea7c-4a27-8416-d7685e19e7ed"},//36
                        
                    {id: "eeba751e-5014-4492-a146-8b106a6d6f36",
                    text: "ertyertyerbybe", date: "10.8.1990",
                    sendTime:'12:11',
                    senderId: "e39d9899-8b8c-414d-958b-804cb918de7b", //64
                    dialogsId:"02d3d7a4-798a-40f2-892b-5ac33b2691f5"},//44
                    
                    {id: "9b90359e-02bb-40a0-acc9-2496fb2f05b2",
                    text: "3467n3h457yurytey", date: "10.8.1990",
                    sendTime:'11:01',
                    senderId: "1a131e54-b761-494a-b993-6d5dfd470d4e",//69
                    dialogsId:"390da09a-8820-40be-ae1d-88024eed54c0"}, //40

                    {id: "9b90359e-02bb-40a0-acc9-2496fb2f05b2",
                    text: "dsgverbhw44444", date: "10.8.1990",
                    sendTime:'12:59',
                    senderId: "e39d9899-8b8c-414d-958b-804cb918de7b", //64
                    dialogsId:"c139f80d-3d09-4291-a9d9-a6e92628bc39"},

                    {id: "e2e8940d-c1d0-424a-8d1b-d46b8ccbbafd",
                    text: "eeeeee", date: "10.8.1990",
                    sendTime:'12:42',
                    senderId: "e39d9899-8b8c-414d-958b-804cb918de7b", //64
                    dialogsId:"02d3d7a4-798a-40f2-892b-5ac33b2691f5"},

                    {id: "eeba751e-5014-4492-a146-8b106a6d6f36",
                    text: "qnyhtgdfht", date: "10.8.1990",
                    sendTime:'13:00',
                    senderId: "e39d9899-8b8c-414d-958b-804cb918de7b", //64
                    dialogsId:"c139f80d-3d09-4291-a9d9-a6e92628bc39"},

                    {id: "eeba751e-5014-4492-a146-8b106a6d6f36",
                    text: "erg fderg  er ", date: "10.8.1990",
                    sendTime:'12:11',
                    senderId: "e39d9899-8b8c-414d-958b-804cb918de7b", //64
                    dialogsId:"390da09a-8820-40be-ae1d-88024eed54c0"},


                    {id: "eeba751e-5014-4492-a146-8b106a6d6f36",
                    text: "ertyertyerbybe", date: "10.8.1990",
                    sendTime:'12:11',
                    senderId: "e39d9899-8b8c-414d-958b-804cb918de7b", //64
                    dialogsId:"390da09a-8820-40be-ae1d-88024eed54c0"}],
                    
        addMessage:(newMessage)=> {
            set(
                state=>({...state, messages:[...state.messages, newMessage]})
            )}
}))
