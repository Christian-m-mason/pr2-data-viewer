export const PLATE_UPLOADED = "plate_uploaded";

export const uploadPlate = plateDataObj => ({
  type: PLATE_UPLOADED,
  plateDataObj
});
