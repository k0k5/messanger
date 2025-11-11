import './regPage.css'



export const RegPage = () =>{
return(
    <>
    <Back></Back>
    </>
)
}


const Back = () =>{

    return(
        <div className="main_window">
            <div className="registration"><p className="reg">Registration</p></div>
            <div className="add_avatar"><button className="add"><img src=".\src\assets\Plus circle.png" alt=""/></button></div>
            <div className="for_reg">
                <div className="name_for_input nfi1"><div className="name"><p className="n">Username</p></div><input className="input" type="text"/></div>
                <div className="name_for_input"><div className="name"><p className="n" >Password</p></div><input className="input" type="text"/></div>
                <div className="name_for_input nfi3"><div className="name"><p className="n">Password</p></div><input className="input" type="text"/></div>
            </div>
        <button className="register"><p className="reg_but">REGISTER</p></button>
        </div>
    )
}


        
        
    