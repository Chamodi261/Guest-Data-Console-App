// import chalk from 'chalk'; // Use this line for ES modules
// import * as chalk from 'chalk'; // Alternative syntax to import everything

const { argv } = require("yargs");
const yargs = require("yargs");
const database = require("./guestdb.js"); // Use this line for CommonJS modules
// import * as database from "./guestdb.cjs"; // Alternative syntax for ES modules

//01 -> Get input from console.

console.log("Welcome to Guest Data Console App ^_^");
yargs.version("1.1.0");

//Add Details
yargs.command({
    command: 'add',
    describe: 'To add a guset details.',
    builder: {
        name: {
            describe: 'Name of the guest',
            demandOption: true, //To required the field
            type: "string"
        },
        address: {
            describe: 'Address of the guest',
            demandOption: true,
            type: "string"
        },
        contact_no: {
            describe: 'Contact Number of the guest',
            demandOption: true,
            type: "number"
        },
        visi_date: {
            describe: 'Date of the guest visit',
            demandOption: true,
            type: "string"
        },
        sign_in_time: {
            describe: 'Time of the guest Enter',
            demandOption: true,
            type: "string"
        },
        sign_out_time: {
            describe: 'Time of the guest Out',
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){
        database.addGuest(argv.name, argv.address, argv.contact_no, argv.visi_date, argv.sign_in_time, argv.sign_out_time);
    
    }
});

//Update Details
yargs.command({
    command: 'update',
    describe: 'To update a guset details.',
    builder: {
        id: {
            describe: "ID",
            demandOption: true,
            type: "number"
        },
        name: {
            describe: 'Name of the guest',
            type: "string" 
        },
        address: {
            describe: "Address of the guest",
            type: "string"
        },
        contact_no: {
            describe: "Contact Number of the guest",
            type: "number"
        },
        visi_date: {
            describe: 'Date of the guest visit',
            type: "string"
        },
        sign_in_time: {
            describe: 'Time of the guest Enter',
            type: "string"
        },
        sign_out_time: {
            describe: 'Time of the guest Out',
            type: "string"
        }
    },
    handler(argv){
        database.updateGuest(argv.id, argv.name, argv.address, argv.contact_no, argv.visi_date, argv.sign_in_time, argv.sign_out_time);
    }
});

//Delete Details
yargs.command({
    command: 'delete',
    describe: 'To Delete a guset details.',
    builder: {
        id: {
            describe: 'ID',
            demandOption: true,
            type: "number" 
        }
    },
    handler(argv){
        database.deleteGuest(argv.id);
    }
});

//Read Details
yargs.command({
    command: 'read',
    describe: 'To Read a guset details.',
    builder: {
        id: {
            describe: 'id',
            demandOption: true,
            type: "number" 
        }
    },
    handler(argv){
        database.readGuest(argv.id);
    }
});

//List Details
yargs.command({
    command: 'list',
    describe: 'To List a guset details.',
    
    handler(){
        database.listGuest();
    }
});


yargs.parse();




