import React from 'react';
import { FaCar, FaUser } from 'react-icons/fa';

const Stats = () => {
    return (
        <div className="my-12">
            <h1 className="text-center text-3xl font-bold mb-12">Stats</h1>

            <div className="flex justify-center">
                <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-figure text-primary ml-2">
                            <FaCar className="text-3xl"></FaCar>
                        </div>
                        <div className="stat-title">Total Toys</div>
                        <div className="stat-value text-primary">25.6K</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div className="stat-title">Page Views</div>
                        <div className="stat-value text-secondary">2.6M</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <div className="w-16 rounded-full ml-4">
                                <FaUser className="text-3xl"></FaUser>
                            </div>
                        </div>
                        <div className="stat-value  text-secondary">23K</div>
                        <div className="stat-title">Total User</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;