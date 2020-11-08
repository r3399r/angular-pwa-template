import { Injectable } from '@angular/core';
import {
  CameraPluginWeb,
  CameraResultType,
  CameraSource,
} from '@capacitor/core';
import { Photo } from 'src/app/model/Photo';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  public photos: Photo[] = [];
  public cameraPluginWeb: CameraPluginWeb;

  constructor(cameraPluginWeb: CameraPluginWeb) {
    this.cameraPluginWeb = cameraPluginWeb;
  }

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await this.cameraPluginWeb.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    this.photos.unshift({
      filepath: 'soon...',
      webviewPath: capturedPhoto.webPath,
    });
  }

  public getPhotos() {
    return this.photos;
  }
}
