const express = require("express");
const Movie = require("../models/moviemodel");

const router = express.Router();

// Create a movie
router.post("/", async (req, res) => {
  const { title, rating, genre, releaseYear, description } = req.body;

  const newMovie = new Movie({
    title,
    rating,
    genre,
    releaseYear,
    description,
  });

  try {
    const savedMovie = await newMovie.save();
    res.status(201).json(savedMovie);
  } catch (error) {
    res.status(500).json({ message: "Error creating movie", error });
  }
});

// Get all movies with filtering, sorting, and pagination
router.get("/", async (req, res) => {
  const { q, rating, sortBy, page = 1, limit = 10 } = req.query;

  const query = {};

  if (q) {
    query.title = { $regex: q, $options: "i" }; // Case-insensitive search
  }
  if (rating) {
    query.rating = rating;
  }

  const sortOptions = {};
  if (sortBy) {
    sortOptions[sortBy] = 1; // Ascending sort by field
  }

  try {
    const movies = await Movie.find(query)
      .sort(sortOptions)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const totalMovies = await Movie.countDocuments(query);

    res.status(200).json({
      movies,
      totalMovies,
      totalPages: Math.ceil(totalMovies / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving movies", error });
  }
});

// Get a movie by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const movie = await Movie.findById(id);

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving movie", error });
  }
});

// Update a movie
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedMovie = await Movie.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!updatedMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.status(200).json(updatedMovie);
  } catch (error) {
    res.status(500).json({ message: "Error updating movie", error });
  }
});

// Delete a movie
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedMovie = await Movie.findByIdAndDelete(id);

    if (!deletedMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.status(200).json({ message: "Movie deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting movie", error });
  }
});

module.exports = router;
 