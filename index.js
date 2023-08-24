const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = batteryBatches.reduce(function(totalBatteries, batchCount) {
    return totalBatteries + batchCount; }, 0);

    //uses same layout as incomingStudents.reduce(function (showcases, student)