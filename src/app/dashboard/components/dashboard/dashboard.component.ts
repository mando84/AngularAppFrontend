import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/profile/services/profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  userDetails: any = JSON.parse(localStorage.getItem('decodedValues') || '');

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(
      (profile) => {},
      (err) => {}
    );
  }
}
