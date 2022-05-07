import { query1_1, query1_2, query1_3, query1_4, query1_5 ,
    query2_1,query2_2,query2_3,query2_4,query2_5 } from "./queryFunctions"


export const orderQueries = [
    {
        name:"Query 1",
        query:"SELECT * FROM orders WHERE 1",
        func:query1_1,
        update:false

    },
    {
        name:"Query 2",
        query:"SELECT orderID, shipCountry , customerID, employeeID FROM orders WHERE shipCountry = 'USA'",
        func:query1_2,
        update:false

    },
    {
        name:"Query 3",
        query:"UPDATE orders SET shipCountry='India' WHERE employeeID=5",
        func:query1_3,
        update:true

    },
    {
        name:"Query 4",
        query:`INSERT INTO orders (orderID, customerID, employeeID, orderDate, requiredDate, shippedDate, shipVia, freight, shipName, shipAddress, shipCity, shipRegion, shipPostalCode, shipCountry) VALUES (10246,'RITIK',10, '1998-05-04 00:00:00.000','1998-05-18 00:00:00.000','1998-05-06 00:00:00.000', 2,9.87,'Drachenblut Delikatessen','Ave. 5 de Mayo Porlamar',' Colchester','Lara' ,'05454-989','USA')`,
        func:query1_4,
        update:true

    },
    {
        name:"Query 5",
        query:"DELETE FROM orders WHERE employeeID =10",
        func:query1_5,
        update:true

    },
]

export const customerQueries = [{
    name:"Query 1",
    query:"SELECT * FROM customers WHERE 1",
    func:query2_1,
    update:false

},
{
    name:"Query 2",
    query:'SELECT customerID, companyName, contactName, contactTitle, country FROM customers WHERE contactTitle = "Marketing Manager"',
    func:query2_2,
    update:false

},
{
    name:"Query 3",
    query:"UPDATE customers SET contactTitle='Marketing Manager' WHERE country='Germany'",
    func:query2_3,
    update:true

},
{
    name:"Query 4",
    query:'INSERT INTO customers(customerID, companyName, contactName, contactTitle, address,  city, region, postalCode,  country,  phone,  fax) VALUES ("RITSIN","Rit & Co.","Ritik Kumar","Marketing Manager","Vill + Po Barhouna","Munger","North","1811213","India","(91) 6202965157","(02) 201 24 68")',
    func:query2_4,
    update:true

},
{
    name:"Query 5",
    query:'DELETE FROM customers WHERE customerID = "RITSIN"',
    func:query2_5,
    update:true

},]