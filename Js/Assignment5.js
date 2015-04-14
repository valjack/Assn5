function MenuChoice()
 {
    if (document.getElementById("menu").value=="Show Customers")
    {
        document.getElementById("section1").style.visibility = "visible";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value =="Show Order History")
    {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "visible";
        document.getElementById("section3").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value =="Show Order for Customer")
    {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "visible";
    }
    
    else
    {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
        
    }
 }

function getAllCustomersList()
{
    var objRequest = new XMLHttpRequest(); //Create AJAX request object

    //Create URL and Query string
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getAllCustomers";
    
    document.getElementById("customerlist").innerHTML = objRequest;
    

    
    //Checks that the object has returned data
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4&& objRequest.status == 200)
        {
            var output = JSON.parse(objRequest.responseText);
            GenerateOutput(output);
        }
    }
    //Initiate the server request
    objRequest.open("GET",url,true);
    objRequest.send();   
}
function GenerateOutput(result)
{
    var count = 0;
    for (count=0; count < customerlist;count++);
    var displaytext = "<table><tr><th>Customer ID</th><th>Customer Name</th><th>City</th></tr>";
    
    //Loop to extract data from the response object
    for(count=0;count<result.GetAllCustomersResult.length;count++)
    
    {
       displaytext += "<tr><td>" + result.GetAllCustomersResult[count].CustomerID + 
       "</td><td>" + result.GetAllCustomersResult[count].CompanyName +
       "</td><td>" + result.GetAllCustomersResult[count].City +"</td></tr>";
    }
    
    document.getElementById("customerlist").innerHTML = displaytext;
        for (count=0; count < customerlist;count++)
    {
    }
    result+="</table>";
    document.getElementById("displaytext").innerHTML=result
       
}

function getCustOrderHistory()
{
   var objRequest = new XMLHttpRequest(); //Create AJAX request object

    //Create URL and Query string
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getCustomerOrderHistory/";
    url += document.getElementById("customerid").innerHTML = objRequest;
    

    
    //Checks that the object has returned data
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4&& objRequest.status == 200)
        {
            var output = JSON.parse(objRequest.responseText);
            GenerateHistory(output);
        }
    }
    //Initiate the server request
    objRequest.open("GET",url,true);
    objRequest.send();   
}
function GenerateHistory(result)
{
    var count = 0;
    for (count=0; count < custorderhistory;count++);
    var displaytext = "<table><tr><th>Product Name</th><th>Total Product Quantity Ordered</th></tr>";
    
    //Loop to extract data from the response object
    for(count=0;count<result.getCustomersOrderHistory.length;count++)
    
    {
       displaytext += "<tr><td>" + result.getCustomersOrderHistory[count].ProductName + 
       "</td><td>" + result.getCustomersOrderHistory[count].Total +"</td></tr>";
    }
    
    document.getElementById("custorderhistory").innerHTML = displaytext;
        for (count=0; count < custorderhistory;count++)
    {
    }
    result+="</table>";
    document.getElementById("displaytext").innerHTML=result
}

function getOrdersForCust()
{
    var objRequest = new XMLHttpRequest(); //Create AJAX request object

    //Create URL and Query string
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getOrdersForCustomer/";
    url+= document.getElementById("customerid").value;
    document.getElementById("customerorder").innerHTML = objRequest;
    

    
    //Checks that the object has returned data
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4&& objRequest.status == 200)
        {
            var custorder = JSON.parse(objRequest.responseText);
            GenerateCustOrd(custorder);
        }
    }
    //Initiate the server request
    objRequest.open("GET",url,true);
    objRequest.send();
    
}

function GenerateCustOrd(result)
{
    var count = 0;
    for (count=0; count <customerorder;count++);
    var displaytext = "<table><tr><th>Order ID</th><th>Shipping Address</th><th>Shipping City</th><th>Shipping Name</th><th>Shipping Postal Code</th></tr>";   
    
    //Loop to extract data from the response object
    for(count=0;count<result.GetOrdersForCustomerResult.length;count++)
    
    {
       displaytext += "<tr><td>" + result.GetOrdersForCustomerResult[count].OrderDate + 
       "</td><td>" + result.GetOrdersForCustomerResult[count].OrderID +
       "</td><td>" + result.GetOrdersForCustomerResult[count].ShipAddress +
       "</td><td>" + result.GetOrdersForCustomerResult[count].ShipCity +
       "</td><td>" + result.GetOrdersForCustomerResult[count].ShipName +
       "</td><td>" + result.GetOrdersForCustomerResult[count].ShipPostcode +
       "</td><td>" + result.GetOrdersForCustomerResult[count].ShippedDate +
       "</td></tr>";
    }
    
    document.getElementById("customerorder").innerHTML = displaytext;
    for (count=0; count <customerorder;count++)
    {
    }
    result+="</table>";
    document.getElementById("displaytext").innerHTML=result;
}



