/** @format */
let foodTypes = ['asain', 'mexican', 'italian', 'wordly', 'general'];
let location = ['westside', 'citycenter', 'hillside', 'heartside'];
let eatTypes = ['takeout', 'sitdown', 'ons'];

const restaurants = [
  {
    id: '1',
    name: 'New Holland Brewing',
    website:
      'https://www.newhollandbrew.com/location/grand-rapids/#grand-rapids-menu',
    image:
      'https://absolutebeer.com/wp-content/uploads/2020/01/AB-Breweries-New-Holland-Brewing-Exterior-1-Banner.jpg',
    locationTypes: 'westside',
    foodTypes: 'asain',
    eatTypes: 'takeout',
    filters: ['westside', 'takeout', 'asain'],
  },
  {
    id: '2',
    name: 'Jolly Pumpkin',
    website: 'https://grandrapids.jollypumpkin.com/menu/',
    image:
      'https://images.squarespace-cdn.com/content/v1/580e52c0d482e9d53d593d0b/1576605022682-5C10JYFSQTWMXNN1JFT2/JOLLY+PUMPKIN+PIZZERIA+%26+BREWERY%2C+DETROIT.jpg?format=1000w',
    locationTypes: 'westside',
    foodTypes: 'asain',
    eatTypes: 'takeout',
    filters: ['heartside', 'takeout', 'asain'],
  },
  {
    id: '3',
    name: "Butcher's Union",
    website: 'https://www.butchersuniongr.com/copy-of-eat',
    image:
      'https://wp.rockfordconstruction.com/wp-content/uploads/2019/01/BUTCHERS_UNION_04.jpg',
    locationTypes: 'heartside',
    foodTypes: 'asain',
    eatTypes: 'takeout',
    filters: ['westside', 'takeout', 'asain'],
  },
  {
    id: '4',
    name: 'The Chop House',
    website:
      'https://www.newhollandbrew.com/location/grand-rapids/#grand-rapids-menu',
    image: 'https://www.new-jersey-leisure-guide.com/images/chophouse-1000.jpg',
    locationTypes: 'citycenter',
    foodTypes: 'asain',
    eatTypes: 'takeout',
    filters: ['citycenter', 'takeout', 'asain'],
  },
  {
    id: '5',
    name: 'Sovengard',
    website:
      'https://www.newhollandbrew.com/location/grand-rapids/#grand-rapids-menu',
    image:
      'https://www.sovengard.com/wp-content/uploads/2016/05/sovengard-interior-grand-rapids-beergarden.jpg',
    locationTypes: 'westside',
    foodTypes: 'asain',
    eatTypes: 'takeout',
    filters: ['hillside', 'takeout', 'asain'],
  },
  {
    id: '6',
    name: 'The B.O.B',
    website:
      'https://www.newhollandbrew.com/location/grand-rapids/#grand-rapids-menu',
    image: 'https://www.thegilmorecollection.com/img/facebook-thebob.jpg',
    locationTypes: 'citycenter',
    foodTypes: 'asain',
    eatTypes: 'takeout',
    filters: ['citycenter', 'ons', 'asain'],
  },
  {
    id: '7',
    name: 'CONDADO',
    website: 'https://condadotacos.com/menu-drinks/',
    image:
      'https://www.woodtv.com/wp-content/uploads/sites/51/2021/02/condado-020421.jpg?strip=1',
    locationTypes: 'hillside',
    foodTypes: 'asain',
    eatTypes: 'takeout',
    filters: ['takeout', 'hillside', 'asain'],
  },
];

export default restaurants;
