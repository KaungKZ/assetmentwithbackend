import { getAssetsUrl } from "../../../../lib/func/image";
import { ScubaserviceImgList } from "../../../ui/v2/landing-page/try-scubadiving/data";
const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];

const galleryData = [
  {
    url: getAssetsUrl("/images/pages/gallery/bermuda_diving_pool.jpeg"),
    title: "Bermuda Gallery 1",
  },
  {
    url: getAssetsUrl(`/images/pages/gallery/bermuda_diving_center1.jpeg`),
    title: "Bermuda Gallery 2",
  },
  {
    url: getAssetsUrl(`/images/pages/gallery/bermuda_diving_center2.jpeg`),
    title: "Bermuda Gallery 3",
  },
  {
    url: getAssetsUrl(`/images/pages/gallery/bermuda_diving_center3.jpeg`),
    title: "Bermuda Gallery 4",
  },
  {
    url: getAssetsUrl(`/images/pages/gallery/bermuda_diving_center4.jpeg`),
    title: "Bermuda Gallery 5",
  },
  {
    url: getAssetsUrl(`/images/pages/gallery/bermuda_diving_center5.jpeg`),
    title: "Bermuda Gallery 6",
  },
  {
    url: getAssetsUrl(`/images/pages/gallery/bermuda_diving_center6.jpeg`),
    title: "Bermuda Gallery 7",
  },
  {
    url: getAssetsUrl(`/images/pages/gallery/bermuda_diving_center7.jpeg`),
    title: "Bermuda Gallery 8",
  },
  {
    url: getAssetsUrl(`/images/pages/gallery/bermuda_diving_center8.jpeg`),
    title: "Bermuda Gallery 9",
  },
  {
    url: getAssetsUrl(`/images/pages/gallery/bermuda_diving_center9.jpeg`),
    title: "Bermuda Gallery 10",
  },
  {
    url: getAssetsUrl(`/images/pages/gallery/bermuda_diving_center10.jpeg`),
    title: "Bermuda Gallery 11",
  },
  {
    url: getAssetsUrl(`/images/pages/gallery/bermuda_diving_center11.jpeg`),
    title: "Bermuda Gallery 12",
  },
  {
    url: getAssetsUrl(`/images/pages/gallery/bermuda_diving_center12.jpeg`),
    title: "Bermuda Gallery 13",
  },
  {
    url: getAssetsUrl(`/images/pages/gallery/bermuda_diving_center13.jpeg`),
    title: "Bermuda Gallery 14",
  },
];

const photos = galleryData.map((image, index) => {
  return {
    src: image.url,
    key: `${index}`,
    width: 1920,
    height: 1080,
    images: [
      {
        src: image.url,
        width: 1920,
        height: 1080,
      },
    ],
  };
});

export default photos;

export const Newphotos = ScubaserviceImgList.map((image, index) => {
  return {
    src: image.url,
    key: `${index}`,
    width: 1920,
    height: 1080,
    images: [
      {
        src: image.image,
        width: 1920,
        height: 1080,
      },
    ],
  };
});
