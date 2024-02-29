import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale';

import styles from "./Post.module.css"
import { Comment } from "./Commennt"
import { Avatar } from "./Avatar"

import { ChangeEvent, FormEvent, InvalidEvent, useState, } from 'react'

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}



interface PostProps {
    author: Author;
    publishedAt: Date;
    content: Array<{ type: 'paragraph'; content: string } | { type: 'Link'; text: string; url: string }>;
}






export function Post({ author, publishedAt, content }: PostProps) {
    const [comments, setComments] = useState([
        'post muito bacana'

    ])
    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, " d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativetoNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });


    function handleCreateNewComenment(event: FormEvent) {
        event.preventDefault();

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }
    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }
    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatorio')

    }

    function deleteComment(commentToDelete: string) {
        const commentWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })
        setComments(commentWithoutDeletedOne);
    }
    const isNewCommentEmpty = newCommentText.length === 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        hasBorder
                        src={author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativetoNow}
                </time>
            </header>

            {content.map((line) => {
                if (line && line.type === 'paragraph') {
                    return <p key={line.content}>{line.content}</p>;
                } else if (line && line.type === 'Link' && line.text) {
                    return <p key={line.text}><a href={line.url}>{line.text}</a></p>;
                }
                return null;
            })}





            <form onSubmit={handleCreateNewComenment} className={styles.comentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    name="comment"
                    placeholder="Deixe o seu comentario..."
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>

                    <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map((comment,) => {
                    return (
                        <Comment
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />)
                })}
            </div>

        </article>
    )


}



