// Only year of a date
export function yearDate(date) {
  const formatDate = new Date(date);
  const year = formatDate.getFullYear();
  return date ? year : "Pas d'information";
}

// French date format
export function frenchDate(date) {
  const event = new Date(date);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date
    ? event.toLocaleDateString("fr-FR", options)
    : " Pas d'information";
}

// Hour minute run time format
export function hourMin(runtime) {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  return `${hours}h ${minutes}min`;
}

// Clean extra commas after maps
export function cleanString(arrayOfString) {
  let string = arrayOfString.join("");
  if (string.endsWith(", ")) {
    string = string.slice(0, -2);
  }
  return string;
}
