import {
   GET_SELECT_TOUR_SUCCESS,
   GET_SELECT_TOUR_FAIL,
   CREATE_SELECT_TOUR_SUCCESS,
   EDIT_TOUR_SUCCESS,
   DELETE_TOUR_SUCCESS,
 } from '../constants';
 
 const initialState = {
   selectTour: [],
 };
 
 export default function selectTourReducer(state = initialState, action) {
   switch (action.type) {
     case GET_SELECT_TOUR_SUCCESS: {
       return {
         ...state,
         selectTour: [
           ...action.payload,
         ],
       }
     }

     case CREATE_SELECT_TOUR_SUCCESS: {
       return {
         ...state,
         selectTour: [
           ...state.selectTour,
           action.payload,
         ],
       }
     }

   //   case 'UPDATE_SELECT_TOUR_SUCCESS': {

        
   //       const { id, countUsers, selectDay } = action.payload;
   //       const newSelectData = state.selectTour;
   //       const tourIndex = state.selectTour.findIndex((item) => item.id === id);
   //       const editedTour = {
   //       ...state.selectTour[tourIndex],
   //       countUsers,
   //       };
   //       newSelectData.splice(tourIndex, 1, editedTour);
   //       return {
   //      ...state,
   //      selectTour: [
   //        ... newSelectData,
   //      ],
   //    }
   //     }
     

   //   case GET_SELECT_TOUR_FAIL: {
   //    return state;
   //  }

    case EDIT_TOUR_SUCCESS: {
      const { id, countUsers, selectDay } = action.payload;
      console.warn("EDIT_TOUR_SUCCESS: ", action.payload);
      const newSelectData = state.selectTour;
      const tourIndex = state.selectTour.findIndex((item) => item.id === id);
      const editedTour = {
        ...state.selectTour[tourIndex],
        countUsers,
        selectDay,
         
      };
      newSelectData.splice(tourIndex, 1, editedTour);
      return {
        ...state,
        selectTour: [
          ... newSelectData,
        ],
      }
    }

    case DELETE_TOUR_SUCCESS: {
      const { id } = action.payload;
      const newSelectData = state.selectTour;
      const tourIndex = state.selectTour.findIndex((item) => item.id === id);
      newSelectData.splice(tourIndex, 1);
      return {
        ...state,
        selectTour: [
          ...newSelectData,
        ],
      }
    }
     
     default: {
       return state;
     }
   }
 }
 