import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json`,
      {
        params: {
          place_id: 'ChIJPbQaKElpXz4RSDAOO7_VzCU',
          fields: 'reviews,rating,user_ratings_total',
          key: 'AIzaSyAWMX-MLGLAw14tH5H42n-mrNzOkrSOi2U',
        },
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data' });
  }
}
