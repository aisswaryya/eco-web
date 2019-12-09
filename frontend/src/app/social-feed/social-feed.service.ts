import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { SocialFeed } from "../social-feed/models/social-feed-model";

@Injectable({
  providedIn: 'root'
})
export class SocialFeedService {

  private socialfeed: string;
  private socialfeedURl: string;

  constructor(private http: HttpClient) { 
    this.socialfeed = 'socialfeed';
    this.socialfeedURl = `${environment.serverBaseURL}/${this.socialfeed}`;
  }
  /**
   * Returns all social feed items.
   *
   * @return {Observable<Array<SocialFeed>>} {Observable sticky array of social feeds}
  
  */
 getSocialfeedList(): Observable<Array<SocialFeed>> {
  return this.http.get<Array<SocialFeed>>(this.socialfeedURl);
}


/**
 * Creates new socialFeed.
 *
 * @param  {SocialFeed} socialFeed: Sticky {new todo object}
 * @return {Observable<SocialFeed>} {Observable for saved socialFeed object}
*/ 
createSocialfeed(socialFeed: SocialFeed = null): Observable<SocialFeed> {
  let newSocialfeed: SocialFeed;
  let file: File;
  newSocialfeed = socialFeed ? socialFeed : new SocialFeed("","","","","",new Date(),new Date());
  return this.http.post<SocialFeed>(this.socialfeedURl, newSocialfeed);
}

/**
 * Updates a socialFeed.
 *
 * @param  {SocialFeed} socialFeed: SocialFeed {new socialFeed object}
 * @return {Observable<Todo>} {Observable for saved todo object}
*/ 
updateSocialFeed(socialFeed: SocialFeed): Observable<SocialFeed> {
  let newSocialfeed: SocialFeed;
  let file: File;
  newSocialfeed = socialFeed ? socialFeed : new SocialFeed("","","","","",new Date(),new Date());
  return this.http.put<SocialFeed>(this.socialfeedURl+"/"+newSocialfeed.id, newSocialfeed);
}

/**
 * Deletes a socialFeed.
 *
 * @param  {string} id: string {id of the socialFeed object}
 * @return {Observable<{}>} {Observable for deleted socialFeed object}
*/ 
deleteSocialFeed(id: string): Observable<{}> {
  let url = this.socialfeedURl+"/"+id;
  return this.http.delete(url);
}

}
