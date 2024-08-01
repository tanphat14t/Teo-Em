async function fetchData() {
  try {
    const response = await fetch("assets/js/data.json");
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();

    data.forEach((item) => {
      const linkElement = document.querySelector('a[name="' + item.name + '"]');
      const titleElement = document.querySelector(
        'a[name="' + item.name + '"] span'
      );
      if (linkElement) {
        linkElement.setAttribute("href", item.url);
      }
      if (titleElement) {
        titleElement.textContent = item.title;
      }
    });
  } catch (error) {
    console.error(error);
  }
}

window.onload = fetchData;
