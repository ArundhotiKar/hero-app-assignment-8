import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import di from "../../assets/icon-downloads.png";
import ri from "../../assets/icon-review.png";
import irat from "..//../assets/icon-ratings.png";
import { addToStoredDB, getStoredApp } from "../../Components/Utility/Database";

const Appdetails = () => {
    const { id } = useParams();
    const appId = parseInt(id);
    const data = useLoaderData();
    const singleApp = data.find(app => app.id === appId);
    const { title, image, reviews, ratingAvg, downloads, companyName, ratings, description } = singleApp || {};

    const [installed, setInstalled] = useState(false);

    // ✅ যখন কম্পোনেন্ট লোড হবে, তখন চেক করবে app already installed কিনা
    useEffect(() => {
        const storedApps = getStoredApp().map(Number);
        if (storedApps.includes(appId)) {
            setInstalled(true);
        }
    }, [appId]);


    const handleInstall = () => {

        toast.success(`${title} installed successfully!`, {
            position: "top-center",
            autoClose: 2000,
        });
        addToStoredDB(appId);
        setInstalled(true);
    };

    if (!singleApp) {
        return <p className="text-center mt-10 text-red-500">App not found</p>;
    }

    // ✅ Sort ratings (5 star first)
    const sortedRatings = [...(ratings || [])].sort(
        (a, b) => parseInt(b.name) - parseInt(a.name)
    );

    return (
        <div className="max-w-6xl mx-auto mt-10 p-6">
            {/* Top Section: Image + Info */}
            <div className="flex flex-col lg:flex-row gap-8 items-center">
                {/* App Image */}
                <div className="w-full lg:w-1/3 flex justify-center">
                    <img
                        src={image}
                        alt={title}
                        className="rounded-2xl shadow-lg w-64 h-64 object-contain"
                    />
                </div>

                {/* App Details */}
                <div className="w-full lg:w-2/3 space-y-3">
                    <h1 className="text-3xl font-bold">{title}</h1>
                    <h1>Developed by <span className="text-purple-600 font-bold">{companyName}</span></h1>
                    <div className="mt-10 border-t-1 border-gray-300"></div>
                    <div className="flex gap-10 items-center">
                        <span className="text-yellow-500 font-semibold"> <img src={irat} alt="" /> {ratingAvg.toFixed(1)} / 5</span>
                        <span><img src={di} alt="" />{downloads.toLocaleString()} Downloads</span>
                        <span> <img src={ri} alt="" /> {reviews} Reviews</span>
                    </div>

                    {/* Install Button */}
                    <button
                        disabled={installed}
                        onClick={handleInstall}
                        className={`mt-3 px-6 py-2 rounded-lg text-white font-semibold ${installed
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-gradient-to-r from-purple-600 to-indigo-500 hover:opacity-90"
                            }`}
                    >
                        {installed ? "✅ Installed" : "⬇️ Install Now"}
                    </button>
                </div>
            </div>
            <div className="mt-10 border-t-1 border-gray-300"></div>

            {/* Ratings Chart */}
            <div className="mt-10">
                <h2 className="text-lg font-semibold mb-4">Ratings</h2>
                <div className="w-full h-52">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={sortedRatings}
                            layout="vertical"
                            margin={{ right: 20 }}
                        >
                            <XAxis type="number" />
                            <YAxis type="category" dataKey="name" />
                            <Tooltip />
                            <Bar dataKey="count" fill="#FF9900" barSize={30} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="mt-10 border-t-1 border-gray-300"></div>
            <div>
                <h1 className="font-bold mt-8">Description</h1>
                <p>{description}</p>
            </div>


            {/* Toast Container */}
            <ToastContainer />
        </div>
    );
};

export default Appdetails;
