/* Dado el siguiente código usa forof para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no tienen que repetirse. Para filtrar las categorías puedes ayudarte de la función .includes(). */

const movies = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "Shrek",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

const listCategories = [];

for (const movie of movies) {
  for (const category of movie.categories) {
    if (!listCategories.includes (category)){
      listCategories.push (category);
    }
  }
}

console.log (listCategories);