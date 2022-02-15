request=require('request');
const url="http://api.weatherstack.com/current?access_key=882d9cba996422d92defab5be12f7f5a&query=New%20York&units=f";
request({url:url},(err,response)=>{
const data=JSON.parse(response.body);
console.log("The current temperature is ",data.current.temperature); console.log("Country is",data.location.country);
});
