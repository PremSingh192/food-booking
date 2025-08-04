import Head from 'next/head';

export default function RestaurantDetails() {
  const restaurant = {
    name: "The Gourmet Bistro",
    description: "A cozy restaurant offering a fusion of Italian and French cuisine with a modern twist.",
    address: "123 Flavor Street, Food City, FC 12345",
    phone: "+1 (555) 123-4567",
    email: "contact@gourmetbistro.com",
    openingHours: [
      { day: "Monday", hours: "11:00 AM - 10:00 PM" },
      { day: "Tuesday", hours: "11:00 AM - 10:00 PM" },
      { day: "Wednesday", hours: "11:00 AM - 10:00 PM" },
      { day: "Thursday", hours: "11:00 AM - 10:00 PM" },
      { day: "Friday", hours: "11:00 AM - 11:00 PM" },
      { day: "Saturday", hours: "10:00 AM - 11:00 PM" },
      { day: "Sunday", hours: "10:00 AM - 9:00 PM" },
    ],
    location: {
      lat: 40.7128,
      lng: -74.0060,
    },
    menu: [
      { name: "Truffle Risotto", price: "$24", description: "Creamy risotto with black truffle and parmesan." },
      { name: "Coq au Vin", price: "$28", description: "Classic French chicken stew with red wine." },
      { name: "Tiramisu", price: "$8", description: "Traditional Italian dessert with mascarpone." },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>{restaurant.name} - Restaurant Details</title>
        <meta name="description" content={restaurant.description} />
      </Head>

      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold" data-testid="restaurant-name">{restaurant.name}</h1>
          <p className="mt-2 text-lg" data-testid="restaurant-description">{restaurant.description}</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Details</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p data-testid="restaurant-address" className="mb-2"><strong>Address:</strong> {restaurant.address}</p>
            <p data-testid="restaurant-phone" className="mb-2"><strong>Phone:</strong> <a href={`tel:${restaurant.phone}`}>{restaurant.phone}</a></p>
            <p data-testid="restaurant-email" className="mb-2"><strong>Email:</strong> <a href={`mailto:${restaurant.email}`}>{restaurant.email}</a></p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Opening Hours</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="list-disc pl-5" data-testid="opening-hours">
              {restaurant.openingHours.map((item, index) => (
                <li key={index} data-day={item.day}>{`${item.day}: ${item.hours}`}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Location</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p data-testid="restaurant-location" data-lat={restaurant.location.lat} data-lng={restaurant.location.lng}>
              Coordinates: {restaurant.location.lat}, {restaurant.location.lng}
            </p>
            <div className="mt-4">
              <iframe
                className="w-full h-64 rounded"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyD3J8z1iZ8Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8&q=${encodeURIComponent(restaurant.address)}`}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Menu Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="menu-items">
            {restaurant.menu.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md" data-menu-item={item.name}>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">{item.price}</p>
                <p className="text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 {restaurant.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}