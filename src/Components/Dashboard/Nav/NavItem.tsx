import React from 'react'

interface Props {
    to: string
    asset: string
    isLogo?: boolean
}

export const NavItem: React.FC<Props> = ({ to, isLogo, asset }) => {
    return (
        <li className={isLogo ? "logo" : "nav-item"}>
            <img className="icon" src={asset} alt="Icon" />
        </li >
    );
}