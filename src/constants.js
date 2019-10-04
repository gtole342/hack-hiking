export const getTrails = (lat, lng, maxDistance) => {
  return `https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lng}&maxDistance=${maxDistance}&key=200608509-80447dc50ba92f9dc07975e2fcce605d`
}

export const getAnimals = (lat, lng) => {
  const latRange = `${lat-.12},${lat+.12}`
  const lngRange =`${lng-.12}, ${lng+.12}`
  return `https://api.gbif.org/v1/occurrence/search?decimalLongitude=${lngRange}&decimalLatitude=${latRange}&kingdomKey=1&limit=300`
}