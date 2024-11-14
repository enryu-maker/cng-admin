import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function BusinessGroup() {
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);
    const [view, setView] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [businessgroup, setBusinessgroup] = useState(null);
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10; // Number of rows per page

    const dispatch = useDispatch();

    // Fetching pagename and GoalData from Redux state
    const GoalData = useSelector(state => state.Reducers.order);

    // Apply search filter and update filteredData
    useEffect(() => {
        if (searchQuery.trim() === '') {
            setFilteredData(GoalData);
        } else {
            setFilteredData(
                GoalData.filter(goals => {
                    // Check if any field in the object contains the search query (case-insensitive)
                    return Object.values(goals).some(value =>
                        value != null && String(value).toLowerCase().includes(searchQuery.toLowerCase())
                    );
                })
            );
        }
    }, [searchQuery, GoalData]);

    // Pagination logic: slice filtered data based on current page and rows per page
    const startIndex = (currentPage - 1) * rowsPerPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + rowsPerPage);

    // Calculate total number of pages
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className='font-Poppins'>
            {/* Page Title */}
            <h2 className='text-2xl py-6 px-2 font-bold '>Order</h2>
            {/* Container for Search and Add Button */}
            <div className='p-6 bg-white shadow-md rounded'>
                <div className="flex justify-between items-center mb-4 space-y-3">
                    {/* Search Input */}
                    <input
                        type="text"
                        placeholder='Search...'
                        className='h-[40px] w-[400px] border px-2'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
                    />
                </div>

                {/* Data Table */}
                {filteredData.length === 0 ? (
                    <p>No results found</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full table-auto text-left rounded text-sm text-gray-500">
                            <thead className="bg-gray-100 text-xs uppercase text-gray-700">
                                <tr className=' text-start'>
                                    {
                                        // Dynamically create table headers, skipping 'organization_id'
                                        Object?.keys(GoalData[0])?.map((key) => {
                                            return (
                                                <th scope="col" className="px-6 py-3 text-start" key={key}>
                                                    {key.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}
                                                </th>
                                            );
                                        })
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedData?.map((goals, index) => (
                                    <tr key={index} className="border-b bg-white hover:bg-gray-50">
                                        {Object.keys(goals)?.map((key) => {
                                            return (
                                                <td key={key} className='px-4 py-2'>
                                                    {goals[key]}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Pagination Controls */}
                {filteredData.length > rowsPerPage && (
                    <div className="mt-4 flex justify-between items-center">
                        {/* Previous Page Button */}
                        <button
                            onClick={goToPreviousPage}
                            disabled={currentPage === 1}
                            className="px-4 py-2 text-white bg-blue-500 rounded-md disabled:bg-gray-300"
                        >
                            Previous
                        </button>

                        {/* Page Number Display */}
                        <span className="text-sm">
                            Page {currentPage} of {totalPages}
                        </span>

                        {/* Next Page Button */}
                        <button
                            onClick={goToNextPage}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 text-white bg-blue-500 rounded-md disabled:bg-gray-300"
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
