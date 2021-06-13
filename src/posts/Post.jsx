import "./post.css"

var date = new Date();
var n = date.toDateString();
var time = date.toLocaleTimeString();
var dateTime = n + " " + time


export default function Post(props) {
        console.log(props.posts)

        const content = props.posts.map((post) =>
              <div key={post.id}>
                <h1 className="home-title"><a  href={'/post/' + post.id} > {post.title}</a></h1>
                <p className="date-time">{dateTime}</p> 
                <p className="home-content">{post.content}</p>
                <hr />
              </div>
            );
        return (
            <div className="home-data">
              {content}
            </div>
        )
}
