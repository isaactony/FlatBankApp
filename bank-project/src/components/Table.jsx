import React, { useState, useEffect } from "react";


const Table = ({tableContent})=> {
    const [transactions, setTransactions] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);



    useEffect(() => {
        fetch("http://localhost:3000/transactions")
        .then((response) => response.json())
        .then((data) => {
            setTransactions(data);
            console.log(data);
        });
    }, []);

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = transactions.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
            console.log(filteredData)
        }
        else{
            setFilteredResults(transactions);
        }
    }
   
    return (
        <>
            <div class="form-group d-flex justify-content-center">
                <div class="form-outline w-75">
                    <input type="search" class="form-control" placeholder="Search" onChange={(e)=> searchItems(e.target.value)} />
                    <label class="form-label" for="form1"></label>
                </div>
                <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
       
            </div>
 
            <table className="text-center table table-striped table-hover">
                <thead>
                    <tr className="text-uppercase">
                        <th>Date</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>

        {searchInput.length > 1 ? (
            
                    filteredResults.map((item, index)=>{
                    return(
                    <tr key={index}>
                        <td>{item.date}</td>
                        <td>{item.description}</td>
                        <td>{item.category}</td>
                        <td>{item.amount}</td>
                        <td>
                            <button className="float-md-end btn btn-sm btn-outline-danger px-3">
                                Delete
                            </button>
                        </td>
                    </tr>
                    )
                    })) :( 
                    
                    transactions.map((item, index)=>{
                    return(
                    <tr key={index}>
                        <td>{item.date}</td>
                        <td>{item.description}</td>
                        <td>{item.category}</td>
                        <td>{item.amount}</td>
                        <td>
                            <button className="float-md-end btn btn-sm btn-outline-danger px-3">
                                Delete
                            </button>
                        </td>
                    </tr>
                    )})                   
                    )
}
                </tbody>
            </table>
              
        </>
        )
        }
       
        export default Table;