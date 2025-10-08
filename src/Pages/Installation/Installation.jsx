import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApp, removeFromStoredDB } from '../../Components/Utility/Database';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import di from "../../assets/icon-downloads.png";
import ir from "../../assets/icon-ratings.png";

const Installation = () => {
    const [installation, setInstallation] = useState([]);
    const [sortOrder, setSortOrder] = useState(null);
    const data = useLoaderData();

    useEffect(() => {
        const storedAppData = getStoredApp();
        const ConvertedStoredApp = storedAppData.map(id => parseInt(id));
        const myInstallation = data.filter(app => ConvertedStoredApp.includes(app.id));
        setInstallation(myInstallation);
    }, [data]);

    const handleSort = (order) => {
        setSortOrder(order);
        const sortedApps = [...installation].sort((a, b) => {
            if (order === 'asc') return a.downloads - b.downloads;
            if (order === 'desc') return b.downloads - a.downloads;
            return 0;
        });
        setInstallation(sortedApps);
    }

    const handleUninstall = (appId, appTitle) => {
        // Remove from state
        const updatedInstallation = installation.filter(app => app.id !== appId);
        setInstallation(updatedInstallation);

        // Remove from localStorage
        removeFromStoredDB(appId);

        // Show toast using react-toastify
        toast.success(`${appTitle} has been uninstalled!`, {
            position: "top-center",
            autoClose: 2000,
        });
    }

    return (
        <div className='mt-12'>
            <div className='flex flex-col items-center'>
                <h1 className='font-bold text-3xl'>Your Installed Apps</h1>
                <p>Explore all trending apps on the market developed by us</p>
            </div>

            <div className='my-6 flex justify-between items-center px-4'>
                <h1 className='text-xl font-bold'>{installation.length} Apps Found</h1>
                <div className="dropdown dropdown-bottom dropdown-center">
                    <div tabIndex={0} role="button" className="btn m-1">Sort By Downloads ⬇️</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow-sm z-10">
                        <li><button onClick={() => handleSort('asc')}>Low to High</button></li>
                        <li><button onClick={() => handleSort('desc')}>High to Low</button></li>
                    </ul>
                </div>
            </div>

            {installation.length > 0 ? (
                installation.map(app => (
                    <div key={app.id} className='mx-4 my-3 bg-gray-100 h-[100px] flex items-center justify-between'>
                        <div className='flex gap-3 items-center'>
                            <img src={app.image} alt={app.title} className='h-[70px] ml-5' />
                            <div>
                                <h1 className='font-semibold'>{app.title}</h1>
                                <div className='flex gap-3 mt-3'>
                                    <p className='flex gap-1 items-center'>
                                        <img src={di} alt="" className='h-[20px]' /> {app.downloads}
                                    </p>
                                    <p className='flex gap-1 items-center'>
                                        <img src={ir} alt="" className='h-[20px]' /> {app.ratingAvg}
                                    </p>
                                    <p>{app.size}MB</p>
                                </div>
                            </div>
                        </div>
                        <div className='mr-5'>
                            <button 
                                onClick={() => handleUninstall(app.id, app.title)} 
                                className='bg-green-500 text-white px-4 py-1 rounded hover:bg-red-600 transition'
                            >
                                Uninstall
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-500 mt-10">
                    You haven’t installed any apps yet.
                </p>
            )}

            {/* ToastContainer required for react-toastify */}
            <ToastContainer />
        </div>
    );
};

export default Installation;
