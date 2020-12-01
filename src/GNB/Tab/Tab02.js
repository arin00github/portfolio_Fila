import React from 'react';
import publishData from './../../data/publish'

//data 작성해서 배열로 만들어서 돌려야 겠다.
function TabBox02 (){

    



    return(
        <div id="tab02">
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>구분</th>
                        <th>제목</th>
                        <th>일시</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        publishData.map(function(a, i){
                            return(
                                <tr key={i}>
                                    <td className="table-num">{a.number}</td>
                                    <td className="table-type">{a.type}</td>
                                    <td className="table-title">{a.title}</td>
                                    <td className="table-data">{a.date}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}




export default TabBox02;