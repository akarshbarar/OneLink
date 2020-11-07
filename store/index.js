import Vue from 'vue'
import Vuex from 'vuex'

export const state = () => ({
    loggedIn:true,
    Name:'',
    Bio:'',
    userName:'',
    smsNumber:0,
    callNumber:0,
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
      setSmsNumber(state,data){
        state.smsNumber=data
      },
      setCallNumber(state,data){
        state.callNumber=data
      },
      setUserName(state,data){
          state.userName=data
      }
  }