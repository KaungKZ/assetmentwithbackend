import * as yup from 'yup';
import { invalidUrl, requiredTxt } from '../../../../lib/data/data';

export const affiliateTestis = [
  {
    imgSrc: '/images/affiliate/testi1.png',
    name: 'Frank, USA',
    description:
      "Since we have a global audience, the Affiliate Program has helped us to scale our earnings internationally. It's been simple to sign up, expand and use!",
  },
  {
    imgSrc: '/images/affiliate/testi2.png',
    name: 'Frank, USA',
    description:
      "Since we have a global audience, the Affiliate Program has helped us to scale our earnings internationally. It's been simple to sign up, expand and use!",
  },
  {
    imgSrc: '/images/affiliate/testi3.png',
    name: 'Frank, USA',
    description:
      "Since we have a global audience, the Affiliate Program has helped us to scale our earnings internationally. It's been simple to sign up, expand and use!",
  },
];

export const affiliateInitialValues = {
  first_name: '',
  last_name: '',
  phone_no: '',
  email: '',
  website_url: '',
  emirates: '',
  instagram: '',
  facebook: '',
  linkedin: '',
  tiktok: '',
  youtube: '',
  other: '',
  how_our_services_will_be_promoted: '',
};

export const validateAffiliateValues = yup.object({
  first_name: yup.string().required(requiredTxt),
  last_name: yup.string().required(requiredTxt),
  phone_no: yup.string().required(requiredTxt),
  email: yup.string().required(requiredTxt),
  website_url: yup.string().url(invalidUrl).nullable(),
  emirates: yup.string().required(requiredTxt),
  instagram: yup.string().url(invalidUrl),
  facebook: yup.string().url(invalidUrl),
  linkedin: yup.string().url(invalidUrl),
  tiktok: yup.string().url(invalidUrl),
  youtube: yup.string().url(invalidUrl),
  other: yup.string().url(invalidUrl),
  how_our_services_will_be_promoted: yup.string().max(500),
});
