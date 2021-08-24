import Link from "next/link";

import styles from "./styles.module.scss";

export function Presenter(props) {
    const { allPostsData } = props;

    return (
        <>
            {allPostsData.map((postData) => {
                return (
                    <li className={styles.post_item} key={postData.id}>
                        <time className={styles.post_time_stamp}>
                            {postData.date}
                        </time>
                        <Link href={`/posts/${postData.id}`}>
                            <a className={styles.post_title}>
                                {postData.title}
                            </a>
                        </Link>
                    </li>
                );
            })}
        </>
    );
}
