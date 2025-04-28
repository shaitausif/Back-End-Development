const express = require('express')
const app = express()
// for pushing the application in the production we use dotenv package
require('dotenv').config()

const githubData = {
    "login": "shaitausif",
    "id": 141828254,
    "node_id": "U_kgDOCHQgng",
    "avatar_url": "https://avatars.githubusercontent.com/u/141828254?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/shaitausif",
    "html_url": "https://github.com/shaitausif",
    "followers_url": "https://api.github.com/users/shaitausif/followers",
    "following_url": "https://api.github.com/users/shaitausif/following{/other_user}",
    "gists_url": "https://api.github.com/users/shaitausif/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/shaitausif/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/shaitausif/subscriptions",
    "organizations_url": "https://api.github.com/users/shaitausif/orgs",
    "repos_url": "https://api.github.com/users/shaitausif/repos",
    "events_url": "https://api.github.com/users/shaitausif/events{/privacy}",
    "received_events_url": "https://api.github.com/users/shaitausif/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Tausif Shaikh",
    "company": null,
    "blog": "https://spotifycloneproject089.freewebhostmost.com/",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "👋 Hi, I’m a MERN stack developer passionate about backend logic, full-stack apps, and Next.js!\r\n👨‍🎓 BSc.IT Student | 🚧 Actively learning and building.\r\n🛠️ ",
    "twitter_username": null,
    "public_repos": 14,
    "public_gists": 0,
    "followers": 1,
    "following": 4,
    "created_at": "2023-08-09T10:37:31Z",
    "updated_at": "2025-04-21T07:33:04Z"
    }


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req, res) => {
    res.send('shaikhtausif')
})

app.get('/login',(req, res) => {
    res.send("<h1>Login with your Email-ID</h1>")
})

app.get('/youtube',(req, res) => {
    res.send('<h2>Chai aur code</h2>')
})

// https://expressjs.com/en/4x/api.html#res.json
app.get('/github',(req, res) => {
    res.json(githubData)
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
