import { TestBed } from '@angular/core/testing';
import { CameraPluginWeb } from '@capacitor/core';
import { Photo } from 'src/app/model/Photo';
import { PhotoService } from 'src/app/services/photo.service';

describe('PhotoService', () => {
  let photoService: PhotoService;
  let cameraSpy: jasmine.SpyObj<CameraPluginWeb>;

  beforeEach(() => {
    cameraSpy = jasmine.createSpyObj('CameraPluginWeb', ['getPhoto']);
    cameraSpy.getPhoto.and.resolveTo({ webPath: 'test', format: 'test' });

    TestBed.configureTestingModule({
      providers: [{ provide: CameraPluginWeb, useValue: cameraSpy }],
    });
    photoService = TestBed.inject(PhotoService);
  });

  it('should be created', () => {
    expect(photoService).toBeTruthy();
  });

  it('getPhotos() should work', () => {
    const res: Photo[] = photoService.getPhotos();
    expect(res).toEqual([]);
  });

  it('addNewToGallery() should work', async () => {
    await photoService.addNewToGallery();
    expect(cameraSpy.getPhoto).toHaveBeenCalledTimes(1);
  });
});
