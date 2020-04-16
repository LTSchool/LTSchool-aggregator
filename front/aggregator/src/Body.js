import React from 'react';


function CreateNewsBlocks () {
    let array = []
    for (let i = 0; i < 4; i++) {
    array.push( 
        <div className = "news-grid-item">  
            <div  className="news-description" >
                <p1>This image looks super neat.</p1> 
                <button className = "favourite" > &#9829; &#9825; </button>
            </div> 
        </div>
    )
    }
    return array;
}


function Body(props){
    return(
        <div className = "news-grid">
            {props.stateLI ? 
                <CreateNewsBlocks/>
            :
            null
            }

        </div>
        

    )
}

export default Body;