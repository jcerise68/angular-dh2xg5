import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  // a few posts taken from my mongoDB
  postList = [
    {
      "_id":"64349f464781798d9b67643d",
      "title":"Harvard",
      "content":"This is a harvard DCE student post",
      "photo":"/img/d55ea9f6784915098cc6fcbad91252a7.jpg",
      "__v":0
    },
    {
      "_id":"64349f5f4781798d9b67643f",
      "title":"Dogs",
      "content":"I like dogs",
      "photo":"/img/6ca19e1bc99c35c60f16c600338e032a.jpg",
      "__v":0
    }
  ];

  constructor() { }

  listPosts():any{
    return this.postList;
  }
}
