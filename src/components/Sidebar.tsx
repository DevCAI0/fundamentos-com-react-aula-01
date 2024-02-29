import { Avatar } from "./Avatar"
import styles from "./Sidebar.module.css"
import { PencilLine } from '@phosphor-icons/react'

export function Sidebar() {
    return (
        <aside className={styles.Sidebar}>
               <img 
                    className={styles.cover}
                    src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                />

               <div className={styles.profile}>
                        <Avatar hasBorder src="https://media.licdn.com/dms/image/D4D35AQGE49A1SggJEw/profile-framedphoto-shrink_400_400/0/1689325309606?e=1709769600&v=beta&t=7FArJWZLsnNPMF9PGTh-HE6pn2iWvFD-pBOrrrqEKWI"/>
                    <strong>Caio Pereira Ribeiro</strong>
                    <span>Web Developer</span>
                        <footer>
                            <a href="#">
                                <PencilLine size={20}/>
                                Editar seu Perfil
                            </a>
                        </footer>
               </div>
        </aside>
        )
}