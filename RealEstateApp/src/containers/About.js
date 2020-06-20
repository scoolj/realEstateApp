import React, { useState, useEffect, Fragment } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import House from "../assets/images/villa.jpg";

const About = () => {
  const [topSeller, setTopSeller] = useState([]);
  const [realtors, setRealtors] = useState([]);

  useEffect(() => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
    };

    const getTopSeller = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/realtors/topseller"
        );
        setTopSeller(res.data);
      } catch (err) {}
    };
    getTopSeller();
  }, []);

  useEffect(() => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
    };

    const getRealtors = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/realtors/");
        setRealtors(res.data);
      } catch (err) {}
    };
    getRealtors();
  }, []);

  const getAllRealtors = () => {
    let allRealtors = [];
    let results = [];

    realtors.map((realtor) => {
      return allRealtors.push(
        <Fragment key={realtor.id}>
          <div className="about__display">
            <img className="about__display__image" src={realtor.photo} alt="" />
          </div>
          <h3 className="about__realtor">{realtor.name}</h3>
          <p className="about__contact">{realtor.phone}</p>
          <p className="about__contact">{realtor.email}</p>
          <p className="about__aboutt">{realtor.description}</p>
        </Fragment>
      );
    });

    for (let i = 0; i < realtors.length; i += 3) {
      results.push(
        <div key={1} className="row">
          <div className="col-1-of-3">{allRealtors[i]}</div>
          <div className="col-1-of-3">
            {allRealtors[i + 1] ? allRealtors[i + 1] : null}
          </div>
          <div className="col-1-of-3">
            {allRealtors[i + 2] ? allRealtors[i + 2] : null}
          </div>
          n b nb
        </div>
      );
    }
    return results;
  };

  const getTopSeller = () => {
    let result = [];

    topSeller.map((seller) => {
      return result.push(
        <Fragment key={seller.id}>
          <div className="about__display">
            <img className="about__display__image" src={seller.photo} alt="" />
          </div>
          <h3 className="about__topseller">Top Seller</h3>
          <p className="about__contact">{seller.name}</p>
          <p className="about__contact">{seller.phone}</p>
          <p className="about__contact">{seller.email}</p>
          <p className="about__aboutt">{seller.description}</p>
        </Fragment>
      );
    });
    return result;
  };
  return (
    <main className="about">
      <Helmet>
        <title> Realest Estate - About</title>
        <meta name="description" content="About us" />
      </Helmet>
      <header className="about__header">
        <h1 className="about__heading"> We find the perform home for you </h1>
      </header>
      <section className="about__info">
        <div className="row">
          <div className="col-3-of-4">
            <h2 className="about__subheading">
              We find the perfect home for you
            </h2>
            <p className="about__paragraph">
              In the first months of the year the project didn't see any
              activity, but from June on I got hooked. Synchronizing (mostly
              importing) game entries from opensourcegameclones and
              libregamewiki and further processing of the backlog resulted in an
              increase of game entries from 400 in January to ~1300 now. This is
              a huge increase and it should make the OSGL one of the most
              comprehensive lists (if not the one) of open source games
              information.
            </p>
            <div className="about__display">
              <img className="about__display__image" src={House} alt="" />
            </div>
            <p className="about__paragraph">
              In the first months of the year the project didn't see any
              activity, but from June on I got hooked. Synchronizing (mostly
              importing) game entries from opensourcegameclones and
              libregamewiki and further processing of the backlog resulted in an
              increase of game entries from 400 in January to ~1300 now. This is
              a huge increase and it should make the OSGL one of the most
              comprehensive lists (if not the one) of open source games
              information.
            </p>
          </div>
          <div className="col-1-of-4">{getTopSeller()}</div>
        </div>
      </section>
      <section className="about__team">
        <div className="row">
          <h2 className="about__subheading">Meet out awesome team</h2>
        </div>
        {getAllRealtors()}
      </section>
    </main>
  );
};

export default About;
