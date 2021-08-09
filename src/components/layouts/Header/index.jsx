/**
 * layouts/Header
 * ContainerComponent
 * @package Component
 */
import React from "react";
import { useRouter } from "next/router";
/* components */
import { Presenter } from "./Presenter";

/**
 * container
 * @param props Props
 * @returns
 */
export const Header = (props) => {
    const { handleOpenMenuModal } = props;

    return <Presenter handleOpenMenuModal={handleOpenMenuModal} />;
};
