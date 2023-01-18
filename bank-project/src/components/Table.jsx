import React, { useState, useEffect } from "react";


const Table = ({list})=> {
    const [transactions, setTransactions] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/transactions")
        .then((response) => response.json())
        .then((data) => {
            setTransactions(data);
            console.log(data);
        });
    }, []);
   
    return (
        <>
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
                    {
                        transactions.map((item, index)=>{
                            return(
                                <tr key={index} >
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
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Table;
