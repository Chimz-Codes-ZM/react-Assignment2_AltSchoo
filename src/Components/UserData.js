import React, { useState, useEffect } from 'react';

const randomUserURL = 'https://randomuser.me/api/?results=100';

const UserData = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(randomUserURL);
        const data = await response.json();

        setData(data);
        setIsLoaded(true);
      } catch (e) {
        setError(error);
        setIsLoaded(true);
      }
    };
    fetchData();
  }, []);

  const PER_PAGE = 10;
  const total = data?.results?.length;
  const pages = 5;
  const skip = page * PER_PAGE - PER_PAGE;

  if (error) return <div>Error: {error.message}</div>;
  if (!isLoaded) return <div>...loading</div>;
  else {
    return (
      <div className="user-data">
        <h1>Fetching Data</h1>

        <div>
          {data.results.slice(skip, skip + PER_PAGE).map((user, index) => {
            const name = ` ${user.name.title} ${user.name.first} ${user.name.last}`;
            const image = user.picture.medium;
            return (
              <div className="profiles">
                <li key={name.toLowerCase().replaceAll(' ', '')}>
                  {`${index + 1}. 
               ${name}`}{' '}
                  <img src={image} />
                </li>
              </div>
            );
          })}
          <div className="pagButtons">
            <button
              disabled={page <= 1}
              onClick={() => setPage((prev) => prev - 1)}
            >
              previous{' '}
            </button>

            <p>
              {' '}
              Pages: {page} of {pages}{' '}
            </p>

            <button
              disabled={page >= pages}
              aria-disabled={page >= pages}
              onClick={() => setPage((prev) => prev + 1)}
            >
              next{' '}
            </button>
          </div>
        </div>
        <div>
          {' '}
          {Array.from({ length: pages }, (value, index) => index + 1).map(
            (each) => (
              <button onClick={() => setPage(each)}>{each}</button>
            )
          )}
        </div>
      </div>
    );
  }
};
export default UserData;
// ${<img src={user.picture.medium}
