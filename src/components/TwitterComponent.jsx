import TwitterFollow from './TwitterFollowCard'
import '../styles/twitterComponent.css'

const App = () => {

    const users = [
        {
            userName: 'harbygarcia8',
            name: 'Harby Garcia',
            isfollowing: true
        },
        {
            userName: 'freddier',
            name: 'Freddy Vega',
            isfollowing: false
        },
        {
            userName: 'midudev',
            name: 'Miguel Duran',
            isfollowing: false
        }
    ]

    return (
       <section>
        {
            users.map(({userName, name, isfollowing}) => {
                return (
                    <TwitterFollow
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isfollowing} 
                    >
                        {name}
                    </TwitterFollow>
                )
            })
        }
       </section>
    )
}

export default App;