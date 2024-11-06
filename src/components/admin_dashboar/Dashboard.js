import React, { useState } from 'react';
import './Dashboard.css';
import ResponsiveCards from "../cards/ResponsiveCards";

export default function Dashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="app">
            <header className="navbar">
                <button className="toggle-button" onClick={toggleSidebar}>
                    ☰
                </button>
                <h2>Dashboard</h2>
            </header>

            <div className="content">
                <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                    <div className="sidebar-content">
                        <h3>Sidebar</h3>
                        <ul>
                            <li>List</li>
                            <li>List</li>
                            <li>List</li>
                            <li>List</li>
                            <li>List</li>
                            <li>List</li>
                            <li>List</li>
                            <li>List</li>
                            <li>List</li>
                            <li>List</li>
                        </ul>
                    </div>
                </aside>

                <main className="main-content">
                    <h1>Welcome to the Dashboard</h1>
                    <p>This is the main content area.</p>
                    <ResponsiveCards/>
                </main>
            </div>
        </div>
    );
}
