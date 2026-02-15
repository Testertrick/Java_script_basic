let responsecode=302;

if (responsecode === 200)
{
    console.log("Test Passed");
}
else if(responsecode===404)
{
    console.log("Page Not Found");
}
else if(responsecode === 500)
{
    console.log("Server Error");
}
else
{
    console.log("Unknown Status");
}