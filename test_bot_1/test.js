const fs = require("fs");

const saveData = () => {
    //TO DO, WRITE CODE THAT SAVES THE NEW DATA INTO THE custom_data.json
    const data_to_write = JSON.stringify(temporary_data);
    fs.writeFileSync(__dirname + "/custom_data.json", data_to_write);
}

const custom_data = fs.readFileSync(__dirname + "/custom_data.json");

let temporary_data = JSON.parse(custom_data.toString())

console.log(temporary_data);

temporary_data.smart_student = "Turnidge";


saveData();
// UTILITY FUNCTIONS
console.log(custom_data.toString());
