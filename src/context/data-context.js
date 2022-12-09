import { createContext, useContext, useState, useEffect } from "react";
import { db } from "../firebase-config";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [tasklist, setTasklist] = useState([]);
  const [taskInputs, setTaskInputs] = useState({
    title: "",
  });
  const [focusDuration, setFocusDuration] = useState(1);
  const [breakDuration, setBreakDuration] = useState(1);
  const [focusMode, setFocusMode] = useState(true);
  const [breakMode, setBreakMode] = useState(false);

  const taskCollection = collection(db, "tasks");
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getTasks = async () => {
      const data = await getDocs(taskCollection);
      setTasklist(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getTasks();
    // eslint-disable-next-line
  }, []);

  const createTask = async () => {
    const docRef = await addDoc(taskCollection, {
      title: taskInputs.title,
    });
    setTasklist((val) => [
      ...val,
      {
        id: docRef.id,
        title: taskInputs.title,
      },
    ]);
    setTaskInputs({
      title: "",
    });
  };

  const deleteTask = async (id) => {
    const selectedDoc = doc(db, "tasks", id);
    await deleteDoc(selectedDoc);
    const listAfterDelete = tasklist.filter((task) => task.id !== id);
    setTasklist(listAfterDelete);
  };

  const editTask = async (id) => {
    const selectedDoc = doc(db, "tasks", id);
    const dataToUpdate = {
      title: taskInputs.title,
    };
    await updateDoc(selectedDoc, dataToUpdate);
    const listAfterUpdate = tasklist.map((ele) =>
      ele.id === id ? { ...taskInputs, id: id, updatedOn: new Date() } : ele
    );
    setTasklist(listAfterUpdate);
    setIsEditing(false);
    setTaskInputs({
      title: "",
    });
    navigate("/");
  };

  return (
    <DataContext.Provider
      value={{
        tasklist,
        setTasklist,
        taskInputs,
        setTaskInputs,
        createTask,
        deleteTask,
        editTask,
        isEditing,
        setIsEditing,
        focusDuration,
        setFocusDuration,
        breakDuration,
        setBreakDuration,
        focusMode,
        setFocusMode,
        breakMode,
        setBreakMode
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
