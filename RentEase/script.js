const listings = [
  {
    title: "Cozy Room in Bangalore",
    price: "₹8,000/month",
    location: "Bangalore",
    img: "https://via.placeholder.com/400x200?text=Bangalore+Room"
  },
  {
    title: "2BHK Flat in Mumbai",
    price: "₹22,000/month",
    location: "Mumbai",
    img: "https://via.placeholder.com/400x200?text=Mumbai+Flat"
  },
  {
    title: "Studio Apartment in Delhi",
    price: "₹12,000/month",
    location: "Delhi",
    img: "https://via.placeholder.com/400x200?text=Delhi+Studio"
  },
  {
    title: "Shared PG in Hyderabad",
    price: "₹6,000/month",
    location: "Hyderabad",
    img: "https://via.placeholder.com/400x200?text=Hyderabad+PG"
  }
];

function renderListings(filtered = listings) {
  const grid = document.getElementById("listingGrid");
  grid.innerHTML = "";

  filtered.forEach(listing => {
    const card = document.createElement("div");
    card.className = "listing-card";
    card.innerHTML = `
      <img src="${listing.img}" alt="${listing.title}">
      <div class="content">
        <h3>${listing.title}</h3>
        <p>${listing.location}</p>
        <p><strong>${listing.price}</strong></p>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterListings() {
  const input = document.getElementById("locationInput").value.toLowerCase();
  const filtered = listings.filter(l =>
    l.location.toLowerCase().includes(input)
  );
  renderListings(filtered);
}

window.onload = renderListings;
