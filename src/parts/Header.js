import React from 'react'
import Button from 'elements/Button'
import BrandIcon from 'parts/IconText';

export default function Header(props) {
    const getNavLinkClass = path => {
        return props.location.pathname === path ? "active" : ""
    }

    return (
        <header className="spacing-sm">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <BrandIcon />
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            {/* <li className={`nav-item${getNavLinkClass("/")}`}>
                                <Button className="nav-link" type="link" href="/">
                                    Home
                                </Button>
                            </li> */}
                            <li className={`nav-item${getNavLinkClass("/tempat-pariwisata")}`}>
                                <Button className="nav-link" type="link" href="/tempat=pariwisata">
                                    Tempat Pariwisata
                                </Button>
                            </li>
                            <li className={`nav-item${getNavLinkClass("/hotel")}`}>
                                <Button className="nav-link" type="link" href="/hotel">
                                    Hotel
                                </Button>
                            </li>
                            <li className={`nav-item${getNavLinkClass("/cafe-restaurant")}`}>
                                <Button className="nav-link" type="link" href="/cafe-restaurant">
                                    Cafe & Restaurant
                                </Button>
                            </li>
                            {/* <li className={`nav-item${getNavLinkClass("/profil")} dropdown`}>
                                <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="40" height="40" class="rounded-circle" />
                                <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="#">Dashboard</a>
                                    <a class="dropdown-item" href="#">Edit Profile</a>
                                    <a class="dropdown-item" href="#">Log Out</a>
                                </div>
                            </li> */}
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className={`nav-item${getNavLinkClass("/cafe-restaurant")}`}>
                                <Button className="nav-link" type="link" href="/cafe-restaurant">
                                    Login
                                </Button>
                            </li>

                            <p className={`nav-link`}>|</p>

                            <li className={`nav-item${getNavLinkClass("/cafe-restaurant")}`}>
                                <Button className="nav-link" type="link" href="/cafe-restaurant">
                                    Register
                                </Button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header >
    )
}
