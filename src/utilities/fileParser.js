export const parseText = (textFile) => {
  /* Returns JSON object of the chat text
  {
   <year/month/day> : {
     "date": <>,
     "msgs": [
    "timestamp": <>,
    "sender" : <>,
    "text": <>
   ],...},
   date2: {[]},...
  }
  
  */

  const parseDate = (textLine) => {
    /* Function to parse the Date value in the text as YYYY/MM/DD  
    Input:
      Date string in the format "DD/MM/YYYY"
  
    Return Value: 
      [date Object, date String]
    */
    const isValidDate = (d) => d instanceof Date && !isNaN(d);

    let [day, month, year] = textLine.split("/");
    let datePart = `${year}/${month}/${day}`;
    return isValidDate(new Date(datePart)) &&
      day !== undefined &&
      month !== undefined &&
      year !== undefined
      ? [new Date(datePart).toString(), datePart]
      : [null, datePart];
  };
  let lines = textFile.split("\n");

  let retObj = lines.slice(-100).reduce((result, line, num) => {
    let timestamp, sender, text, msg;

    let [date, datePart] = parseDate(line.split(",")[0]);

    if (date !== null) {
      if (line.split(",")[1] === undefined) {
        console.log(num, line, date);
      }
      [timestamp, msg] = line.split(",")[1].split(" - ");
      [sender, text] = msg.split(":");

      if (sender === undefined || text === undefined) {
        return result;
      }

      [timestamp, sender, text] = [
        timestamp?.trim(),
        sender?.trim(),
        text?.trim(),
      ];

      let msgObj = {
        timestamp: timestamp,
        sender: sender,
        text: text,
      };
      if (result[datePart] === undefined) {
        result[datePart] = {
          date: date,
          msgs: [msgObj],
        };
      } else {
        result[datePart]["msgs"].push(msgObj);
      }
    }
    return result;
  }, {});
  return retObj;
};
