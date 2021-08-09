import Link from "next/link";

export default function Post() {
    return (
        <div className="post" id="news">
            <h1>
                News<span>新着情報</span>
            </h1>
            <ul className="post-list">
                <li className="post-item">
                    <time className="post-time-stamp" dateTime="2020-11">
                        2020.11.11
                    </time>
                    <a
                        href="https://www.u-nagano.ac.jp/"
                        className="post-title"
                    >
                        高橋郷くんが、中村ゼミを辞めました。
                    </a>
                </li>
                <li className="post-item">
                    <time className="post-time-stamp" dateTime="2020-11">
                        2020.11.11
                    </time>
                    <a
                        href="https://www.u-nagano.ac.jp/"
                        className="post-title"
                    >
                        宮本優くんが、ゼミに遅刻してきました。
                    </a>
                </li>
            </ul>

            <style jsx>{`
                .post {
                    position: absolute;
                    top: 15%;
                    left: 10%;
                    z-index: 2;
                    text-align: center;
                    width: 80%;
                    background: #f4f5f7;
                    height: 600px;
                    margin: 80px auto 80px;
                    color: #333;
                }

                h1 {
                    font-size: 64px;
                    text-align: center;
                    color: #f1c40f;
                }

                span {
                    font-size: 24px;
                    padding-left: 3rem;
                }

                .post-item {
                    width: 80%;
                    display: flex;
                    margin: 0 auto;
                    border-bottom: 1px solid #afa7a4;
                    padding-bottom: 20px;
                    margin-bottom: 20px;
                }

                .post-time-stamp {
                    padding-left: 30px;
                    padding-right: 100px;
                    color: #afa7a4;
                    font-weight: bold;
                }

                .post-title {
                    color: #333;
                    text-decoration: none;
                }

                .post-title:hover {
                    text-decoration: underline;
                }

                // レスポンシブ

                @media (max-width: 480px) {
                    .post {
                        height: 400px;
                        margin: 0 auto;
                        position: relative;
                        top: 7%;
                        left: 0;
                        width: 90%;
                    }

                    h1 {
                        font-size: 32px;
                    }

                    span {
                        font-size: 0.5em;
                        padding-left: 1em;
                    }

                    .post-list {
                        padding: 0;
                    }

                    .post-item {
                        flex-direction: column;
                        text-align: left;
                    }

                    .post-time-stamp {
                        padding-left: 10px;
                        padding-right: 30px;
                        font-size: 8px;
                        display: block;
                    }

                    .post-title {
                        font-size: 8px;
                    }
                }

                @media (min-width: 481px) and (max-width: 768px) {
                }
            `}</style>
        </div>
    );
}