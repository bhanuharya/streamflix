import React from 'react';

const SearchArea = (props) => {
    return(
        <div className ="container"> 
        <div className ="row">
        <section className="col s4 offset-s4"></section>
        <form action="" onSubmit={props.handleSubmit}>
            <div className="input-field">
                <input placeholder="Search Movie..." type="text" onChange={props.handleChange}/>
            </div>
        </form>

        </div>
        </div>

    )
}
export default SearchArea