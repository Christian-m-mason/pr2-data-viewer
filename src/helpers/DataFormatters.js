export const wellDataFormatter = (pr2DataRaw) => {
  const plateRowStartPoints = [ 33,43,53,63,73,83,93,103]
  const plateDataArray = []
  // Convert Raw text string to array of each line
  const pr2Array = pr2DataRaw.toString().split('\n')
  
  for(let i = 0; i < plateRowStartPoints.length; i++) {
    plateDataArray.push(rowformatter(plateRowStartPoints[i], pr2Array))
  }
  return plateDataArray
}


const rowformatter = (startIndex, arr) => {
  let linesArray = []
  let plateRow = []
  for (let i = startIndex; i < startIndex + 9; i++) {
    linesArray.push(arr[i].trim().split('\t'))
  }
  linesArray[0].shift()
  for( let k = 0; k < 9; k++) {
    let well = []
    for( let j = 0; j < linesArray.length; j++) {
      well.push(linesArray[j][k])
    }
    plateRow.push(well)
  }
  return plateRow
}

