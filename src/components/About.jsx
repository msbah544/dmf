import React from "react";
import { useEffect, useState } from "react";

const About = () => {
  const [quote, setQuote] = useState(null);

  //Set up Date
  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const currentDate = `${day}/${month}/${year}`;
  //fetch quote on click
  const fetchQuote = async () => {
    setQuote(null);
    const response = await fetch("https://favqs.com/api/qotd");

    if (response.ok) {
      const result = await response.json();
      setQuote(result);
      //console.log(result);
    } else {
      console.log("an error occured while attempting to fetch quote!");
    }
  };

  //fetch quote using useEffect hook
  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch("https://favqs.com/api/qotd");

      if (response.ok) {
        const result = await response.json();
        setQuote(result);
        //console.log(result);
      } else {
        console.log("an error occured");
      }
    };
    fetchQuote();
  }, []);
  return (
    <div id="about" className="row mx-md-5 my-5">
      <div className="col-sm-5 mb-3">
        <h4 className="fw-bold text-primary">About The Association</h4>
        <div className="fw-bold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
          eveniet enim quidem, asperiores ipsum tenetur eaque quam sequi
          voluptates veritatis, debitis magni aut exercitationem laboriosam esse
          qui non nam alias. Quibusdam, laborum harum eius excepturi nam
          tempore! Veniam, nam ea? A facilis quia eum ullam perferendis nemo
          alias magni esse!
        </div>
      </div>
      <div className="col-sm-5">
        <div id="quote">
          <h4 className="fw-bold">
            Quote of the day{" "}
            <div
              class="spinner-grow spinner-grow-sm text-warning"
              role="status"
            >
              <span class="visually-hidden">Loading...</span>
            </div>{" "}
            <h6 className="text-muted">{currentDate}</h6>
          </h4>
          <div className="lead text-muted">
            {quote ? (
              <div>
                {quote.quote &&
                  quote.quote.tags.map((tag) => (
                    <li className="text-primary" key={tag}>
                      #{tag}
                    </li>
                  ))}
                <div>"{quote && quote.quote && quote.quote.body}"</div>
              </div>
            ) : (
              <div class="spinner-grow text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            )}

            <div class="fw-bold">
              __{" "}
              <cite title="Source Title">
                {quote && quote.quote && quote.quote.author}
              </cite>
            </div>
            <div onClick={fetchQuote}>
              <a href="#quote">see another quote</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
