import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { SocialFeed } from "../models/social-feed-model";

@Injectable({
  providedIn: 'root'
})
export class SocialFeedService {

  private socialfeedURl: string;
  private baseUrl: string;
  private socialfeedResource: string;

  constructor(private http: HttpClient) { 
    this.baseUrl = 'v1/eco';
    this.socialfeedResource = 'socialfeeds';
    this.socialfeedURl = `${environment.serverBaseURL}/${this.baseUrl}/${this.socialfeedResource}`;
  }
  /**
   * Returns all social feed items.
   *
   * @return {Observable<Array<SocialFeed>>} {Observable sticky array of social feeds}
   * */
   getSocialfeedList(accessToken: string): Observable<Array<SocialFeed>> {
    return this.http.get<Array<SocialFeed>>(this.socialfeedURl,
    {
      headers: new HttpHeaders().set('Authorization', `Bearer ${accessToken}`)
    });
  }

  getSocialFeedsByEmailId(emailId: string, accessToken: string): Observable<Array<SocialFeed>>{
    return this.http.get<Array<SocialFeed>>(`${this.socialfeedURl}?emailId=${emailId}`,
    {
      headers: new HttpHeaders().set('Authorization', `Bearer ${accessToken}`)
    });
  }

  /**
   * Creates new socialFeed.
   *
   * @param  {SocialFeed} socialFeed: Sticky {new todo object}
   * @return {Observable<SocialFeed>} {Observable for saved socialFeed object}
  */ 
  createSocialfeed(socialFeed: SocialFeed = null, accessToken: string): Observable<SocialFeed> {
    let newSocialfeed: SocialFeed;
    let file: File;
    newSocialfeed = socialFeed ? socialFeed : new SocialFeed("","","","","",new Date(),new Date());
    return this.http.post<SocialFeed>(this.socialfeedURl, newSocialfeed,
      {
        headers: new HttpHeaders().set('Authorization', `Bearer ${accessToken}`)
      });
  }

  /**
   * Updates a socialFeed.
   *
   * @param  {SocialFeed} socialFeed: SocialFeed {new socialFeed object}
   * @return {Observable<Todo>} {Observable for saved todo object}
  */ 
  updateSocialFeed(socialFeed: SocialFeed, accessToken: string ): Observable<SocialFeed> {
    let newSocialfeed: SocialFeed;
    let file: File;
    newSocialfeed = socialFeed ? socialFeed : new SocialFeed("","","","","",new Date(),new Date());
    return this.http.put<SocialFeed>(this.socialfeedURl+"/"+newSocialfeed.id, newSocialfeed,
    {
      headers: new HttpHeaders().set('Authorization', `Bearer ${accessToken}`)
    });
  }

  /**
   * Deletes a socialFeed.
   *
   * @param  {string} id: string {id of the socialFeed object}
   * @return {Observable<{}>} {Observable for deleted socialFeed object}
  */ 
  deleteSocialFeed(id: string, accessToken: string ): Observable<{}> {
    let url = this.socialfeedURl+"/"+id;
    return this.http.delete(url,
      {
        headers: new HttpHeaders().set('Authorization', `Bearer ${accessToken}`)
      });
  }

}
