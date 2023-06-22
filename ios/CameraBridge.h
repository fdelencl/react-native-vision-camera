//
//  CameraBridge.h
//  mrousavy
//
//  Created by Marc Rousavy on 09.11.20.
//  Copyright © 2020 mrousavy. All rights reserved.
//

#pragma once

#import <Foundation/Foundation.h>

#import <React/RCTViewManager.h>
#import <React/RCTUIManager.h>
#ifdef __cplusplus

#import "RCTViewComponentView.hpp"
#import <react/renderer/components/VisionCamera/ComponentDescriptors.h>
#import <react/renderer/components/VisionCamera/EventEmitters.h>
#import <react/renderer/components/VisionCamera/Props.h>
#import <react/renderer/components/VisionCamera/RCTComponentViewHelpers.h>

#endif

#import "FrameProcessorCallback.h"
#import "FrameProcessorRuntimeManager.h"
#import "Frame.h"
#import "RCTBridge+runOnJS.h"
#import "JSConsoleHelper.h"

#ifdef VISION_CAMERA_DISABLE_FRAME_PROCESSORS
static bool VISION_CAMERA_ENABLE_FRAME_PROCESSORS = false;
#else
static bool VISION_CAMERA_ENABLE_FRAME_PROCESSORS = true;
#endif

@interface CameraBridge: RCTViewManager

@end
