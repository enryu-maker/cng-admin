import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function BusinessGroup() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;
    const GoalData = useSelector(state => state.Reducers.order) || []; // Fallback to empty array

    useEffect(() => {
        const filtered = searchQuery.trim() === ''
            ? GoalData
            : GoalData.filter(goals =>
                Object.values(goals).some(value =>
                    value != null && String(value).toLowerCase().includes(searchQuery.toLowerCase())
                )
            );

        setFilteredData(filtered);
        setCurrentPage(1); // Reset to first page on new search
    }, [searchQuery, GoalData]);

    const startIndex = (currentPage - 1) * rowsPerPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + rowsPerPage);
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);

    const goToNextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
    const goToPreviousPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

    return (
        <div className="font-Poppins">
            <h2 className="text-2xl py-6 px-2 font-bold">Order</h2>
            <div className="p-6 bg-white shadow-md rounded">
                <div className="flex justify-between items-center mb-4 space-y-3">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="h-[40px] w-[400px] border px-2"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {filteredData.length === 0 ? (
                    <p>No results found</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full table-auto text-left rounded text-sm text-gray-500">
                            <thead className="bg-gray-100 text-xs uppercase text-gray-700">
                                <tr>
                                    {GoalData.length > 0 && Object.keys(GoalData[0]).map(key => (
                                        <th key={key} className="px-6 py-3 text-start">
                                            {key.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedData.map((goals, index) => (
                                    <tr key={index} className="border-b bg-white hover:bg-gray-50">
                                        {Object.keys(goals).map(key => (
                                            <td key={key} className="px-4 py-2">
                                                {goals[key]}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {filteredData.length > rowsPerPage && (
                    <div className="mt-4 flex justify-between items-center">
                        <button
                            onClick={goToPreviousPage}
                            disabled={currentPage === 1}
                            className="px-4 py-2 text-white bg-blue-500 rounded-md disabled:bg-gray-300"
                        >
                            Previous
                        </button>
                        <span className="text-sm">
                            Page {currentPage} of {totalPages} | Total items: {filteredData.length}
                        </span>
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
