import {
   GET_USER,
   CREATE_USER,
   EDIT_PASSWORD,
 } from '../constants';
 
 export function getUser(params) {
   return {
     type: GET_USER,
     payload: params,
   }
 }
 
 export function createUser(params) {
   return {
     type: CREATE_USER,
     payload: params,
   }
 }
 //đổi password
 export function editPassword(params) {
   return {
     type: EDIT_PASSWORD,
     payload: params,
   }
 }
 
 