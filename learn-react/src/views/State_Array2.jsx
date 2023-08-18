import { useState } from 'react';

function State_Array2() {
  const [movieList] = useState([
    { id: 1, title: '오펜하이머' },
    { id: 2, title: '엘리멘탈' },
    { id: 3, title: '나홀로집에' },
    { id: 4, title: '지구를지켜라' },
    { id: 5, title: '피아니스트' },
    { id: 6, title: '집으로' },
    { id: 7, title: '아워 엘리멘탈 쇼!' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchedMovieList = movieList.filter((movie) =>
    movie.title.includes(searchTerm)
  );

  return (
    <div className="flex flex-col items-center my-20">
      <h2>리액트 역사</h2>
      <div className="py-4">
        <label htmlFor="search" className="sr-only">
          검색
        </label>
        <input
          value={searchTerm}
          onChange={handleSearch}
          type="search"
          name="search"
          id="search"
          className="bg-gray-200 rounded-md border-none outline-none h-7 font-semibold"
        />
      </div>
      <ul>
        {searchedMovieList.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default State_Array2;
