let barcode1 = "";

export const plateDataFormatter = pr2DataRaw => {
  let pr2Array = pr2DataRaw.toString().split("\n");
  barcode1 = pr2Array[5].split("\t")[1].trim();
  return {
    digitalSignature: pr2Array[0].split(":")[1].trim(),
    fileName: pr2Array[1].split("\t")[1].trim(),
    runName: pr2Array[2].split("\t")[1].trim(),
    stackId: pr2Array[3].split("\t")[1].trim(),
    plateNumber: pr2Array[4].split("\t")[1].trim(),
    barcode1: pr2Array[5].split("\t")[1].trim(),
    type: pr2Array[8].split("\t")[1].trim(),
    wellsPerRow: pr2Array[9].split("\t")[1].trim(),
    welllPerCol: pr2Array[10].split("\t")[1].trim(),
    spotsPerWell: pr2Array[11].split("\t")[1].trim(),
    detParam: pr2Array[12].split("\t")[1].trim(),
    creation: pr2Array[13].split("\t")[1] + pr2Array[13].split("\t")[2],
    readTime: pr2Array[14].split("\t")[1] + pr2Array[14].split("\t")[2],
    version: pr2Array[15].split("\t")[1].trim(),
    user: pr2Array[17].split("\t")[1].trim(),
    serialNumber: pr2Array[20].split("\t")[1].trim(),
    model: pr2Array[21].split("\t")[1].trim(),
    orientation: pr2Array[23].split("\t")[1].trim(),
    assays: pr2Array[24].split("\t")[1],
    visibleSpots: pr2Array[25].split("\t")[1]
  };
};

export const wellDataPuller = (pr2DataRaw, row) => {
  let pr2Array = pr2DataRaw.toString().split("\n");
  let rawRows = getRowDataFromTextFile(pr2Array, row);
  let rowLabel = rawRows[0].shift().trim();
  let wells = [];
  for (let j = 0; j < 12; j++) {
    let tmp = [];
    let well = {};
    for (let i = 0; i < 9; i++) {
      let val = parseInt(rawRows[i][j]);
      tmp.push(val);
    }
    well.plateId = barcode1;
    well.row = rowLabel;
    well.label = "";
    well.group = "";
    well.include = true;
    well.col = j + 1;
    well.botA = tmp[0];
    well.spotTwo = tmp[1];
    well.ricin = tmp[2];
    well.spotFour = tmp[3];
    well.pcH = tmp[4];
    well.spotSix = tmp[5];
    well.seb = tmp[6];
    well.spotEight = tmp[7];
    well.pcL = tmp[8];
    wells.push(well);
  }

  return wells;
};

const getRowDataFromTextFile = (arr, rowStart) => {
  let rows = [];
  for (let i = 0; i < 9; i++) {
    let tmp = arr[rowStart].trim().split("\t");
    rows.push(tmp);
    rowStart++;
  }
  return rows;
};

export const getAllWellData = arr => {
  let allWells = [];
  let rowStart = 33;
  for (let i = 0; i < 8; i++) {
    allWells.push(wellDataPuller(arr, rowStart));
    rowStart += 10;
  }
  return allWells.flat();
};
