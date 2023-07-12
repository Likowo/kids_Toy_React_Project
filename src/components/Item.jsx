import React from 'react'

function Item(props) {
  return (
    <div className='itemInfor'>
        <h1>Child Name:{props.itemInfor.child}</h1>
        <h2>Toy Name:{props.itemInfor.toy.name}</h2>
        <h3>Toy Color:{props.itemInfor.toy.color}</h3>
        <h3>Toy Cost:{props.itemInfor.toy.cost}</h3>
        <img src={props.itemInfor.toy.image}/>
        {/* To display toyfeatures, open an unordered list tag (<ul></ul>), then iterate throu the array of features using map */}
        <ul>
            <h1> Toy Features </h1>
            {
                props.itemInfor.toy.features.map((features)=>{
                    return(<li>{features}</li>)
                })
            }
        </ul>

       </div>
  )
}

export default Item