import { createContext, useContext, useState, useEffect } from "react";
import { db } from "../firebase";
import { 
  collection, 
  onSnapshot, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc 
} from "firebase/firestore";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data in real-time from Firestore
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "projects"), (snapshot) => {
      const projectsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProjects(projectsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Add Project
  const addProject = async (project) => {
    await addDoc(collection(db, "projects"), project);
  };

  // Update Project
  const updateProject = async (id, updatedProject) => {
    const projectRef = doc(db, "projects", id);
    await updateDoc(projectRef, updatedProject);
  };

  // Delete Project
  const deleteProject = async (id) => {
    const projectRef = doc(db, "projects", id);
    await deleteDoc(projectRef);
  };

  return (
    <DataContext.Provider value={{ projects, addProject, updateProject, deleteProject, loading }}>
      {!loading && children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}