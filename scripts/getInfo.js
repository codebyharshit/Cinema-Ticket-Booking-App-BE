import dotenv from "dotenv/config";

export const initMovieInfo = async () => {
  try {

    const resultantArray = [];
    const resultantObject = {};

    resultantArray.push("FastX");
    resultantArray.push("https://www.indiablooms.com/showbiz_pic/2017/TOMBRAIDER-1505820047.jpg");
    resultantArray.push("Devin");
    resultantArray.push("WinDiesel");
    resultantArray.push("Action");
    resultantArray.push(20/05/2023);
    resultantArray.push("12:00");
    resultantArray.push("https://youtu.be/tST-F75I2To");

    resultantObject.title = resultantArray[0];
    resultantObject.poster = resultantArray[1];
    resultantObject.director = resultantArray[2];
    resultantObject.actor = resultantArray[3];
    resultantObject.genre = resultantArray[4];
    resultantObject.release_date = resultantArray[5];
    resultantObject.running_time = resultantArray[6];
    resultantObject.trailer = resultantArray[7];

    return resultantObject;
  } catch (err) {
    logger.error(err);
    return "Info not found";
  }
};
