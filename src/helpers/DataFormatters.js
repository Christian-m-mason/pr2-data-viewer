export const plateDataFormatter = (pr2DataRaw) => {
  // Convert Raw text string to array of each line
  const pr2Array = pr2DataRaw.toString().split('\n');
  //Index of each row start
  const rowStartPoints = [33,43,53,63,73,83,93,103]
  
  const wellDataArray = []
  //Pushing formatted arrays into wellData
  for(let i = 0; i < rowStartPoints.length; i++) {
    let temp = rowformatter(rowStartPoints[i],pr2Array)
    if(temp[i][1]) {
      wellDataArray.push(temp)
    }
  }

  //Data to be exported, there has to be a better way
  const plateData = {
     digitalSignature: pr2Array[0].split(':')[1].trim(),
     fileName: pr2Array[1].split('\t')[1].trim(),
     runName: pr2Array[2].split('\t')[1].trim(),
     stackId: pr2Array[3].split('\t')[1].trim(),
     plateNumber: pr2Array[4].split('\t')[1].trim(),
     barcode1: pr2Array[5].split('\t')[1].trim(),
     type: pr2Array[8].split('\t')[1].trim(),
     wellsPerRow: pr2Array[9].split('\t')[1].trim(),
     welllPerCol: pr2Array[10].split('\t')[1].trim(),
     spotsPerWell: pr2Array[11].split('\t')[1].trim(),
     detParam: pr2Array[12].split('\t')[1].trim(),
     creation: pr2Array[13].split('\t')[1] + pr2Array[13].split("\t")[2],
     readTime: pr2Array[14].split('\t')[1] + pr2Array[14].split("\t")[2],
     version: pr2Array[15].split('\t')[1].trim(),
     user: pr2Array[17].split('\t')[1].trim(),
     serialNumber: pr2Array[20].split('\t')[1].trim(),
     model: pr2Array[21].split('\t')[1].trim(),
     orientation: pr2Array[23].split('\t')[1].trim(),
     assays: pr2Array[24].split('\t')[1],
     visibleSpots: pr2Array[25].split('\t')[1],
     rows: wellDataArray
  }
  return plateData
}


const rowformatter = (startIndex, arr) => {
  let linesArray = []
  let plateRow = []
  for (let i = startIndex; i < startIndex + 9; i++) {
    linesArray.push(arr[i].trim().split('\t'))
  }
  for( let k = 0; k < 9; k++) {
    let well = []
    for( let j = 0; j < linesArray.length; j++) {
      if(!linesArray[j][k]) { break; }
      well.push(linesArray[j][k])
    }
    plateRow.push(well)
  }
  return plateRow
}



