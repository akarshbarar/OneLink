import Vue from 'vue'
import Vuex from 'vuex'

export const state = () => ({
    loggedIn:true,
    Name:null,
    Bio:null,
    userName:null,
    linkList:[],
  });
  
  
  export const mutations = {
 
      addLinks(state,data){
        state.linkList=data
      },
      isLoggedIn(state,data){
          state.isLoggedIn=data
      },
      setName(state,data){
          state.Name=data
      },
      setBio(state,data){
        state.Bio=data
      },
      setUserName(state,data){
          state.userName=data
      }
  }