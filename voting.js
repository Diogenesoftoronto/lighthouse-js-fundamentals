function chooseStations(stations) {
  let goodStation = [];
  stations.forEach(function (station) {
    if (station.includes("school") || station.includes("community centre")) {
      const capacity = station[1];
      if (capacity >= 20) {
        goodStation.push(station[0]);
      }
    }
  });
  return goodStation;
}
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(stations))