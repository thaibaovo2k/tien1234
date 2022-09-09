import React from 'react'

const map = [
    { key  : 1, unit: 'km' },
    { key  : 2, unit: 'hm' },
    { key  : 3, unit: 'dam' },
    { key  : 4, unit: 'm' },
    { key  : 5, unit: 'dm' },
    { key  : 6, unit: 'cm' },
    { key  : 7, unit: 'mm' },
]
const Table = (props) => {
  let d
  map.map(index => {
    if(index.unit == props.unit) d = index.key
  })
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Đơn vị</th>
                    <th>Giá trị</th>
                </tr>
            </thead>
            <tbody>
                {map.map(index => (
                    <tr>
                       <td>{index.unit}</td> 
                       <td>{((props.value) / (10**(d - index.key)))}</td> 
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Table