//02 -> Save data into the fiel. - guestdb

// Create the function for adding the guest

// ********Start the Project********

const fs = require('fs');

const db_file = "data.json";
//Guest -> id, name, address, contact_no, vistit_date, sign_in_time, sign_out_time
//AddGuest UpdateGuest DeleteGuest ReadGuest ListGuest

const addGuest = (name, address, contact_no, visi_date, sign_in_time, sign_out_time) => {
    const guests = loadGuest(); //to load previous data
    const length = guests.length;

    let id = 1;

    if(length > 0 ){
        id = guests[length-1].id + 1;
    }
    guests.push({
        id,
        name,
        address,
        contact_no,
        visi_date,
        sign_in_time,
        sign_out_time
    });
    //Give the save command
    saveGuest(guests);

    console.log("Data Saved!!");
} 

const updateGuest = (id, name, address, contact_no, visi_date, sign_in_time, sign_out_time) => {
    const guests = loadGuest();
    const guestIndex = guests.findIndex((guest) => guest.id === id);
    if (guestIndex != -1){
        const guest = guests[guestIndex]; 
       
        guest.name = name ? name: guest.name;
        guest.address = address ? address: guest.address;
        guest.contact_no = contact_no ? contact_no: guest.contact_no;
        guest.visi_date = visi_date ? visi_date: guest.visi_date;
        guest.sign_in_time = sign_in_time ? sign_in_time: guest.sign_in_time;
        guest.sign_out_time = sign_out_time ? sign_out_time: guest.sign_out_time;


        console.log("Record Updated !!", id);
        saveGuest(guests);
    } 

    else{
        console.log("No Record Fond!!");
    }
}

const deleteGuest = (id) => {
    const guests = loadGuest();
    const newGuests = guests.filter((guest) => {
        return guest.id!= id;
    });

    if (guests.length > newGuests.length){
        saveGuest(newGuests); //Save the filter's data
        console.log("Deleted !!", id);
    }
    else{
        console.log("No Record Found");
    }
    
} 

const readGuest = (id) => {
    const guests = loadGuest();
    const guest = guests.find((guest) => {
        return guest.id === id;
    }); // Find or Read the Guest
    
    if (guest){
        console.log(guest);
    }
    else{
        console.log("No Records Found!!");
    }
} 

const listGuest = () => {
    console.log("List the All Guest List!");
    const guests = loadGuest();
    guests.forEach((guest) => {
        console.log(guest)
    });
} 

//Save Command
const saveGuest = (guests) => {
    const dataJSON = JSON.stringify(guests);
    fs.writeFileSync(db_file, dataJSON);
}

//To load data
const loadGuest = () => {

    try{
        const dataBuffer = fs.readFileSync(db_file);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }

    catch(e){
        return [];
    }
    
}
// Export the variable
module.exports = {
    addGuest,
    updateGuest,
    deleteGuest,
    readGuest,
    listGuest
};

