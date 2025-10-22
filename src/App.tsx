import { useState } from 'react'
import './App.css'

const messages = [{id: "2eb6c069-1bc4-4e98-9bf9-2dbb28beb075", 
                   text: "text1", date: "10.8.1990",
                   sendTime:'12:40',
                   senderId: "1b0b1dfa-911e-478f-b3cc-c2ed8a2e8776", //59
                   dialogsId:"c139f80d-3d09-4291-a9d9-a6e92628bc39"}, //36
                  
                  {id: "e2e8940d-c1d0-424a-8d1b-d46b8ccbbafd",
                   text: "text2", date: "10.8.1990",
                   sendTime:'12:41',
                   senderId: "1a131e54-b761-494a-b993-6d5dfd470d4e",//54
                   dialogsId:"c139f80d-3d09-4291-a9d9-a6e92628bc39"},//36
                  
                  {id: "eeba751e-5014-4492-a146-8b106a6d6f36",
                   text: "text3", date: "10.8.1990",
                   sendTime:'12:11',
                   senderId: "e39d9899-8b8c-414d-958b-804cb918de7b", //64
                   dialogsId:"02d3d7a4-798a-40f2-892b-5ac33b2691f5"},//44
                  
                  {id: "9b90359e-02bb-40a0-acc9-2496fb2f05b2",
                   text: "text4", date: "10.8.1990",
                   sendTime:'11:01',
                   senderId: "615a91b8-fbb5-4e8d-b1c2-f27babb07579",//69
                   dialogsId:"390da09a-8820-40be-ae1d-88024eed54c0"}, //40
                  
                  ];

const dialogs = [{id: 'c139f80d-3d09-4291-a9d9-a6e92628bc39',//---------2
                  userId: "1b0b1dfa-911e-478f-b3cc-c2ed8a2e8776", ///u1
                  },
                  
                 {id: '390da09a-8820-40be-ae1d-88024eed54c0',//---------
                   userId: "1a131e54-b761-494a-b993-6d5dfd470d4e", //u2
                   lastMess: 'text',},
                    
                 {id: '02d3d7a4-798a-40f2-892b-5ac33b2691f5',
                   userId: "e39d9899-8b8c-414d-958b-804cb918de7b", //u3
                   lastMess: 'text',},
                    
                 {id: '0ba46ee7-ea7c-4a27-8416-d7685e19e7ed',//---------
                   userId: "615a91b8-fbb5-4e8d-b1c2-f27babb07579", //u4
                   lastMess: 'text',},
                   
                  
                ]

const users = [{id: '1b0b1dfa-911e-478f-b3cc-c2ed8a2e8776',//-------2
               name: 'User1',
               avatar: './assets/avatar2.jpg',
               isOnline: 'Online'},

              {id: '1a131e54-b761-494a-b993-6d5dfd470d4e',//--------
               name: 'User2',
               avatar: './assets/avatars/avatar2.jpg',
               isOnline: 'Last seen recently'},
              
              {id: 'e39d9899-8b8c-414d-958b-804cb918de7b',
               name: 'User3',
               avatar: './assets/avatars/avatar3.jpg',
               isOnline: 'Last seen recently'},
              
              {id: '615a91b8-fbb5-4e8d-b1c2-f27babb07579',
               name: 'User4',
               avatar: './assets/avatars/avatar4.jpg',
               isOnline: 'Online'},
              ]



function App() {
  return (
    <>
      <Nav></Nav>

      <Dialogs></Dialogs>

      <Main_D></Main_D>
    
    </>
  )

}

const Nav = () =>{
  return(
    <div className="nav">
        <button className="avatar"></button>
        <div className="menu">
            <div className="menu_el"><button className="menu_img"><img src='\assets\Icon(3).png' alt=""/></button></div>
            <div className="menu_el"><button className="menu_img"><img src="\icons\assets\Icon (1).png" alt="" /></button></div>
            <div className="menu_el"><button className="menu_img"><img src="\assets\Icon (2).png" alt="" /></button></div>
            <div className="menu_el settings" ><button className='menu_img'><img src="\assets\Tool.png" alt="" /></button></div>
        </div>
    </div>

  )
}

const Dialogs = () =>{
  return(
    <div className="dialogs">
          <div className="chats">
            {messages.map(el => <Chat key={el.id}
                                      userId={el.senderId}
                                      id={el.id}
                                      text={el.id}
                                />)}
           
          </div>
    </div>
  )
}

type ChatProps = {
  id: string,
  userId: string,
  text: string,
}

type ProfilProps = {
  id: string,
  name: string,
  isOnline: string,
}

const Chat = (props: ChatProps)=>{
  const user = users.find(el=>el.id === props.userId)
  const message = messages.find(el=>el.id === props.text)
  console.log('ava', user?.avatar)

  return(
    <div className="chat">
      <div className="chat_with_user name ">
        <div className="users_avatar" style={{backgroundImage: `url(${user?.avatar})`}}></div>
          <div className="content">
              <p className='table_cont'>{user?.name}</p>
              <p className='text'>{message?.text}</p>
          </div>
      </div>
    </div>
)}


const Main_D = () =>{
  return(
    <div className="main_dialog">
      {users.map(el => <User_prof 
                          key={el.id}
                          id={el.id}
                          name={el.name}
                          isOnline={el.isOnline}/>)}
        
        <Bubbles></Bubbles>
        <Send_message></Send_message>
    </div>
)}

const User_prof = (props: ProfilProps)=>{
const userProf = users.find(el=>el.id === props.id)
console.log(userProf)

  return(
    <div className="user_profil">
          <div className="user_avatar" style={{backgroundImage: `url(${userProf?.avatar})`}}></div>
            <div className="text_at_profil">
              <div className="us_name">{userProf?.name}</div>
              <div className="online">{userProf?.isOnline}</div>
            </div>
          </div>
  )
}

const Bubbles = ()=>{
  return(
      <div className="bubels">

            <div className="bubels1">
                  <div className="in_Bubble">
                    <p className="bubble1_text">ibsoiipofghfghfh  rty oihop dfs s</p>
                    <p className="time time_in">12:40</p>
                  </div>
            </div>

            <div className="bubels2">
                  <div className="out_Bubble">
                    <p className="bubble1_text">ghfdhddjdgd</p>
                    <p className="time time_out">12:41</p>
                  </div>
            </div>

          </div>
  )
}

const Send_message =()=>{
  return(
    <div className="send_message">
            <div className="input">
              <button className="emoji"><img src="" alt="" /></button>
              <input type="text" className='mes_input' placeholder='Message'/>
              <button className="add_files"><img src="" alt="" /></button>
            </div>
            <div className="audio_mes"><button className="mic"><img src="" alt="" /></button></div>
          </div>
  )
}
export default App;
