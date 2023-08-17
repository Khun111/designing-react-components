import { useState, useEffect } from "react";

export const REQUEST_STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  FAILURE: 'failure',
}
const useRequestDelay = (delayTime=1000, initalData=[]) => {
    const [data, setData] = useState(initalData);
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [error, setError] = useState('');

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  useEffect(async () => {
    try {
      await delay(delayTime );
      // throw 'Had Error'
      setRequestStatus(REQUEST_STATUS.SUCCESS);
      setData(data);
    } catch (e) {
      setRequestStatus(REQUEST_STATUS.FAILURE);
      setError(e);
    }
  }, [])

  function updateRecord (record, doneCallback) {
    const originalRecords = [...data];
    const newRecords = data.map((rec) => {
      return rec.id === record.id ? record : rec;
    });
    async function delayFunction () {
      try {
        setData(newRecords)
        await delay(delayTime);
        if (doneCallback) doneCallback()
      } catch (error) {
        console.log('error thrown inside deLayfunction', error);
        if (doneCallback) doneCallback()
        setData(originalRecords);
      }
    }
    delayFunction();
  }
  function insertRecord (record, doneCallback) {
    const originalRecords = [...data];
    const newRecords = [record, ...data];
    async function delayFunction () {
      try {
        setData(newRecords)
        await delay(delayTime);
        if (doneCallback) doneCallback()
      } catch (error) {
        console.log('error thrown inside deLayfunction', error);
        if (doneCallback) doneCallback()
        setData(originalRecords);
      }
    }
    delayFunction();
  }
  function deleteRecord (record, doneCallback) {
    const originalRecords = [...data];
    const newRecords = data.filter((rec) => {
      return rec.id !== record.id;
    });
    async function delayFunction () {
      try {
        setData(newRecords)
        await delay(delayTime);
        if (doneCallback) doneCallback()
      } catch (error) {
        console.log('error thrown inside deLayfunction', error);
        if (doneCallback) doneCallback()
        setData(originalRecords);
      }
    }
    delayFunction();
  }
  return {requestStatus, updateRecord, insertRecord, deleteRecord, error, data}
}
export default useRequestDelay;