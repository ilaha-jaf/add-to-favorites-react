import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <div>
            <nav className="nav">
                <Link to="/" className="site-title">Home</Link>
                <ul>
                    <CustomLink to="/product">Products</CustomLink>
                    <CustomLink to="/favorite">Favorites</CustomLink>
                </ul>
            </nav>
        </div>
    );
}

interface CustomLinkProps {
    to: string;
    children: React.ReactNode;
}

function CustomLink({ to, children, ...props }: CustomLinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
    const path =window.location.pathname

    return (
        <li className={path ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}
