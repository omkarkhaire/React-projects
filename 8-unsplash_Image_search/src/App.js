import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { BsFillImageFill } from "react-icons/bs";
import Photo from "./Photo";

const clientId = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`; //best way to hide api keys

const mainurl = "https://api.unsplash.com/photos/";
const search = "https://api.unsplash.com/search/photos/";

function App() {
  const [loading, setloading] = useState(false);
  const [photos, setphotos] = useState([]);
  const [page, setpage] = useState(0);
  const [query, setquery] = useState("");

  const fetchimages = async () => {
    setloading(true);
    let url;
    const urlpage = `&page=${page}`;
    const urlquery = `&query=${query}`;
    if (query) {
      url = `${search}${clientId}${urlpage}${urlquery}`;
    } else {
      url = mainurl + clientId + urlpage;
    }

    try {
      const data = await fetch(url);
      const realdata = await data.json();
      console.log(page);
      setphotos((olddata) => {
        if (query && page === 1) {
          console.log(realdata);
          return realdata.results;
        } else if (query) {
          console.log(realdata);

          return [...olddata, ...realdata.results];
        } else {
          return [...olddata, ...realdata];
        }
      });
      setloading(false);
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    console.log("page change");
    fetchimages();
  }, [page]);

  //for scroll effect
  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (
        loading === false &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
      ) {
        //when we are not loading and
        //when we will get innerheight+scrolly>=scrollHeight means we have reached the end of page and we need to fetch more images so we will set scrollheight-2 so that we will fetch data earlier 2 px before reaching end
        console.log("worked");
        setpage((old) => {
          return old + 1;
        });
      }
    });
    return () => window.removeEventListener("scroll", event);
  }, []);

  const handelsubmit = (e) => {
    e.preventDefault();
    console.log("clicked" + page);
    setpage(1);
    // fetchimages();
    //when pages changes fetch data is automatically called
  };

  return (
    <div className="main-container">
      <div className="heading">
        <BsFillImageFill className="logo" />
        <h1>Imager</h1>
      </div>

      <div className="search" onSubmit={handelsubmit}>
        <form>
          <input
            type="text"
            placeholder="search"
            className="search-input"
            value={query}
            onChange={(e) => setquery(e.target.value)}
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
      </div>
      {/* *************** */}
      <div className="photos">
        <div className="photocenter">
          {photos.map((photo, index) => {
            return <Photo key={index} {...photo} />;
          })}
        </div>
        {loading && <h2>loading....</h2>}
      </div>
    </div>
  );
}

export default App;
