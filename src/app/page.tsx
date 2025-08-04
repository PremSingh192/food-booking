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
    <div className="min-h-screen bg-gray-50 font-sans">
      <Head>
        <title>{restaurant.name} - Restaurant Portfolio</title>
        <meta name="description" content={restaurant.description} />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
      </Head>

      {/* Hero Section */}
      <header className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold font-playfair" data-testid="restaurant-name">{restaurant.name}</h1>
            <p className="mt-4 text-lg md:text-xl font-open-sans max-w-2xl mx-auto" data-testid="restaurant-description">{restaurant.description}</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 md:py-16">
        {/* Contact Details */}
        <section className="mb-12">
          <h2 className="text-3xl font-playfair font-semibold text-gray-800 mb-6 text-center">Contact Details</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto transform transition duration-300 hover:shadow-xl">
            <p data-testid="restaurant-address" className="mb-4 text-gray-700 font-open-sans"><strong className="font-semibold">Address:</strong> {restaurant.address}</p>
            <p data-testid="restaurant-phone" className="mb-4 text-gray-700 font-open-sans"><strong className="font-semibold">Phone:</strong> <a href={`tel:${restaurant.phone}`} className="text-blue-600 hover:underline">{restaurant.phone}</a></p>
            <p data-testid="restaurant-email" className="mb-4 text-gray-700 font-open-sans"><strong className="font-semibold">Email:</strong> <a href={`mailto:${restaurant.email}`} className="text-blue-600 hover:underline">{restaurant.email}</a></p>
          </div>
        </section>

        {/* Opening Hours */}
        <section className="mb-12">
          <h2 className="text-3xl font-playfair font-semibold text-gray-800 mb-6 text-center">Opening Hours</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto transform transition duration-300 hover:shadow-xl">
            <ul className="list-none font-open-sans text-gray-700" data-testid="opening-hours">
              {restaurant.openingHours.map((item, index) => (
                <li key={index} data-day={item.day} className="flex justify-between py-2 border-b last:border-b-0">{item.day}<span>{item.hours}</span></li>
              ))}
            </ul>
          </div>
        </section>

        {/* Location */}
        <section className="mb-12">
          <h2 className="text-3xl font-playfair font-semibold text-gray-800 mb-6 text-center">Our Location</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto transform transition duration-300 hover:shadow-xl">
            <p data-testid="restaurant-location" data-lat={restaurant.location.lat} data-lng={restaurant.location.lng} className="text-gray-700 font-open-sans mb-4">
              Coordinates: {restaurant.location.lat}, {restaurant.location.lng}
            </p>
            <div className="mt-4">
              <iframe
                className="w-full h-80 rounded-lg"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyD3J8z1iZ8Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8&q=${encodeURIComponent(restaurant.address)}`}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Menu Highlights */}
        <section className="mb-12">
          <h2 className="text-3xl font-playfair font-semibold text-gray-800 mb-6 text-center">Menu Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="menu-items">
            {restaurant.menu.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg transform transition duration-300 hover:shadow-xl hover:-translate-y-1" data-menu-item={item.name}>
                <h3 className="text-xl font-playfair font-semibold text-gray-800">{item.name}</h3>
                <p className="text-blue-600 font-semibold mt-2">{item.price}</p>
                <p className="text-gray-600 font-open-sans mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-open-sans">&copy; 2025 {restaurant.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}