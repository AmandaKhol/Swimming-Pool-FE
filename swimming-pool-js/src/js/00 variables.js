'use strict';

//Global variables

const centerSelect = document.querySelector('.js-select');
const formElement = document.querySelector('.js-center-form');
const searchButton = document.querySelector('.js-search');
const streetList = document.querySelector('.js-street-list');
const hoursList = document.querySelector('.js-hours');
const streetItem = document.querySelector('.js-street');

let pool = '-';
const centers = [
  {
    id: 'al',
    name: 'Aluche',
    streets: [
      {
        id: '1',
        hours: ['10:30', '12:00', '13:30'],
      },
      {
        id: '2',
        hours: ['11:00', '12:30', '14:00'],
      },
    ],
  },
  {
    id: 'ch',
    name: 'Carabanchel',
    streets: [
      { id: '3', hours: ['15:00', '16:30', '18:00'] },
      { id: '4', hours: ['15:30', '17:00', '18:30'] },
    ],
  },
  {
    id: 'vk',
    name: 'Vallecas',
    streets: [
      { id: '5', hours: ['18:30', '20:00', '21:30'] },
      { id: '6', hours: ['18:00', '19:30', '21:00'] },
    ],
  },
];
