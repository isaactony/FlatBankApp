import React, {useState} from "react"

//creating the form component 
const Form = ()=>{
    const [formData, setFormData] = useState({
        date: "mm/dd/yyyy",
        description: "Description",
        category: "Enter Category",
        amount: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormData({...formData})

        fetch("http://localhost:3000/transactions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
      }

    // const handleSubmit = (event)=> {
    //     event.preventDefault()
    //     setList([...list,formData])
    //     fetch("the server URL", {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(formData),
    // }

    const handleOnChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    return (
    <> 
         <br></br>

      
        <form className="row p-3 m-4" onSubmit={handleSubmit}>
            <div className="col-3">
                <input name="date" onChange={handleOnChange} value={formData.date} className="form-control form-control-sm" type="date" placeholder="Enter Date" aria-label=".form-control-sm example"/>
            </div>
            <div className="col-3">
                <input name="description" onChange={handleOnChange} value={formData.description} className="form-control form-control-sm" type="text" placeholder="Description" aria-label=".form-control-sm example"/>
            </div>
            <div className="col-3">
                <input name="category" onChange={handleOnChange} value={formData.category} className="form-control form-control-sm" type="text" placeholder="Category" aria-label=".form-control-sm example"/>
            </div>
            <div className="col-3">
                <input name="amount" onChange={handleOnChange} value={formData.amount} className="form-control form-control-sm" type="number" placeholder="Amount" aria-label=".form-control-sm example"/>
                <br></br>
            </div>

         <div className="col-12">
            <br></br>
         <button className="btn btn-sm btn-outline-danger btn-block text-uppercase" type="submit">Add Transaction </button>
     </div>
  
     </form>
     </>
        
    )
}

export default Form