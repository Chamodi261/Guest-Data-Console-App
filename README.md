# Guest Data Console App Using Node

## Overview

This console application is designed to manage guest data efficiently. It provides CRUD (Create, Read, Update, Delete) operations for guest information. The key details collected for each guest include:

- Customer's Name
- Address
- Contact Number
- Visiting Date
- Sign-in Time
- Sign-out Time

## Installation

Ensure you have Node.js installed on your machine. Clone this repository and navigate to the project directory in your terminal. Run the following command to install the necessary dependencies:

```bash
npm install
```

## Usage

### 1. Adding a New Guest

To add a new guest, run the following command:

```bash
node app.js add
```

You will be prompted to enter the guest details, including name, address, contact number, visiting date, sign-in time, and sign-out time.

### 2. Updating Guest Information

To update guest information, run the following command:

```bash
node app.js update <guest_id>
```

Replace `<guest_id>` with the actual ID of the guest you want to update. You will be prompted to enter the updated details.

### 3. Deleting a Guest

To delete a guest, run the following command:

```bash
node app.js delete <guest_id>
```

Replace `<guest_id>` with the ID of the guest you want to delete.

### 4. Reading Guest Details

To read the details of a specific guest or view the entire guest list, run the following command:

```bash
node app.js read [guest_id]
```

Replace `[guest_id]` with the ID of the guest you want to view. If no ID is provided, the application will display the details of all guests.

## Example

```bash
# Add a new guest
node app.js add

# Update guest details
node app.js update 1

# Delete a guest
node app.js delete 2

# Read guest details
node app.js read
```


Happy guest management!
