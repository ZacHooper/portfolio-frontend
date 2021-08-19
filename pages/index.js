import axios from 'axios';

const Home = ({ restaurants, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <ul>
      {restaurants.map(restaurant => (
        <li key={restaurant.id}>
          {restaurant.name}
          <ul>
            <li>{restaurant.description}</li>
          </ul>
        </li>
      ))}
    </ul>
  );
};

Home.getInitialProps = async ctx => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/restaurants`);
    const restaurants = res.data;
    return { restaurants };
  } catch (error) {
    return { error };
  }
};

export default Home;