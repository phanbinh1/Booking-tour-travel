import {
   SIGN_IN,
   SIGN_UP,
 } from '../constants';
 
 export function signIn(params) {
   return {
     type: SIGN_IN,
     payload: params,
   }
 }
 
 export function signUp(params) {
   return {
     type: SIGN_UP,
     payload: params,
   }
 }
 
 