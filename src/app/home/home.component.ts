import { Component, OnInit, Inject } from '@angular/core';
import { GitHubService } from '../services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: string;
  userErrMsg: string;

  constructor(private githubService: GitHubService, 
        	@Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
  	this.githubService.getRepos('sstamoulas')
        .subscribe(data => this.user = data, 
        errorMsg => this.userErrMsg = <any>errorMsg);
  }

}
