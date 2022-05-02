
export const query1= (table) =>{
    //SELECT * FROM orders WHERE 1
    //showing
    return table;
   
}

export const query2 = (table) => {
    // SELECT orderID, customerID, employeeID FROM orders WHERE shipCountry = 'USA';
    let array=[];
    for(let val of table){
        let obj = {};
        if(val.shipCountry=='USA') {
            let {orderID,customerID,employeeID,shipCountry} = val;
            obj={orderID,customerID,employeeID,shipCountry};
            array.push(obj);
        } 
    }
    return array;
}

export const query3 = (table) =>{
    // UPDATE orders SET shipCountry='India' WHERE employeeID=5;
    //message is rows affected;
    let count = 0,array=[];
    array=table.map(val=>{
        if(val.employeeID==5) {
            count++;
            val.shipCountry='India'
        };
        return val;
    });
    console.log({count});
    return array;

}

export const query4 = (table) => {
    //INSERT INTO orders
    // (orderID, customerID, employeeID, orderDate, requiredDate, 
    // shippedDate, shipVia, freight, shipName, shipAddress, shipCity, 
    // shipRegion, shipPostalCode, shipCountry) VALUES (10249,'RITIK',10,
    // '1998-05-04 00:00:00.000','1998-05-18 00:00:00.000','1998-05-06 00:00:00.000',
    // 2,9.87,'Drachenblut Delikatessen','Ave. 5 de Mayo Porlamar',' Colchester','Lara'
    // ,'05454-989','Brazil')
    let index = table.findIndex(val=>val.orderID==10246);
    if(index>=0)  throw "Duplicate entry '10246' for key 'PRIMARY'"
    else
    {
        table.push({"orderID":"10246","customerID":"RITIK","employeeID":"10","orderDate":"1998-05-04 00:00:00.000","requiredDate":"1998-05-18 00:00:00.000","shippedDate":"1998-05-06 00:00:00.000","shipVia":"2","shipName":"Drachenblut Delikatessen","shipAddress":"Ave. 5 de Mayo Porlamar","shipCity":" Colchester","shipRegion":"Lara","shipPostalCode":"05454-989","shipCountry":"USA"})
        return table;
    }
    //error:-Duplicate entry '10249' for key 'PRIMARY'

}

export const query5 = (table) => {
    // DELETE FROM orders WHERE employeeID =10
    //affected
    let index = table.findIndex(val=>val.employeeID==10);
    if(index>=0) table.splice(index,1);
    return table;
}
