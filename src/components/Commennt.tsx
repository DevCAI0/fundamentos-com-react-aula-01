import { Trash } from '@phosphor-icons/react';
import { ThumbsUp } from '@phosphor-icons/react/dist/ssr';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeleteComment: (commet: string) => void;
}

export function Comment({ content, onDeleteComment }:CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((state) =>{
            return state + 1
        })


        
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://media.licdn.com/dms/image/D4D35AQGE49A1SggJEw/profile-framedphoto-shrink_400_400/0/1689325309606?e=1709769600&v=beta&t=7FArJWZLsnNPMF9PGTh-HE6pn2iWvFD-pBOrrrqEKWI" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Caio Pereira Ribeiro</strong>
                            <time title='06 de fevereiro' dateTime='2024-02-06'>cerca de 2h atras</time>
                        </div>
                        <button onClick={handleDeleteComment } title='Deletar Comentario'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>
                        {content}
                    </p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}

