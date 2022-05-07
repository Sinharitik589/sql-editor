
export const query1_1= (table) =>{
    //SELECT * FROM orders WHERE 1
    //showing
    let time = Date.now()
    return {
        table,
        message:`Showing ${table.length} rows (${Date.now()-time} ms)`
    };
   
}

export const query1_2 = (table) => {
    // SELECT orderID, customerID, employeeID FROM orders WHERE shipCountry = 'USA';
    let time = Date.now()
    let array=[];
    for(let val of table){
        let obj = {};
        if(val.shipCountry=='USA') {
            let {orderID,customerID,employeeID,shipCountry} = val;
            obj={orderID,customerID,employeeID,shipCountry};
            array.push(obj);
        } 
    }
    return {
        table:array,
        message:`Showing ${array.length} rows ( ${Date.now()-time} ms)`
    };
}

export const query1_3 = (table) =>{
    // UPDATE orders SET shipCountry='India' WHERE employeeID=5;
    //message is rows affected;
    let count = 0,array=[];
    let time = Date.now()
    array=table.map(val=>{
        if(val.employeeID==5) {
            count++;
            val.shipCountry='India'
        };
        return val;
    });
    return {
        table:array,
        message:`${count} rows affected ( ${Date.now()-time} ms)`
    };

}

export const query1_4 = (table) => {
    //INSERT INTO orders
    // (orderID, customerID, employeeID, orderDate, requiredDate, 
    // shippedDate, shipVia, freight, shipName, shipAddress, shipCity, 
    // shipRegion, shipPostalCode, shipCountry) VALUES (10249,'RITIK',10,
    // '1998-05-04 00:00:00.000','1998-05-18 00:00:00.000','1998-05-06 00:00:00.000',
    // 2,9.87,'Drachenblut Delikatessen','Ave. 5 de Mayo Porlamar',' Colchester','Lara'
    // ,'05454-989','Brazil')
    let array=table.slice(0);
    let time = Date.now();
    let index = table.findIndex(val=>val.orderID==10246);
    if(index>=0)  return {
        table:array,
        error:"Duplicate entry for primary key orderID"
    }
    else
    {
        array.push({"orderID":"10246","customerID":"RITIK","employeeID":"10","orderDate":"1998-05-04 00:00:00.000","requiredDate":"1998-05-18 00:00:00.000","shippedDate":"1998-05-06 00:00:00.000","shipVia":"2","shipName":"Drachenblut Delikatessen","shipAddress":"Ave. 5 de Mayo Porlamar","shipCity":" Colchester","shipRegion":"Lara","shipPostalCode":"05454-989","shipCountry":"USA"})
        return {
            table:array,
            message:`1 row inserted. ( ${(Date.now()-time)} ms)`
        };
    }
    //error:-Duplicate entry '10249' for key 'PRIMARY'

}

export const query1_5 = (table) => {
    // DELETE FROM orders WHERE employeeID =10
    //affected
    let time = Date.now();
    let index = table.findIndex(val=>val.employeeID==10);
    if(index>=0) table.splice(index,1);
    return {
        table,
        message:`${index>=0?1:0} row affected. ( ${(Date.now()-time)} ms)`
    };
}



export const query2_1= (table) =>{
    //SELECT * FROM orders WHERE 1
    //showing
    let time = Date.now()
    return {
        table,
        message:`Showing ${table.length} rows (${Date.now()-time} ms)`
    };
   
}

export const query2_2 = (table) => {
    // 'SELECT customerID, companyName, contactName, contactTitle, country FROM customers WHERE contactTitle = "Sales Manager"';
    let time = Date.now()
    let array=[];
    for(let val of table){
        let obj = {};
        if(val.contactTitle=='Marketing Manager') {
            let {customerID, companyName, contactName, contactTitle, country} = val;
            obj={customerID, companyName, contactName, contactTitle, country};
            array.push(obj);
        } 
    }
    return {
        table:array,
        message:`Showing ${array.length} rows ( ${Date.now()-time} ms)`
    };
}

export const query2_3 = (table) =>{
    // "UPDATE customers SET contactTitle='Marketing Manager' WHERE country='Germany'"
    //message is rows affected;
    let count = 0,array=[];
    let time = Date.now()
    array=table.map(val=>{
        if(val.country=='Germany') {
            count++;
            val.contactTitle='Marketing Manager'
        };
        return val;
    });
    return {
        table:array,
        message:`${count} rows affected ( ${Date.now()-time} ms)`
    };

}

export const query2_4 = (table) => {
    //INSERT INTO orders
    /* 
    'INSERT INTO customers(customerID, companyName, contactName, contactTitle, address,  city, region, postalCode,  country,  phone,  fax) VALUES ("RITSIN","Rit & Co.","Ritik Kumar","Marketing Manager","Vill + Po Barhouna","Munger","North","1811213","India","6202165155","(02) 201 24 68")',

     */
    let array=table.slice(0);
    let time = Date.now();
    let index = table.findIndex(val=>val.customerID=="RITSIN");
    if(index>=0)  return {
        table:array,
        error:"Duplicate entry for primary key customerID"
    }
    else
    {
        array.push({
            "customerID": "RITSIN",
            "companyName": "Rit & Co.",
            "contactName": "Ritik Kumar",
            "contactTitle": "Marketing Manager",
            "address": "Vill + Po Barhouna",
            "city": "Munger",
            "region": "North",
            "postalCode": "1811213",
            "country": "India",
            "phone": "(91) 6202965157",
            "fax": "(02) 201 24 68"
          })
            return {
            table:array,
            message:`1 row inserted. ( ${(Date.now()-time)} ms)`
        };
    }

}

export const query2_5 = (table) => {
    // 'DELETE FROM customers WHERE customerID = "RITSIN"'
    //affected
    let time = Date.now();
    let index = table.findIndex(val=>val.customerID == "RITSIN");
    if(index>=0) table.splice(index,1);
    return {
        table,
        message:`${index>=0?1:0} row affected. ( ${(Date.now()-time)} ms)`
    };
}
