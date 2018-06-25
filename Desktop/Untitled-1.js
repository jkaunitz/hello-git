const headingGenerator = (title, typeofHeading) => {
  return `
        <h${typeofHeading}>${title}</h${typeofHeading}>
    `;
};

headingGenerator("Greetings", 2); //? <h2>Greetings</h2>
headingGenerator("Hi there", 1); //? <h1>Hi there</h1>
