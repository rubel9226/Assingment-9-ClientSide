'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Search = () => {
    const router = useRouter();
    const [ search, setSearch ] = useState();

    const handleSearch = (e) => {
        e.preventDefault();
        router.push(`/appointments?search=${search}`);
    }

    return (
        <div>
            <form onSubmit={handleSearch} className='w-full max-w-xl flex gap-3'>
                <input
                    type="text"
                    name="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Search doctor or specialty...'
                    className='w-full h-12 rounded-xl border border-white/15 bg-[#031E29] px-4 outline-none'
                />

                <button
                    type='submit'
                    className='bg-[#00C7C5] text-black px-6 rounded-xl font-semibold'
                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default Search;