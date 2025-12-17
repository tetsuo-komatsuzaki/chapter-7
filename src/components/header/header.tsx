import classes from "./header.module.css"
import { Link } from "react-router-dom"


export default function Header() {
  return (
    <>
      <header className={classes.header}>
        <Link to="/" className={classes.article}>Blog</Link>
        <Link to="/inquiry" className={classes.article}>お問い合わせ</Link>
      </header>
    </>
  )
}