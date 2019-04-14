export const cleanData = (safety, vaccines)=> {
  const parsedSafety = JSON.parse(safety).data
  return Object.keys(vaccines).reduce((acc, vaccObj) => {
    Object.keys(parsedSafety).filter(safetyCountry => {
      if(safetyCountry === vaccObj) {
        return (
          acc.push({name: parsedSafety[safetyCountry].name, rating: parsedSafety[safetyCountry].advisory.score, vaccines: vaccines[vaccObj]})
        )
      }
    });
    return acc;
  }, []);
}