import type {ViewProps} from 'ViewPropTypes';
import type {HostComponent} from 'react-native';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';

// type PhysicalCameraDeviceType = 'ultra-wide-angle-camera' | 'wide-angle-camera' | 'telephoto-camera';
// type CameraPosition = 'front' | 'back' | 'unspecified' | 'external';
// type ColorSpace =
//   // ios
//   | 'hlg-bt2020'
//   | 'p3-d65'
//   | 'srgb'
//   // android
//   | 'yuv'
//   | 'jpeg'
//   | 'jpeg-depth'
//   | 'raw'
//   | 'heic'
//   | 'private'
//   | 'depth-16'
//   | 'unknown';
// type AutoFocusSystem = 'contrast-detection' | 'phase-detection' | 'none';
// type VideoStabilizationMode = 'off' | 'standard' | 'cinematic' | 'cinematic-extended' | 'auto';
// type PixelFormat = '420f' | '420v' | 'x420';
// type CameraPreset =
//   | 'cif-352x288'
//   | 'hd-1280x720'
//   | 'hd-1920x1080'
//   | 'hd-3840x2160'
//   | 'high'
//   | 'iframe-1280x720'
//   | 'iframe-960x540'
//   | 'input-priority'
//   | 'low'
//   | 'medium'
//   | 'photo'
//   | 'vga-640x480';
// type Orientation = 'portrait' | 'portraitUpsideDown' | 'landscapeLeft' | 'landscapeRight';

// type FrameRateRange = {
//   minFrameRate?: number;
//   maxFrameRate?: number;
// }

// type CameraDeviceFormat = {
//   photoHeight?: number;
//   photoWidth?: number;
//   videoHeight?: number;
//   videoWidth?: number;
//   isHighestPhotoQualitySupported?: boolean;
//   maxISO?: number;
//   minISO?: number;
//   fieldOfView?: number;
//   maxZoom?: number;
//   colorSpaces?: ColorSpace[];
//   supportsVideoHDR?: boolean;
//   supportsPhotoHDR?: boolean;
//   frameRateRanges?: FrameRateRange[];
//   autoFocusSystem?: AutoFocusSystem;
//   videoStabilizationModes?: VideoStabilizationMode[];
//   pixelFormat?: PixelFormat;
// }
// type CameraDevice = {
//   id?: string;
//   devices?: PhysicalCameraDeviceType[];
//   position?: CameraPosition;
//   name?: string;
//   hasFlash?: boolean;
//   hasTorch?: boolean;
//   isMultiCam?: boolean;
//   minZoom?: number;
//   maxZoom?: number;
//   neutralZoom?: number;
//   formats?: CameraDeviceFormat[];
//   supportsParallelVideoProcessing?: boolean;
//   supportsLowLightBoost?: boolean;
//   supportsDepthCapture?: boolean;
//   supportsRawCapture?: boolean;
//   supportsFocus?: boolean;
// }

export interface NativeProps extends ViewProps {
  cameraId: string;
  // device: CameraDevice;
  // isActive: boolean;
  // photo?: boolean;
  // video?: boolean;
  // audio?: boolean;
  // torch?: 'off' | 'on';
  // zoom?: number;
  // enableZoomGesture?: boolean;
  // preset?: CameraPreset;
  // format?: CameraDeviceFormat;
  // fps?: number;
  // hdr?: boolean;
  // lowLightBoost?: boolean;
  // colorSpace?: ColorSpace;
  // videoStabilizationMode?: VideoStabilizationMode;
  // enableDepthData?: boolean;
  // enablePortraitEffectsMatteDelivery?: boolean;
  // enableHighQualityPhotos?: boolean;
  // enableFpsGraph?: boolean;
  // orientation?: Orientation;
  // previewType?: 'native' | 'skia';
  // onError?: (error) => void;
  // onInitialized?: () => void;
  // frameProcessor?: (frame) => void;
}

export default codegenNativeComponent<NativeProps>(
  'CameraView',
) as HostComponent<NativeProps>;