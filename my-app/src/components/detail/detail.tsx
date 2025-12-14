import { useParams } from "react-router-dom";
import classes from "./detail.module.css";
import { posts_URL } from "../../data/posts";
import { useState, useEffect } from "react";

type Post = {
    id: number
  title: string
  thumbnailUrl: string
  createdAt: string
  categories: string[]
  content: string
}

export default function Detail() {
  const { id } = useParams<{id:string}>();
  const [postsDetail, setPostDetail] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(false)

  type PostResponse = {
    post : Post
  }

  useEffect(() => {
    const fetcher = async () => {
      setLoading(true)
      const res = await fetch(`${posts_URL}/posts/${id}`)
      const data:PostResponse = await res.json()
      setPostDetail(data.post)
      setLoading(false)
    };
    fetcher()
  }, [id]);
  if (loading) {
    return <div>読み込み中...</div>
  }

  if (!postsDetail) {
    return <div>記事が見つかりません</div>
  }



  return (
    <>
      <div>
        <img src={postsDetail.thumbnailUrl} alt="" className={classes.thumbnail} />
      </div>
      <div className={classes.article}>
        <div className={classes.meta}>
          <span>{new Date(postsDetail.createdAt).toLocaleDateString()}</span>
          <span>
            {postsDetail.categories.map((text, index) => {
              return (
                <span className="categories" key={index}>{text}</span>
              )
            })}
          </span>
        </div>
        <h1>{`APIで取得した${postsDetail.title}`}</h1>
        <div dangerouslySetInnerHTML={{ __html: postsDetail.content }}></div>
      </div>
    </>
  )
}
