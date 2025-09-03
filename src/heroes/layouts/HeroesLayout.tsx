import { Link, Outlet } from "react-router"

export const HeroesLayout = () => {
    return (
        <div className="bg-gray-200 text-black p-4">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/search">Search</Link>
                </li>
                <li>
                    <Link to="/heroes/1">Hero 1</Link>
                </li>
                <li>
                    <Link to="/admin">Admin</Link>
                </li>
            </ul>

            <section className="mt-4">
                <Outlet />
            </section>
        </div>
    )
}
