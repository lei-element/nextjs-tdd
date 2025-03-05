'use client';

import { useState, useEffect } from "react";

export default function FetchDataPage() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(`/api/db/fetch`);
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await res.json();
                setData(data);
            } catch (error) {
                console.error('Error:', error);
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data) {
        return <div>No data available</div>;
    }

    return (
        <div>
            {/* 根据实际数据结构来渲染数据 */}
            {typeof data === 'object' ? 
                JSON.stringify(data) : 
                data}
        </div>
    );
}