import React from "react"
import { Link } from "gatsby"
import * as navStyles from "./nav.module.scss"

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" activeStyle={{ color: "red" }}
                        partiallyActive={false}>Home</Link>
                </li>
                <li>
                    <Link to="/about/" activeStyle={{ color: "red" }}
                        partiallyActive={false}>About</Link>
                </li>
                <li>
                    <Link to="/contact/" activeStyle={{ color: "red" }}
                        partiallyActive={false}>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}