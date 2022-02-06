import nicaragua_coffee_two from './nicaragua_coffee_two.png';
import serrano_coffee from './serrano_coffee.png';

import peru_coffee from './peru_coffee.png';
import chc_muffin from './chc_muffin.png';

import capp_hot_coffee from './capp_hot_coffee.png';
import ice_scoot_coffee from './ice_scoot_coffee.png';


import patch_roast_coffbag from './patch_roast_coffbag.png';
import takeaway_coffee from './takeaway_coffee.png';

import lion_coffee_bag from './lion_coffee_bag.png';
import van_muffin from './van_muffin.png';
import van_muffin_t from './van_muffin_t.png';

import columbia_coffee from './columbia_coffee.png';
import ice_choch_coffee from './ice_choch_coffee.png';

const storeProducts = [
					{
						id: 1,
						type: 'Roasted coffee',
						temp: 'beans',
						cat: 'Hot drink',
						name: 'Nicaragua coffee',
						price: '45.00',
						img: nicaragua_coffee_two,
						resizedW: 90,
					},
					{
						id: 2,
						type: 'Roasted coffee',
						temp: 'beans',
						cat: 'Hot drink',
						name: 'Serrano coffee',
						price: '30.00',
						img: serrano_coffee,
						resizedW: 90,
					},
					{
						id: 3,
						type: 'Roasted coffee',
						temp: 'beans',
						cat: 'Hot drink',
						name: 'Peru coffee',
						price: '33.00',
						img: peru_coffee
					},
					{
						id: 4,
						type: 'Dessert',
						temp: 'none',
						cat: 'Dessert',
						name: 'Chocolate muffin',
						price: '10.00',
						img: chc_muffin
					},
					{
						id: 5,
						type: 'Roasted coffee',
						temp: 'hot',
						cat: 'Hot drink',
						name: 'American coffee',
						price: '15.00',
						img: capp_hot_coffee,
						resizedW: 130,
						resizedH: 110
					},
					{
						id: 6,
						type: 'Roasted coffee',
						temp: 'ice',
						cat: 'Ice drink',
						name: 'Vanilla frappe',
						price: '20.00',
						img: ice_scoot_coffee,
						resizedH: 150,
					},
					{
						id: 7,
						type: 'Roasted coffee',
						temp: 'beans',
						cat: 'Hot drink',
						name: 'American coffee',
						price: '25.00',
						img: patch_roast_coffbag
						
					},
					{
						id: 8,
						type: 'Roasted coffee',
						temp: 'hot',
						cat: 'Hot drink',
						name: 'American coffee',
						price: '15.00',
						img: takeaway_coffee,
						resizedH: 160,
					},
					{
						id: 9,
						type: 'Roasted coffee',
						temp: 'beans',
						cat: 'Hot drink',
						name: 'Lion coffee',
						price: '33.00',
						img: lion_coffee_bag
					},
					{
						id: 10,
						type: 'Dessert',
						temp: 'none',
						cat: 'Dessert',
						name: 'Vanilla muffin',
						price: '10.00',
						img: van_muffin
					},
					{
						id: 11,
						type: 'Roasted coffee',
						temp: 'beans',
						cat: 'Hot Drink',
						name: 'Columbia coffee',
						price: '45.00',
						img: columbia_coffee,
						resizedW: 85,
						resizedMobW: 55
					},
					{
						id: 12,
						type: 'Roasted coffee',
						temp: 'ice',
						cat: 'Cold drink',
						name: 'Chocolate frappe',
						price: '34.00',
						img: ice_choch_coffee,
						resizedH: 200,
					},
					{
						id: 13,
						type: 'Roasted coffee',
						temp: 'beans',
						cat: 'Hot drink',
						name: 'Nicaragua coffee',
						price: '33.00',
						img: nicaragua_coffee_two,
						resizedW: 90,
					},
					{
						id: 14,
						type: 'Roasted coffee',
						temp: 'beans',
						cat: 'Hot drink',
						name: 'Serrano coffee',
						price: '25.00',
						img: serrano_coffee,
						resizedW: 90,
					},
					{
						id: 15,
						type: 'Roasted coffee',
						temp: 'beans',
						cat: 'Hot drink',
						name: 'Peru coffee',
						price: '39.00',
						img: peru_coffee
					},
					{
						id: 16,
						type: 'Dessert',
						temp: 'none',
						cat: 'Dessert',
						name: 'Chocolate muffin',
						price: '15.00',
						img: chc_muffin
					},
					{
						id: 17,
						type: 'Roasted coffee',
						temp: 'hot',
						cat: 'Hot drink',
						name: 'American coffee',
						price: '12.00',
						img: capp_hot_coffee,
						resizedW: 130,
						resizedH: 110
					},
					{
						id: 18,
						type: 'Roasted coffee',
						temp: 'ice',
						cat: 'Ice drink',
						name: 'Vanilla frappe',
						price: '25.00',
						img: ice_scoot_coffee,
						resizedH: 150,
					},
					{
						id: 19,
						type: 'Roasted coffee',
						temp: 'beans',
						cat: 'Hot drink',
						name: 'American coffee',
						price: '35.00',
						img: patch_roast_coffbag
						
					},
					{
						id: 20,
						type: 'Roasted coffee',
						temp: 'hot',
						cat: 'Hot drink',
						name: 'American coffee',
						price: '17.00',
						img: takeaway_coffee,
						resizedH: 160,
					},
					{
						id: 21,
						type: 'Roasted coffee',
						temp: 'beans',
						cat: 'Hot drink',
						name: 'Lion coffee',
						price: '30.00',
						img: lion_coffee_bag
					},
					{
						id: 22,
						type: 'Dessert',
						temp: 'none',
						cat: 'Dessert',
						name: 'Vanilla muffin',
						price: '11.00',
						img: van_muffin_t
					},
					{
						id: 23,
						type: 'Roasted coffee',
						temp: 'beans',
						cat: 'Hot Drink',
						name: 'Columbia coffee',
						price: '36.00',
						img: columbia_coffee,
						resizedW: 85,
						resizedMobW: 55
					},
					{
						id: 24,
						type: 'Roasted coffee',
						temp: 'ice',
						cat: 'Cold drink',
						name: 'Chocolate frappe',
						price: '31.00',
						img: ice_choch_coffee,
						resizedH: 200,
					}

]

export default storeProducts;