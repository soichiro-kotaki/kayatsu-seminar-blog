import React from "react";
import Modal from "react-modal";
import Link from "next/link";

// スタイリング
import styles from "./styles.module.scss";

// モーダル開閉用のルートDOMを取得
Modal.setAppElement("#__next");

type Props = {
    isMenuModalVisible: boolean;
    handleCloseMenuModal: () => void;
};

export const Presenter: React.FC<Props> = (props) => {
    const { isMenuModalVisible, handleCloseMenuModal } = props;

    return (
        <Modal
            isOpen={isMenuModalVisible}
            onRequestClose={handleCloseMenuModal}
            overlayClassName={{
                base: styles.overlay_base,
                afterOpen: styles.overlay_after,
                beforeClose: styles.overlay_before,
            }}
            className={{
                base: styles.content_base,
                afterOpen: styles.content_after,
                beforeClose: styles.content_before,
            }}
            closeTimeoutMS={500}
        >
            <ul className={styles.nav}>
                <li className={styles.title}>Menu</li>
                <li className={styles.link}>
                    <Link href="/">
                        <span className={styles.subtitle}>Home</span>
                    </Link>
                </li>
                <li className={styles.link}>
                    <Link href="/postList">
                        <span className={styles.subtitle}>News</span>
                    </Link>
                </li>
                <li className={styles.link}>
                    <Link href="/about">
                        <span className={styles.subtitle}>About</span>
                    </Link>
                </li>
                <li className={styles.link}>
                    <Link href="/member">
                        <span className={styles.subtitle}>Member</span>
                    </Link>
                </li>
                <li className={styles.link}>
                    <Link href="/contact">
                        <span className={styles.subtitle}>Contact</span>
                    </Link>
                </li>
                <p className={styles.close} onClick={handleCloseMenuModal}>
                    Close
                </p>
            </ul>
        </Modal>
    );
};
