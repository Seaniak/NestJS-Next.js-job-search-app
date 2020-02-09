import { createContext, useState } from 'react';
import fetch from 'isomorphic-unfetch';

export const Store = createContext();

export const StoreContextProvider = (props) => {

  const [searchRes, setSearchRes] = useState([]);

  const [showSpinner, setShowSpinner] = useState(false);

  const searchJobs = async (search, location) => {
    setSearchRes([]);
    toggleLoadingSpinner(true);
    const res = await fetch(`http://localhost:3003/jobsearch/${search}/gb/${location}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    const searchRes = await res.json();
    setSearchRes(searchRes.results);
    toggleLoadingSpinner(false);
  }

  const toggleLoadingSpinner = bool => setShowSpinner(bool);

  return (
    <Store.Provider value={{ searchRes, searchJobs, showSpinner, toggleLoadingSpinner }}>
      {props.children}
    </Store.Provider>
  )
}