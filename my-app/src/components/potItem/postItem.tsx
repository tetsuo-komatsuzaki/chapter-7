import classes from "./postItem.module.css"
import { Link } from "react-router-dom";

type Post = {
  id: number
  title: string
  thumbnailUrl: string
  createdAt: string
  categories: string[]
  content: string
}

type PostItemProps = {
  post : Post
}

export default function PostItem({ post }: PostItemProps) {

  const date = new Date(post.createdAt);
  const maxLength = 50;
  const contentReview =
    post.content.length > maxLength
      ? post.content.substring(0, maxLength) + "..."
      : post.content;;

  return (
    <>



      <Link to={`/posts/${post.id}`} className={classes.linkwap}>
        <div className={classes.article}>
          <div className={classes.meta}>
            <span>{date.toLocaleDateString()}</span>
            <span>
              {post.categories.map((text, index) => {
                return (
                  <span className="categories" key={index}>{text}</span>
                )
              })}
            </span>

          </div>
          <h1>{post.title}</h1>
          <p dangerouslySetInnerHTML={{ __html: contentReview }}></p>
        </div>
      </Link>
    </>

  )

}