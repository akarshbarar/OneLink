import Vue from 'vue'
import Vuex from 'vuex'

export const state = () => ({
    loggedIn:false,
    Name:'',
    userName:'',
    linkList:[],
  });
  
  
  export const mutations = {
 
      addLinks(state,data){
        state.linkList.push(data)
      },
      isLoggedIn(state,data){
          state.isLoggedIn=data
      },
      setName(state,data){
          state.Name=data
      },
      setUserName(state,data){
          state.userName=data
      }
  }