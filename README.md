# React + Vite

# Movie Web App - README

This README outlines the structure and functionality of a movie web panel built using The Movie Database (TMDB) API.

## API Key Setup
To access TMDB APIs, you'll need an API key.
- Use the following key: `c45a857c193f6302f2b5061c3b85e743`
- Alternatively, generate your own API key by visiting [TMDB API Documentation](https://www.themoviedb.org/documentation/api).

## Base URL and Image Path
- Base URL: `https://api.themoviedb.org/3/`
- Image Base URL: `https://image.tmdb.org/t/p/w500`

## API Endpoints

### 1. Get Popular Movies (Home Page)
```
GET https://api.themoviedb.org/3/movie/popular?api_key={API_KEY}&language=en-US&page=1
```

### 2. Get Top Rated Movies (Top Rated Page)
```
GET https://api.themoviedb.org/3/movie/top_rated?api_key={API_KEY}&language=en-US&page=1
```

### 3. Get Upcoming Movies (Upcoming Movie Page)
```
GET https://api.themoviedb.org/3/movie/upcoming?api_key={API_KEY}&language=en-US&page=1
```

### 4. Get Movie Details (Single Movie Detail Page)
```
GET https://api.themoviedb.org/3/movie/{movie_id}?api_key={API_KEY}&language=en-US
```

### 5. Get Movie Cast Details
```
GET https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key={API_KEY}&language=en-US
```

### 6. Search for Movies (Search Page)
```
GET https://api.themoviedb.org/3/search/movie?api_key={API_KEY}&language=en-US&query={movie_name}&page=1
```

## Web Panel Pages

### 1. Home Page / Popular Movie Page
- Displays popular movies fetched from the `/movie/popular` endpoint.
- Includes movie title, poster, and overview.

### 2. Top Rated Page
- Displays top-rated movies using the `/movie/top_rated` endpoint.

### 3. Upcoming Movie Page
- Lists upcoming movies using the `/movie/upcoming` endpoint.

### 4. Single Movie Detail Page
- Shows details about a single movie (title, overview, release date, rating, and cast).

### 5. Searched Movie Page
- Displays movies matching a search query using the `/search/movie` endpoint.
- UI matches the Home Page.

## Global Search in Navbar
- The navigation bar includes a global search field.
- Allows users to search for movies across all pages.

## Image Rendering
- Movie posters and backdrops are rendered using the image base URL and the image path provided in the API response.
- Example:
```
https://image.tmdb.org/t/p/w500/{poster_path}
```

## Project Setup
1. Clone the repository.
2. Install dependencies.
3. Replace the `{API_KEY}` placeholders with your TMDB API key.
4. Run the development server.

## Conclusion
This movie web panel allows users to explore popular, top-rated, and upcoming movies, view detailed information about any movie, and search for specific titles seamlessly.

---

Let me know if you’d like to fine-tune any part of the UI or API integrations! 🚀

 
