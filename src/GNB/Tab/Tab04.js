import React from 'react';
import localData from './../../data/location'

function TabBox04 (){
    return(
        <div id="tab04" >
             <table>
                <tbody>
                    {
                        localData.map(function(a, i){
                            return(
                                <tr key={i}>
                                    <td>{a.name}</td>
                                    <td>{a.region}</td>
                                    <td>{a.address}</td>
                                    <td>{a.tel}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default TabBox04;