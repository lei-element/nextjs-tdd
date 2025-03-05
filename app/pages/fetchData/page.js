'use client';

import { useState, useEffect } from "react";

export default function FetchDataPage() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(`/api/db/fetch`);
                const data = await res.json();
                setData(data);
            } catch (error) {
                console.error('Error:', error)
            }
        }

        fetchData();
    }, []);

    if (!data) {
        return <></>;
    }

    return (
        <>{data}</>
    );
}