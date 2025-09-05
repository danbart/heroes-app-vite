import { Outlet } from 'react-router';

export const AdminLayout = () => {
    return (
        <div className="bg-gray-800 text-white p-4">
            <h1>Admin Layout</h1>
            <Outlet />
        </div>
    )
}

export default AdminLayout;
