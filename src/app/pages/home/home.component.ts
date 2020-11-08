import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Photo } from 'src/app/model/Photo';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public router: Router;
  public photoService: PhotoService;
  public photos: Photo[];

  constructor(router: Router, photoService: PhotoService) {
    this.router = router;
    this.photoService = photoService;
    this.photos = photoService.getPhotos();
  }

  ngOnInit() {}

  public async onClick() {
    this.router.navigate(['child']);
  }

  public addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
