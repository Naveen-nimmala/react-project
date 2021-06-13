import "./home.css"
import Header from "../../header/Header"
import Post from "../../posts/Post"
import Posts from "./postData"


export default function Home() {
    return (
        <div className="home">
        <Header />
        <Post  posts={Posts}/>
        </div>
    )
}
