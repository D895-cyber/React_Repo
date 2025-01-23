import React, { useEffect, useState } from 'react';

const SearchCom = () => {
    const [search, setSearch] = useState('laptop');
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await fetch(`https://dummyjson.com/products/search?q=${search}`);
                let result = await response.json();
                setData(result.products || []); // Safely handle if "products" is undefined
                console.log(result);
            } catch (error) {
                console.error('Error fetching data:', error);
                setData([]); // Reset data on error
            }
        };

        fetchData();
    }, [search]); // Re-run effect when "search" changes

    return (
        <div>
            <h1>Search Component</h1>
            <input
                type="text"
                placeholder="Search product here"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border border-gray-300 rounded p-2"
            />
            <div>
                {data.length > 0 ? (
                    data.map((prod) => (
                        <div key={prod.id} className="flex flex-col justify-center items-center p-4 border-b">
                            <div>{prod.id}</div>
                            <h2 className="text-xl font-bold">{prod.title}</h2>
                            <div className="flex justify-center items-center">
                                {prod.images?.map((imgUrl, index) => (
                                    <div key={index} className="p-2">
                                        <img
                                            className="w-[300px] border rounded"
                                            src={imgUrl}
                                            alt={prod.title}
                                        />
                                    </div>
                                ))}
                            </div>
                            <p>{prod.description}</p>
                        </div>
                    ))
                ) : (
                    <div>No Data Found</div>
                )}
            </div>
        </div>
    );
};

export default SearchCom;