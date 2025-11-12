import styles from './profilPage.module.css'

export const ProfilPage = () =>{
return(
    <>
    <Nav></Nav>
    <MainWin></MainWin>
    </>
)
}

const Nav = () =>{


    return(
        <div className={styles.nav}>
            <button className={`${styles.button} ${styles.avatar}`}><img className={styles.avatar} src= ".\src\assets\avatars\main.jpg" alt="a"  onClick={()=>{navigate('/profil')}}/></button>
            <div className={styles.menu}>
                <div className={styles.menu_el}><button className={styles.menu_img}><img src='./src/assets/Icon(3).png' alt=""/></button></div>
                <div className={styles.menu_el}><button className={styles.menu_img}><img src="./src/assets/Icon (1).png" alt="" /></button></div>
                <div className={styles.menu_el}><button className={styles.menu_img}><img src="./src/assets/Icon (2).png" alt="" /></button></div>
                <div className={`${styles.menu_el} ${styles.settings}`} ><button className={styles.menu_img}><img src="./src/assets/Tool.png" alt="" /></button></div>
            </div>
        </div>
      )
}


const MainWin = ()=>{

    return(
        <div className={styles.settWindow}>
        <div className={styles.mini_settWin}>
            <div className={styles.change_av}>
                <div className={styles.main_avatar}></div>
                <button className={styles.change_avatar}><img className={styles.chAv} src="some/Image.png" alt=""/></button>
            </div>

            <button className={styles.change_pass}>
                <div className={styles.butt}>
                    <p>Change password</p>
                    <img className={styles.refresh} src="some/Refresh cw.png" alt=""/> 
                </div>
                
            </button>

            <div className={styles.log_out}>
                <button className={styles.out}>
                    <img className={styles.out_but} src="some/X circle.png" alt=""/>
                    <p>Log out</p>
                </button>
                
            </div>
        </div>    
    </div>)
}