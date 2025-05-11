export const getPoints = (minutes: number) => {
  const Unit = 1; // 1 Point per 1 Minute

  if (minutes >= 180) {
    return 250 + remaingMinutes(minutes, 180) * Unit;
  } else if (minutes >= 120) {
    return 145 + remaingMinutes(minutes, 120) * Unit;
  } else if (minutes >= 90) {
    return 110 + remaingMinutes(minutes, 90) * Unit;
  } else if (minutes >= 60) {
    return 75 + remaingMinutes(minutes, 60) * Unit;
  } else if (minutes >= 45) {
    return 55 + remaingMinutes(minutes, 45) * Unit;
  } else if (minutes >= 30) {
    return 35 + remaingMinutes(minutes, 30) * Unit;
  } else if (minutes >= 1) {
    return minutes * Unit;
  } else {
    return 0; // for 0 or negative minutes
  }
};

export const remaingMinutes = (minutes: number, substract: number) => {
  if (minutes > substract) {
    return minutes - substract;
  } else {
    return 0;
  }
};
