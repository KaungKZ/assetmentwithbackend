import axios from "axios";
import bconfig from "../bconfig";
import { getAssetsUrl } from "../../lib/func/image";

class GoogleService {
  constructor() {}

  /**
   * This method should only be run on server side
   *
   * */
  async getReviews() {
    return this.defaultValues();

    try {
      const response = await axios.get(
        bconfig.integrations.google.places.endpoint,
        {
          params: {
            place_id: bconfig.integrations.google.business.placeId,
            fields: "reviews,rating,user_ratings_total",
            key: bconfig.integrations.google.business.apiKey,
          },
        }
      );

      return response.data.result;
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * Mock data for google reviews (PlacesAPI)
   *
   * @returns
   */
  defaultValues() {
    return {
      rating: 4.8,
      reviews: [
        {
          author_name: "Alejandro Leon Quiroz Callejas",
          author_url:
            "https://www.google.com/maps/contrib/115204624090366644029/reviews",
          language: "en",
          original_language: "en",
          profile_photo_url:
            "https://lh3.googleusercontent.com/a-/ALV-UjUqQ9sbxZZwb2v9kG3-yNl2qqzEbqVaAV5VRSSSiL9Rdt4ea0Uz=s128-c0x00000000-cc-rp-mo",
          rating: 5,
          relative_time_description: "a month ago",
          text:
            "Great service, amazing education, very thorough customer service and support.\n" +
            "\n" +
            "All the instructors and staff are very kind, understanding and supportive, there was not a single moment where a question was not answered.\n" +
            "Special thanks to Jaber, Greg, Ben and Noel, the best instructors to have, every dive was interesting and fun.\n" +
            "10/10 would recommend if you’re looking to start your diving journey!",
          time: 1743065612,
          translated: false,
        },
        {
          author_name: "Stuart Hooper-Smith",
          author_url:
            "https://www.google.com/maps/contrib/101807591632340683265/reviews",
          language: "en",
          original_language: "en",
          profile_photo_url:
            "https://lh3.googleusercontent.com/a/ACg8ocI0T1HzzG4aiceSbTi53jCcK7K4ZQPQoWeHNgf7xRhxGj0xug=s128-c0x00000000-cc-rp-mo",
          rating: 5,
          relative_time_description: "2 months ago",
          text:
            "My experience at Bermuda Dive Centre has been fantastic.  All the tutors are highly skilled, professional and friendly.\n" +
            "I would recommend anyone wishing to gain their Open Water certification to come here.\n" +
            "I rate them 100%.",
          time: 1740136575,
          translated: false,
        },
        {
          author_name: "Vanessa Rocco",
          author_url:
            "https://www.google.com/maps/contrib/111878170976885954475/reviews",
          language: "en",
          original_language: "en",
          profile_photo_url:
            "https://lh3.googleusercontent.com/a-/ALV-UjVE1jKprBN7izKsv52JTSWKg4rerfFgUv1yo1HvHLmurwf8NKLzHw=s128-c0x00000000-cc-rp-mo-ba4",
          rating: 5,
          relative_time_description: "4 months ago",
          text:
            "PADI Open Water. The experience was amazing! The team members are the kindest souls. I had never even done snorkeling so i was a little bit nervous. Their calm and funny attitude while still being safety-focused put me immediately at ease.\n" +
            "The aesthetic of where you do the pool exercises is beautiful!\n" +
            "I chose the “boat” exam as an add on and would highly recommend, especially if you’ve never done diving before.\n" +
            "Special thanks to Noel, Greg and Ben for allowing me in the scuba community",
          time: 1734340021,
          translated: false,
        },
        {
          author_name: "Alhassan Saeed",
          author_url:
            "https://www.google.com/maps/contrib/107563420710096924372/reviews",
          language: "en",
          original_language: "en",
          profile_photo_url:
            "https://lh3.googleusercontent.com/a-/ALV-UjXsOzeHL1QP_u6zL6XwIt2LXM_sjKFpEpWWl5HEqgzP9FqhtKo=s128-c0x00000000-cc-rp-mo",
          rating: 5,
          relative_time_description: "a week ago",
          text: "Very great lesson I had. It' was very impactful and I really enjoyed the training and I do really appreciate the lessons as well. Thank u all the instructors and entire management",
          time: 1745311468,
          translated: false,
        },
        {
          author_name: "Senem Akarsu",
          author_url:
            "https://www.google.com/maps/contrib/104703537068279458824/reviews",
          language: "en",
          original_language: "en",
          profile_photo_url:
            "https://lh3.googleusercontent.com/a/ACg8ocKWCO2KjsSmuKNSmoISovnw4gYoNEARb7P_6--STnhOfjt96dY=s128-c0x00000000-cc-rp-mo-ba3",
          rating: 5,
          relative_time_description: "2 weeks ago",
          text: "Truly super nice crew working there. Always helpful. Find Ahmed and John to assist. If they pick on you, that means they've accepted you as part of their family😁Consequently, I had a wonderful time completing my certification. I had a great time with my instructors as well -- Boris (if you want he can go military style💪 on you 😁) Ben (might leave you to save yourself (just kidding 😂))and Nivid (will probably save you). Can't wait to go on the ocean clean up dives with them 😊",
          time: 1744374329,
          translated: false,
        },
        {
          author_name: "sheji shereef",
          author_url:
            "https://www.google.com/maps/contrib/104703537068279458824/reviews",
          language: "en",
          original_language: "en",

          time: 1744374329,
          translated: false,
          rating: 5,
          profile_photo_url: getAssetsUrl(
            "/images/pages/home/testi/sheji-sherif.jpg"
          ),
          relative_time_description: null,
          source: "Tripadvisor",

          text: "Wonderful experience… after the dive, u will feel that heaven is in under the sea❤️Must try onces in a life time✌️",
        },
        {
          author_name: "Adeel S",
          author_url:
            "https://www.google.com/maps/contrib/104703537068279458824/reviews",
          language: "en",
          original_language: "en",

          time: 1744374329,
          translated: false,
          rating: 5,
          profile_photo_url: getAssetsUrl(
            "/images/pages/home/testi/adeel-s.jpg"
          ),
          relative_time_description: null,
          source: "Tripadvisor",
          rating: 5,
          text: "Good experience...great staff. Easy booking and convenient place. It was our first diving experience and we all loved it",
        },
        {
          author_name: "Always E",
          author_url:
            "https://www.google.com/maps/contrib/104703537068279458824/reviews",
          language: "en",
          original_language: "en",

          time: 1744374329,
          translated: false,
          rating: 5,
          profile_photo_url: getAssetsUrl(
            "/images/pages/home/testi/always-e.jpg"
          ),
          relative_time_description: null,
          source: "Tripadvisor",
          rating: 5,
          text: "Amazing ! Great people and very kind. Professional and give step by step instructions.Highly recommend.",
        },
      ],
      user_ratings_total: 2679,
    };
  }
}

const GoogleServiceInstance = new GoogleService();

export default GoogleServiceInstance;
