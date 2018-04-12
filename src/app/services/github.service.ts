import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class GitHubService {

  constructor(private restangular: Restangular, 
              private processHTTPMsgService: ProcessHTTPMsgService) { }

  //https://api.github.com/users/{username}/repos
  getRepos(user: string): Observable<string> {
  	return this.restangular.all(user + "/repos").getList();
  }

  /*
  //localhost:3000/dishes
  getDishes(): Observable<Dish[]> {
  	return this.restangular.all('dishes').getList();
  }

  //localhost:3000/dishes/id
  getDish(id: number): Observable<Dish> {
    return this.restangular.one('dishes', id).get();
  }

  //localhost:3000/dishes?featured=true
  getFeaturedDish(): Observable<Dish> {
    return this.restangular.all('dishes').getList({ featured: true })
               .map(dishes => dishes[0]);
  }

  getDishIds(): Observable<number[]> {
    return this.getDishes()
               .map(dishes => { return dishes.map(dish => dish.id) });
  }
*/
}
