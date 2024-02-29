import "./styles.css"
import { Header } from "./components/Header"
import styles from "./App.module.css"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

// author: {avatar_url:"", name:"" ,role:""}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://media.licdn.com/dms/image/D4D35AQGE49A1SggJEw/profile-framedphoto-shrink_400_400/0/1689325309606?e=1709769600&v=beta&t=7FArJWZLsnNPMF9PGTh-HE6pn2iWvFD-pBOrrrqEKWI",
      name: "Caio Pereira Ribeiro",
      role: "Web Develope"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'Link', text: '👉 jane.design/doctorcare', url: '#' },
    ],

    publishedAt: new Date('2024-02-20T16:02:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://media.licdn.com/dms/image/D4D03AQGGhkw_6vsqww/profile-displayphoto-shrink_400_400/0/1675271126838?e=1714003200&v=beta&t=oNAJuXBsMez8kv_b7JH2mp7mO4W4uxQDYF92JukqCHs",
      name: "Giulia Bordignon",
      role: "Desenvolvedora Backend Sênior"
    },
    content: [
      { type: 'paragraph', content: 'Antes de colocar a mão no código, garantir a funcionalidade da API através de uma ferramenta, economiza tempo e evitar dores de cabeça porque tu já fica com todo consumo da API claro, antes de codar.' },
      { type: 'paragraph', content: 'O Insomnia permite testar endpoints facilmente, com suporte a múltiplos formatos como JSON e XML, além de configurar headers, queries e payloads. O gerador de código é meu favorito: após o sucesso da sua requisição, gere o código para a sua linguagem em um clique.' },
      { type: 'Link', text: '👉 www.linkedin.com/in/spacecoding/', url: 'inkedin.com/in/spacecoding/' },
    ],
    publishedAt: new Date('2024-01-20T16:05:00')
  },
];


export const App = () => {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}

        </main>
      </div>
    </div>
  )
}
