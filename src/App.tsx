import { useMessage, type MessageType } from './stores/mesStore'
import { useDialog, type DialogType } from './stores/dialogsStore'
import { useUser, mainUser, type UserType} from './stores/usersStore'
import { createContext, useContext, useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { useShallow } from 'zustand/shallow'
import { RegPage } from './pages/regPage'


type ChatProps = {
  id: string,
  userId: string,
  lastMess?: string,
  lastMessId?:string,
}

type ProfilType = {
  id: string,
  name?: string,
  isOnline?: string,
}

interface AppContextType{
  profil: ProfilType;
  chat?:ChatProps;
  userId: string;
  currentChatId: string;
  setCurrentChatId:React.Dispatch<React.SetStateAction<string>>,
  setUserId?: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<AppContextType>({
    profil: {
      id: '1b0b1dfa-911e-478f-b3cc-c2ed8a2e8776',
      name: 'User1',
      isOnline: 'Online'
    },

    userId: '1b0b1dfa-911e-478f-b3cc-c2ed8a2e8776',
    currentChatId:'c139f80d-3d09-4291-a9d9-a6e92628bc39',
    setCurrentChatId:()=>{},
});

export const ChatPage = () => {
  return (
    <>
      <Nav></Nav>
      <Dialogs></Dialogs>    
      <Main_D></Main_D>
    </>
  )
}

function App() {
  const [userId, setUserId] = useState(""); //1b0b1dfa-911e-478f-b3cc-c2ed8a2e8776
  const [currentChatId,setCurrentChatId] = useState('') //c139f80d-3d09-4291-a9d9-a6e92628bc39

  return (
    <>
    <BrowserRouter>
      <AppContext.Provider value={{
        userId: userId,
        profil: {
          id: '1b0b1dfa-911e-478f-b3cc-c2ed8a2e8776',
          name: 'User1',
          isOnline: 'Online'
        },
        currentChatId:currentChatId,
        setUserId:setUserId,
        setCurrentChatId:setCurrentChatId,
      }}>
          <Routes>
            <Route path='/chat' element={<ChatPage/>}/>
            <Route path='/registration' element={<RegPage/>}/>
          </Routes>      
        </AppContext.Provider>
      </BrowserRouter>
    </>
  )

}

const Nav = () =>{

  return(
    <div className="nav">
        <button className='button avatar'><img className="avatar" src= {mainUser.avatar} alt="a" /></button>
        <div className="menu">
            <div className="menu_el"><button className="menu_img"><img src='./src/assets/Icon(3).png' alt=""/></button></div>
            <div className="menu_el"><button className="menu_img"><img src="./src/assets/Icon (1).png" alt="" /></button></div>
            <div className="menu_el"><button className="menu_img"><img src="./src/assets/Icon (2).png" alt="" /></button></div>
            <div className="menu_el settings" ><button className='menu_img'><img src="./src/assets/Tool.png" alt="" /></button></div>
        </div>
    </div>

  )
}

const Dialogs = () =>{
  const {dialogs} = useDialog()

  return(
    <div className="dialogs">
        <div className="chats">
            {dialogs.map(el => <Chat key={el.id}
                                      userId={el.userId}
                                      id={el.id}
                                      lastMess={el.lastMess}
                                      lastMessId={el.lastMessId}
            />)}
        </div>
    </div>
  )
}


const Chat = (props: ChatProps)=>{
  const {users} = useUser()
  const {messages}= useMessage()
  const user = users.find(el=>el.id === props.userId)
  const {currentChatId, setCurrentChatId} = useContext(AppContext)
  const message = messages.find(el=>el.id === props.lastMessId)
  console.log('ava', user?.avatar, `url(${user?.avatar})`)

  const isSelected = currentChatId == props.id
  console.log(currentChatId, props.id, isSelected)
  
  return(
    <div className="chat" style={{background: isSelected? "linear-gradient(to right, #2B4039, #2B4039AB)" : "linear-gradient(to right, #2B4039, #2B403900)"}} onClick={()=>setCurrentChatId(message?.dialogsId || '')}>
      <div className="chat_with_user name ">
        <img className="users_avatar" src= {user?.avatar} alt="" />
          <div className="content">
              <p className='table_cont'>{user?.name}</p>
              <p className='text'>{message?.text}</p>
          </div>
      </div>
    </div>
)}

const Main_D = () =>{
  const { currentChatId} = useContext(AppContext)


  return(
    <div className="main_dialog">
        <User_prof id={currentChatId}/>
        <Bubbles></Bubbles>
        <Send_message></Send_message>
    </div>
  
)}

const User_prof = (props: ProfilType)=>{
  const {users} = useUser()
  const {dialogs} = useDialog()
  const {currentChatId} = useContext(AppContext)
  const chat = dialogs.find(el=>el.id === currentChatId)
  const userProf = users.find(el=>el.id === chat?.userId)

  return(
    <div className="user_profil">
      <img className="user_avatar" src={userProf?.avatar} alt="" />
        <div className="text_at_profil">
          <div className="us_name">{userProf?.name}</div>
          <div className="online">{userProf?.isOnline}</div>
        </div>
    </div>
  )
}

const Bubbles = ()=>{
  const {messages}= useMessage()
  const {currentChatId} = useContext(AppContext)
  const curChatMess = messages.filter(el=> el.dialogsId === currentChatId)


  return(
    <div className = "bubels">
            {curChatMess.map(el => <div className = { mainUser.id === el.senderId ?  "bubels2" : "bubels1"}>
              <div className = { mainUser.id === el.senderId ? "out_Bubble": "in_Bubble"}>
                  <p className = "bubble1_text">
                      {el.text}
                  </p>

                  <p className="time time_in">{el.sendTime}</p>
              </div>
            </div>)}
    </div>
  



)
}

const Send_message =()=>{
 const { addMessage}= useMessage()
 const {currentChatId} = useContext(AppContext)
const [message, setMessage] = useState('')
  
  return(
    <div className="send_message">
        <div className="input">
            <button className="emoji"><img src='./src/assets/Smile.png' alt="a" /></button>
            <input onChange={e=>setMessage(e.target.value)} type="text" className='mes_input' placeholder='Message' value={message}/>
            <button className="add_files"><img src="./src/assets/Paperclip.png" alt="" /></button>
        </div>
        <div className="audio_mes">
          <button onClick={e=>{
            addMessage({id:'trr54by5stry', dialogsId:currentChatId, senderId:mainUser.id, text:message})
            setMessage("")}}
            className="mic"><img className='send_but' src="./src/assets/Send.png" alt="" /></button></div>
    
    </div>
  )
}
export default App;
