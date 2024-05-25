import { get, reject } from "lodash";
import { createSelector } from "reselect";

const allData = (state) => get(state, "medical.allMedical.data", []);
const deleteData = (state) => get(state, "medical.deleteMedical.data", []);
const account = (state) => get(state, "provider.account");
const events = (state) => get(state, "medical.events");
const openData = (state) => {
  const all = allData(state);
  const delet = deleteData(state);
  const openData = reject(all, (data) => {
    const dataDeleted = delet.some(
      (o) => o.recordId.toString() === data.recordId.toString()
    );
    return dataDeleted;
  });
  return openData;
};
export const dataBookSelector = createSelector(openData, (data) => {
  data = decorateOpenData(data);
  return data;
});
const decorateOpenData = (datas) => {
  return datas.map((data) => {
    data = decorateOrder(data);
    return data;
  });
};
export const decorateOrder = (data) => {
  const precision = 100000;
  let recordIdNew = Math.round(data.recordId * precision) / precision;
  let ageNew = Math.round(data.age * precision) / precision;
  let dateOutput = makeDateTIme(data.timestamp);
  return {
    ...data,
    recordIdNew,
    ageNew,
    dateOutput,
  };
};

function makeDateTIme(timestamp) {
  let date = new Date(Date.parse(timestamp));
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const dateOutput =
    day +
    "-" +
    month +
    "-" +
    year +
    "  " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds;
  return dateOutput;
}

export const myEventsSelector = createSelector(
  account,
  events,
  (account, events) => {
    return events;
  }
);
