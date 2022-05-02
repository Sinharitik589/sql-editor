import { query1, query2, query3, query4, query5 } from "./queryFunctions"


export const orderQueries = [
    {
        name:"Query 1",
        query:"SELECT * FROM orders WHERE 1",
        func:query1,
        update:false

    },
    {
        name:"Query 2",
        query:"SELECT orderID, shipCountry , customerID, employeeID FROM orders WHERE shipCountry = 'USA'",
        func:query2,
        update:false

    },
    {
        name:"Query 3",
        query:"UPDATE orders SET shipCountry='India' WHERE employeeID=5",
        func:query3,
        update:true

    },
    {
        name:"Query 4",
        query:`INSERT INTO orders (orderID, customerID, employeeID, orderDate, requiredDate, shippedDate, shipVia, freight, shipName, shipAddress, shipCity, shipRegion, shipPostalCode, shipCountry) VALUES (10246,'RITIK',10, '1998-05-04 00:00:00.000','1998-05-18 00:00:00.000','1998-05-06 00:00:00.000', 2,9.87,'Drachenblut Delikatessen','Ave. 5 de Mayo Porlamar',' Colchester','Lara' ,'05454-989','USA')`,
        func:query4,
        update:true

    },
    {
        name:"Query 5",
        query:"DELETE FROM orders WHERE employeeID =10",
        func:query5,
        update:true

    },
]