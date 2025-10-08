import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import Apps from '../Apps/Apps';
import ar from '../../assets/App-Error.png';

const AllApps = () => {
    const data = useLoaderData();
    const [query, setQuery] = useState('');
    // 🔍 filter apps by title (case-insensitive)
    const filteredApps = data.filter((app) =>
        app.title.toLowerCase().includes(query.toLowerCase())
    );

    // 🔁 Go Back → reset search
  const handleGoBack = () => {
    setQuery(''); 
  };
    //console.log(data);
    return (
        <div className='mt-10'>
            <div className='flex flex-col items-center text-center '>
                <h1 className='font-bold text-3xl'>Our All Applications</h1>
                <p1>Explore All Apps on the Market developed by us. We code for Millions</p1>
            </div>
            <div className='flex justify-between ml-15 mr-10'>
                <div>
                    <h1 className='font-bold text-2xl'>(<span>{data.length}</span> ) Apps Found</h1>
                </div>
                <div>
                    <label className="input">
                        <svg className="h-[10px] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input
                            type="search"
                            placeholder="Search Apps..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </label>
                </div>
            </div>

            {/* App Grid */}
            <div className="m-10 grid grid-cols-2 lg:grid-cols-4 gap-5">
                {filteredApps.length > 0 ? (
                    filteredApps.map((app) => <Apps key={app.id} app={app} />)
                ) : (
                    <div className="col-span-full flex flex-col justify-center items-center">
                        <img src={ar} alt="No App Found" className="w-60 h-60 object-contain opacity-80" />
                        <Link to={'/apps'}>
                        <button onClick={handleGoBack}>
                                            <a className="btn flex items-center bg-[linear-gradient(125.07deg,#632EE3,#9F62F2)] p-2 rounded-lg mr-10">
                                                      
                                                      <h1 className="text-white text-xl">Go Back</h1>
                                                    </a>
                                        </button>
                        </Link>
                    </div>
                )}
            </div>

        </div>
    );
};

export default AllApps;