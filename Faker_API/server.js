
const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});



const createUser= ()=>{
    console.log("Hello")
    const User = {
        password:faker.internet.password(),
        email:faker.internet.email(),
        phone_number:faker.phone.number(),
        lastName:faker.name.lastName(),
        firstName:faker.name.firstName(),
        user_id:faker.datatype.uuid(),

    }
    return User
}

const createCompany = ()=>{
    const Company = {
        id:faker.datatype.uuid(),
        name:faker.company.name(),
        address:{
            street:faker.address.street(),
            city:faker.address.city(),
            state:faker.address.state(),
            zipcode:faker.address.zipCode(),
            country:faker.address.country(),
        },
    }
    return Company
}

app.get("/api/users/new",(req,res)=>{
    console.log("Success")
    res.json(createUser());
})

app.get("/api/companies/new",(req,res)=>{
    console.log("Success")
    res.json(createCompany());
})

app.get("/api/user/company",(req,res)=>{
    console.log("Success")
    res.json([createUser(),createCompany()])
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );