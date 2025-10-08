import React from 'react';
import hero from '../../assets/hero.png';
import gp from '../../assets/fi_16076057.png';
import as from '../../assets/fi_5977575.png';
import { Link, useLoaderData } from 'react-router';
import Apps from '../Apps/Apps';

const Home = () => {
    const data=useLoaderData();
    //console.log(data);
    return (
        <div className=' flex flex-col items-center'>
            
                <div className='w-[300px] mx-auto text-4xl text-center mt-10 '>
                    <h1>We Build
                        <span className="text-4xl bg-[linear-gradient(125.07deg,#632EE3,#9F62F2)] bg-clip-text text-transparent font-bold ml-1"> Productive </span>
                        Apps</h1>
                </div>
                <div className='md:w-[700px] mx-auto  text-center mt-3  text-sm'>
                    <p>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                </div>
                <div className='w-[300px] mx-auto mt-5 flex justify-between'>
                    <button className='flex ml-3 items-center gap-2'>
                        <img src={gp} alt="" />
                        <p>Google Play</p>
                    </button>
                    <button className='flex ml-3 items-center gap-2'>
                        <img src={as} alt="" className='w-[30px] h-[30px]' />
                        <p>App Store</p>
                    </button>
                </div>
                <div className=' w-[600px] mx-auto mt-5'>
                    <img src={hero} alt="" />
                </div>
                <div className='h-[250px] bg-[linear-gradient(125.07deg,#632EE3,#9F62F2)] flex flex-col items-center justify-center text-center w-[600px] md:w-full mx-auto'>
                    <div>
                        <h1 className='text-2xl font-bold text-white'>Trusted by Millions, Built for You</h1>

                    </div>
                    <div className='flex md:flex-row gap-20 text-white mt-5 '>
                        <div>
                            <p className='text-sm'>Total Downloads</p>
                            <h1 className='text-5xl font-bold'>29.6M
                            </h1>
                            <p className='text-sm'>21% more than last month</p>
                        </div>
                        <div>
                            <p className='text-sm'>Total Reviews</p>
                            <h1 className='text-5xl font-bold'>906K
                            </h1>
                            <p className='text-sm'>46% more than last month</p>
                        </div>
                        <div>
                            <p className='text-sm'>Active Apps</p>
                            <h1 className='text-5xl font-bold'>132+
                            </h1>
                            <p className='text-sm'>31 more will Launch</p>
                        </div>
                    </div>
                </div>
                <div className='w-[430px] mx-auto text-center mt-10'>
                   <h1 className='font-bold text-3xl'>Trending Apps</h1>
                   <p>Explore All Trending Apps on the Market developed by us</p>
                </div>

                <div className='m-10 grid grid-cols-2 lg:grid-cols-4 gap-5'>
                    {data.map((d) => (
                    <Apps key={d.id} app={d} />
                ))}
                </div>

                <Link to="/apps">
                <button>
                    <a className="btn flex items-center bg-[linear-gradient(125.07deg,#632EE3,#9F62F2)] p-2 rounded-lg mr-10">
                              
                              <h1 className="text-white text-xl">Show All</h1>
                            </a>
                </button>
                </Link>
            
        </div>
    );
};

export default Home;