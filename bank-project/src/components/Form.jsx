import React, {useState} from "react"

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

<div class="form-group d-flex justify-content-center">
  <div class="form-outline w-75">
  <input type="search" class="form-control" placeholder="Search"/>
    <label class="form-label" for="form1"></label>
  </div>
  <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>

</div>

      
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