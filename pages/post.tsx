import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

interface PostProps {
  postName: string;
}

const Post = ({ postName }: PostProps) => {
  return <div className={styles.container}>Post: {postName || 2}</div>;
};

export default Post;
