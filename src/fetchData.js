async function fetchData(itemName) {
  const url = `https://pokeapi.co/api/v2/pokemon/${itemName}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP Error fetching item ${itemName}: Status ${response.status}`);
  }

  return response.json();
}

async function fetchMultipleItems(arrayOfItems) {
  const promises = arrayOfItems.map((item) => fetchData(item));

  try {
    const results = await Promise.all(promises);
    console.log('Successfully fetched all items:', results);
    return results;
  } catch (error) {
    console.error('One or more requests failed:', error.message);
    return null;
  }
}

export default fetchMultipleItems;
