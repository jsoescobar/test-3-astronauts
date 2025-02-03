const planetImages: Record<string, string> = {

    uranus: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg",
    neptune: "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg",
    jupiter: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg",
    mars: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
    mercure: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg",
    saturne: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
    terre: "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg",
    venus: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg",
  };
  
/**
 * Retrieves the image URL of a specified planet.
 *
 * @param planetName - The name of the planet for which to get the image URL.
 * @returns The URL of the planet's image. If the planet is not found, returns a placeholder image URL.
 */
export const getPlanetImage = (planetName: string): string => {
  return planetImages[planetName] || "https://via.placeholder.com/150";
};